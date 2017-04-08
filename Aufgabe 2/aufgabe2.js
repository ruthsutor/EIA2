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
//# sourceMappingURL=aufgabe2.js.map