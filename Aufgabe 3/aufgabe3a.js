/*
Aufgabe: Aufgabe 3a
Name: Ruth Sutor
Matrikel: 254899
Datum: 7/04/17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function () {
    var row = 1;
    var rice = 1;
    var klasse;
    for (let i = 0; i < 64; i++) {
        //zeilencounter
        if (i % 8 == 0) {
            row = row + 1;
        }
        //gerade zeilen
        if (row % 2 == 0) {
            //wei�
            if (i % 2 == 0) {
                klasse = "white";
            }
            else {
                klasse = "black";
            }
        }
        else {
            //schwarz
            if (i % 2 == 0) {
                klasse = "black";
            }
            else {
                klasse = "white";
            }
        }
        //div erstellen
        placeDiv(klasse, i);
        //Reisk�rner vermehren
        rice = rice * 2;
    }
    function placeDiv(klasse, i) {
        let div = document.createElement("div");
        div.textContent = rice.toString();
        document.body.appendChild(div);
        if (i < 8)
            div.addEventListener("click", selection);
        let s = div.style;
        div.classList.toggle(klasse);
        s.width = "100px";
        s.height = "100px";
    }
    //Aufgabe 3a
    function selection(_event) {
        let select = _event.target;
        select.classList.toggle("selected");
        /*if (felder.style.backgroundColor = "#FFFFFF" || "#000000"){
            felder.className = "selected";
            }
        if (felder.style.backgroundColor = "red"){
            felder.className = "notselected";
           }*/
    }
});
//# sourceMappingURL=aufgabe3a.js.map