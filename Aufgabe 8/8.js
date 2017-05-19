/*
Aufgabe: Aufgabe 8
Name: Ruth Sutor
Matrikel: 254899
Datum: 18/05/2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Blumenwiese2;
(function (Blumenwiese2) {
    window.addEventListener("load", init);
    Blumenwiese2.allBees = [];
    Blumenwiese2.flowers = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Blumenwiese2.leinwand = canvas.getContext("2d");
        Blumenwiese2.drawImage();
        Blumenwiese2.getImage = Blumenwiese2.leinwand.getImageData(0, 0, 400, 260);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        setTimeout(animateBees, 100);
    }
    function create10Bees() {
        for (let i = 0; i < 10; i++) {
            if (i < 6) {
                createHoneyBee();
            }
            else {
                createNewBee();
            }
        }
        //console.log(allBees);
    }
    function createNewBee() {
        let b = new Blumenwiese2.Beedata();
        Blumenwiese2.allBees.push(b);
    }
    function createHoneyBee() {
        let b = new Blumenwiese2.Honeybee();
        Blumenwiese2.allBees.push(b);
    }
    function animateBees() {
        Blumenwiese2.leinwand.putImageData(Blumenwiese2.getImage, 0, 0);
        for (let i = 0; i < Blumenwiese2.allBees.length - 1; i++) {
            Blumenwiese2.allBees[i].move(i);
            if (Blumenwiese2.allBees[i].stopp < 12 && Blumenwiese2.allBees[i].stopp != 0) {
                Blumenwiese2.allBees[i].stopp += 1;
            }
            if (Blumenwiese2.allBees[i].stopp == 11) {
                Blumenwiese2.allBees[i].stopp = 0;
            }
        }
        setTimeout(animateBees, 100);
    }
})(Blumenwiese2 || (Blumenwiese2 = {}));
//# sourceMappingURL=8.js.map