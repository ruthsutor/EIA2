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
    var backgroundcolor;
    var color;
    for (let i = 0; i < 64; i++) {
        //zeilencounter
        if (i % 8 == 0) {
            row = row + 1;
        }
        //gerade zeilen
        if (row % 2 == 0) {
            //wei�
            if (i % 2 == 0) {
                backgroundcolor = "#FFFFFF";
                color = "#000000";
            }
            else {
                backgroundcolor = "#000000";
                color = "#FFFFFF";
            }
        }
        else {
            //schwarz
            if (i % 2 == 0) {
                backgroundcolor = "#000000";
                color = "#FFFFFF";
            }
            else {
                backgroundcolor = "#FFFFFF";
                color = "#000000";
            }
        }
        //div erstellen
        placeDiv(color, backgroundcolor);
        //Reisk�rner vermehren
        rice = rice * 2;
    }
    function placeDiv(color, backgroundcolor) {
        let div = document.createElement("div");
        div.textContent = rice.toString();
        document.body.appendChild(div);
        let s = div.style;
        s.backgroundColor = backgroundcolor;
        s.color = color;
        s.width = "100px";
        s.height = "100px";
    }
});
//Aufgabe 3a
var felder = document.getElementsByTagName("div");
for (let i= 0; i< 9; i++) {
     felder[i].addEventListener("click", selection)
    }
function selection (){
    
    if (felder.style.backgroundColor = "#FFFFFF" || "#000000"){
        felder.className = "selected";
        }
    if (felder.style.backgroundColor = "red"){
        felder.className = "notselected";
       }
    }
});

//# sourceMappingURL=aufgabe3a.js.map