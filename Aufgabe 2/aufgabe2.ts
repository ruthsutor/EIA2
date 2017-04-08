document.addEventListener('DOMContentLoaded', function() {

    var row: number = 1;
    var rice: number = 1;
    var backgroundcolor: string;
    var color: string;
    for (let i: number = 0; i < 64; i++) {
    //zeilencounter
        if (i % 8 == 0) {
           row = row + 1;
        }

        //gerade zeilen
        if (row % 2 == 0) {

            //weiß
            if (i % 2 == 0) {
                backgroundcolor = "#FFFFFF";
                color = "#000000";
            }

            //schwarz
            else {
                backgroundcolor = "#000000";
                color = "#FFFFFF";
            }
        }

        //ungerade zeilen
        else {

            //schwarz
            if (i % 2 == 0) {
                backgroundcolor = "#000000";
                color = "#FFFFFF";
            }

            //weiß
            else {
                backgroundcolor = "#FFFFFF";
                color = "#000000";
            }
        }

        //div erstellen
        placeDiv(color, backgroundcolor);
        //Reiskörner vermehren
        rice = rice * 2;

    }

    function placeDiv(color: string, backgroundcolor: string): void {
        let div: HTMLDivElement = document.createElement("div");
        div.textContent = rice.toString();
        document.body.appendChild(div);

        let s: CSSStyleDeclaration = div.style;
        s.backgroundColor = backgroundcolor;
        s.color = color;
        s.width = "100px";
        s.height = "100px";
    }
});