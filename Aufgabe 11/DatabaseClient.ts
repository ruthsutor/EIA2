namespace DatabaseClient {
    
    export let search : string = "martikel";
    
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
        let searchbyname: HTMLInputElement = <HTMLInputElement>document.getElementById("searchbyname");
        let searchbymartikel: HTMLInputElement = <HTMLInputElement>document.getElementById("searchbymartikel");
        searchbyname.addEventListener("click", changePlaceholder);
        searchbymartikel.addEventListener("click", changePlaceholder);
        submit.addEventListener("click", searchforStudent);
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    
    function searchforStudent(_event: Event) : void{
        let query: string = "command=findOne";
        let radio: HTMLInputElement = <HTMLInputElement>document.getElementById("radio");
        if(search == "martikel"){
            query += "&searchfor=martikel&matrikel=" + radio.value;
            }
        if(search == "name"){
            query += "&searchfor=name&name=" + radio.value;
            }
        sendRequest(query, handleFindOneResponse);
        }
    function handleFindOneResponse(_event: ProgressEvent) : void{
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement =  <HTMLTextAreaElement>document.getElementById("text1");
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
        } 
    
    function changePlaceholder(_event: Event): void{
        let text: HTMLInputElement = <HTMLInputElement>document.getElementById("radio");
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        if(target.id == "searchbyname"){
        text.placeholder = "type name here";
        search = "name";
        }
        if(target.id == "searchbymartikel"){
        text.placeholder = "type martikel here";
        search = "martikel";
        }
        console.log(search);
        }

    function insert(_event: Event): void {
        
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8100?" + _query, true);
        //xhr.open("GET", "https://eia2-servertest.herokuapp.com?color=" + _color, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement =  <HTMLTextAreaElement>document.getElementById("text2");
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
}