/*
Aufgabe: Aufgabe 3a
Name: Ruth Sutor
Matrikel: 254899
Datum: 7/04/17    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function() {

    var row: number = 1;
    var rice: number = 1;
    var klasse: string;
    for (let i: number = 0; i < 64; i++) {
        //zeilencounter
        if (i % 8 == 0) {
            row = row + 1;
        }

        //gerade zeilen
        if (row % 2 == 0) {

            //weiß
            if (i % 2 == 0) {
                klasse = "white";
            }

            //schwarz
            else {
                klasse = "black";
            }
        }

        //ungerade zeilen
        else {

            //schwarz
            if (i % 2 == 0) {
                klasse = "black";
            }

            //weiß
            else {
                klasse = "white";
            }
        }

        //div erstellen
        placeDiv(klasse, i);
        //Reiskörner vermehren
        rice = rice * 2;

    }

    function placeDiv(klasse: string, i: number): void {
        let div: HTMLDivElement = document.createElement("div");
        div.textContent = rice.toString();
        document.body.appendChild(div);

        if (i < 8)
            div.addEventListener("click", selection);

        let s: CSSStyleDeclaration = div.style;
        div.classList.toggle(klasse);
        s.width = "100px";
        s.height = "100px";
    }

    //Aufgabe 3a

    //Farbe auf Klick verändern
    function selection(_event: MouseEvent): void {
        let select: HTMLElement = <HTMLElement>_event.target;
        select.classList.toggle("selected");

        //Summe der Reiskörner
        let sum: number = 0;
        let selectedfelder: NodeListOf<Element> = document.getElementsByClassName("selected");
        let sumDiv: HTMLElement = document.getElementById("sum");
        addToSum(_event);

        function addToSum(_event: MouseEvent): void {
            for (let i: number = 0; i < selectedfelder.length; i++) {
                sum += parseInt(selectedfelder[i].textContent); //parseInt wandelt in number um  
                sumDiv.textContent = "Dezimal: " + sum.toString() +"\r\n" + "Hexadezimal: " + sum.toString(16);
                console.log(sum);
            }
        }
    } 
    document.addEventListener("mousemove", function(Event) {
            document.getElementById("sum").style.left = (Event.clientX + 10) + "px";
            document.getElementById("sum").style.top = (Event.clientY + 10) + "px";
        });
});
