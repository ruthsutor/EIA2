/*
Aufgabe: Aufgabe 7
Name: Ruth Sutor
Matrikel: 254899
Datum: 9/05/2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", init);
    let allBees = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Blumenwiese.leinwand = canvas.getContext("2d");
        Blumenwiese.drawImage();
        Blumenwiese.getImage = Blumenwiese.leinwand.getImageData(0, 0, 400, 260);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        setTimeout(animateBees, 100);
    }
    function create10Bees() {
        for (let i = 0; i < 9; i++) {
            createNewBee();
        }
    }
    function createNewBee() {
        let b = new Blumenwiese.Beedata();
        allBees.push(b);
    }
    function animateBees() {
        Blumenwiese.leinwand.putImageData(Blumenwiese.getImage, 0, 0);
        for (let i = 0; i < allBees.length - 1; i++) {
            allBees[i].move();
            allBees[i].draw();
        }
        setTimeout(animateBees, 100);
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=7.js.map