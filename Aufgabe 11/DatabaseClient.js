var DatabaseClient;
(function (DatabaseClient) {
    DatabaseClient.search = "martikel";
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let submit = document.getElementById("submit");
        let searchbyname = document.getElementById("searchbyname");
        let searchbymartikel = document.getElementById("searchbymartikel");
        searchbyname.addEventListener("click", changePlaceholder);
        searchbymartikel.addEventListener("click", changePlaceholder);
        submit.addEventListener("click", searchforStudent);
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    function searchforStudent(_event) {
        let query = "command=findOne";
        let radio = document.getElementById("radio");
        if (DatabaseClient.search == "martikel") {
            query += "&searchfor=martikel&matrikel=" + radio.value;
        }
        if (DatabaseClient.search == "name") {
            query += "&searchfor=name&name=" + radio.value;
        }
        sendRequest(query, handleFindOneResponse);
    }
    function handleFindOneResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementById("text1");
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
    function changePlaceholder(_event) {
        let text = document.getElementById("radio");
        let target = _event.target;
        if (target.id == "searchbyname") {
            text.placeholder = "type name here";
            DatabaseClient.search = "name";
        }
        if (target.id == "searchbymartikel") {
            text.placeholder = "type martikel here";
            DatabaseClient.search = "martikel";
        }
        console.log(DatabaseClient.search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8100?" + _query, true);
        //xhr.open("GET", "https://eia2-servertest.herokuapp.com?color=" + _color, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementById("text2");
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map