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
    class Flowers {
        //Methoden:
        constructor() {
            this.setposition();
            this.setcolor();
        }
        setposition() {
            this.yposition = Math.round((Math.random() * 100) + 160);
            this.xposition = Math.round((Math.random() * 400) + 0);
        }
        setcolor() {
            let c = Math.round(Math.random());
            if (c == 0) {
                this.color = "#ff99ff";
            }
            if (c == 1) {
                this.color = "#cc66ff";
            }
        }
    }
    Blumenwiese2.Flowers = Flowers;
    class Flower1 extends Flowers {
        constructor() {
            super();
            this.draw();
        }
        draw() {
            Blumenwiese2.leinwand.beginPath();
            Blumenwiese2.leinwand.moveTo(this.xposition, this.yposition);
            Blumenwiese2.leinwand.quadraticCurveTo(this.xposition, this.yposition - 5, this.xposition + 5, this.yposition);
            Blumenwiese2.leinwand.quadraticCurveTo(this.xposition + 7.5, this.yposition - 5, this.xposition + 10, this.yposition);
            Blumenwiese2.leinwand.quadraticCurveTo(this.xposition + 15, this.yposition - 5, this.xposition + 15, this.yposition);
            Blumenwiese2.leinwand.quadraticCurveTo(this.xposition + 7.5, this.yposition + 15, this.xposition, this.yposition);
            Blumenwiese2.leinwand.closePath();
            Blumenwiese2.leinwand.fillStyle = this.color;
            Blumenwiese2.leinwand.fill();
            Blumenwiese2.leinwand.beginPath();
            Blumenwiese2.leinwand.moveTo(this.xposition + 10, this.yposition + 15);
        }
    }
    Blumenwiese2.Flower1 = Flower1;
    class Flower2 extends Flowers {
        constructor() {
            super();
            this.draw();
        }
        draw() {
            Blumenwiese2.leinwand.beginPath();
            Blumenwiese2.leinwand.arc(this.xposition + 5, this.yposition, 2.5, 0, 2 * Math.PI);
            Blumenwiese2.leinwand.arc(this.xposition - 5, this.yposition, 2.5, 0, 2 * Math.PI);
            Blumenwiese2.leinwand.arc(this.xposition, this.yposition + 5, 2.5, 0, 2 * Math.PI);
            Blumenwiese2.leinwand.arc(this.xposition, this.yposition - 5, 2.5, 0, 2 * Math.PI);
            Blumenwiese2.leinwand.closePath();
            Blumenwiese2.leinwand.fillStyle = this.color;
            Blumenwiese2.leinwand.fill();
            Blumenwiese2.leinwand.beginPath();
            Blumenwiese2.leinwand.arc(this.xposition + 3.5, this.yposition + 3.5, 2.5, 0, 2 * Math.PI);
            Blumenwiese2.leinwand.arc(this.xposition + 3.5, this.yposition - 3.5, 2.5, 0, 2 * Math.PI);
            Blumenwiese2.leinwand.arc(this.xposition - 3.5, this.yposition + 3.5, 2.5, 0, 2 * Math.PI);
            Blumenwiese2.leinwand.arc(this.xposition - 3.5, this.yposition - 3.5, 2.5, 0, 2 * Math.PI);
            Blumenwiese2.leinwand.closePath();
            Blumenwiese2.leinwand.fillStyle = this.color;
            Blumenwiese2.leinwand.fill();
            Blumenwiese2.leinwand.beginPath();
            Blumenwiese2.leinwand.arc(this.xposition, this.yposition, 4, 0, 2 * Math.PI);
            Blumenwiese2.leinwand.closePath();
            Blumenwiese2.leinwand.fillStyle = "#ffff1a";
            Blumenwiese2.leinwand.fill();
        }
    }
    Blumenwiese2.Flower2 = Flower2;
})(Blumenwiese2 || (Blumenwiese2 = {}));
//# sourceMappingURL=flowers.js.map