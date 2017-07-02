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
    class FLower {
        //Methoden:
        constructor() {
            //Position
            this.yposition = Math.round((Math.random() * 100) + 160);
            this.xposition = Math.round((Math.random() * 400) + 0);
            //Blumensorte
            let flowerKind = Math.round(Math.random());
            if (flowerKind == 0) {
                this.form = true;
            }
            if (flowerKind == 1) {
                this.form = false;
            }
            //Farbe
            let c = Math.round(Math.random());
            if (c == 0) {
                this.color = "#ff99ff";
            }
            if (c == 1) {
                this.color = "#cc66ff";
            }
            this.draw();
        }
        draw() {
            if (this.form == true) {
                Blumenwiese.leinwand.beginPath();
                Blumenwiese.leinwand.moveTo(this.xposition, this.yposition);
                Blumenwiese.leinwand.quadraticCurveTo(this.xposition, this.yposition - 5, this.xposition + 5, this.yposition);
                Blumenwiese.leinwand.quadraticCurveTo(this.xposition + 7.5, this.yposition - 5, this.xposition + 10, this.yposition);
                Blumenwiese.leinwand.quadraticCurveTo(this.xposition + 15, this.yposition - 5, this.xposition + 15, this.yposition);
                Blumenwiese.leinwand.quadraticCurveTo(this.xposition + 7.5, this.yposition + 15, this.xposition, this.yposition);
                Blumenwiese.leinwand.closePath();
                Blumenwiese.leinwand.fillStyle = this.color;
                Blumenwiese.leinwand.fill();
                Blumenwiese.leinwand.beginPath();
                Blumenwiese.leinwand.moveTo(this.xposition + 10, this.yposition + 15);
            }
            if (this.form == true) {
                Blumenwiese.leinwand.beginPath();
                Blumenwiese.leinwand.arc(this.xposition + 5, this.yposition, 2.5, 0, 2 * Math.PI);
                Blumenwiese.leinwand.arc(this.xposition - 5, this.yposition, 2.5, 0, 2 * Math.PI);
                Blumenwiese.leinwand.arc(this.xposition, this.yposition + 5, 2.5, 0, 2 * Math.PI);
                Blumenwiese.leinwand.arc(this.xposition, this.yposition - 5, 2.5, 0, 2 * Math.PI);
                Blumenwiese.leinwand.closePath();
                Blumenwiese.leinwand.fillStyle = this.color;
                Blumenwiese.leinwand.fill();
                Blumenwiese.leinwand.beginPath();
                Blumenwiese.leinwand.arc(this.xposition + 3.5, this.yposition + 3.5, 2.5, 0, 2 * Math.PI);
                Blumenwiese.leinwand.arc(this.xposition + 3.5, this.yposition - 3.5, 2.5, 0, 2 * Math.PI);
                Blumenwiese.leinwand.arc(this.xposition - 3.5, this.yposition + 3.5, 2.5, 0, 2 * Math.PI);
                Blumenwiese.leinwand.arc(this.xposition - 3.5, this.yposition - 3.5, 2.5, 0, 2 * Math.PI);
                Blumenwiese.leinwand.closePath();
                Blumenwiese.leinwand.fillStyle = this.color;
                Blumenwiese.leinwand.fill();
                Blumenwiese.leinwand.beginPath();
                Blumenwiese.leinwand.arc(this.xposition, this.yposition, 4, 0, 2 * Math.PI);
                Blumenwiese.leinwand.closePath();
                Blumenwiese.leinwand.fillStyle = "#ffff1a";
                Blumenwiese.leinwand.fill();
            }
        }
    }
    Blumenwiese.FLower = FLower;
    class Beedata {
        //Methoden:
        constructor() {
            let random = Math.round(Math.random());
            if (random == 1) {
                this.big = true;
            }
            if (random == 0) {
                this.big = false;
            }
            let random2 = Math.round(Math.random());
            if (random2 == 1) {
                this.color = "#ffff1a";
            }
            if (random2 == 0) {
                this.color = "#ff6600";
            }
            this.xposition = 320;
            this.yposition = 115;
            this.draw();
        }
        draw() {
            if (this.big == false) {
                Blumenwiese.leinwand.beginPath();
                Blumenwiese.leinwand.arc(this.xposition, this.yposition, 1, 0, 2 * Math.PI);
                Blumenwiese.leinwand.closePath();
                Blumenwiese.leinwand.fillStyle = "#000000";
                Blumenwiese.leinwand.fill();
                Blumenwiese.leinwand.beginPath();
                Blumenwiese.leinwand.arc(this.xposition + 1, this.yposition, 1, 0, 2 * Math.PI);
                Blumenwiese.leinwand.closePath();
                Blumenwiese.leinwand.fillStyle = "#000000";
                Blumenwiese.leinwand.fill();
                Blumenwiese.leinwand.fillStyle = this.color;
                Blumenwiese.leinwand.fillRect(this.xposition, this.yposition - 1, 1, 2);
            }
            if (this.big == true) {
                Blumenwiese.leinwand.beginPath();
                Blumenwiese.leinwand.arc(this.xposition, this.yposition, 1.5, 0, 2 * Math.PI);
                Blumenwiese.leinwand.closePath();
                Blumenwiese.leinwand.fillStyle = "#000000";
                Blumenwiese.leinwand.fill();
                Blumenwiese.leinwand.beginPath();
                Blumenwiese.leinwand.arc(this.xposition + 2, this.yposition, 1.5, 0, 2 * Math.PI);
                Blumenwiese.leinwand.closePath();
                Blumenwiese.leinwand.fillStyle = "#000000";
                Blumenwiese.leinwand.fill();
                Blumenwiese.leinwand.fillStyle = this.color;
                Blumenwiese.leinwand.fillRect(this.xposition, this.yposition - 1, 2, 2);
            }
        }
        move() {
            let zufallX = Math.round(Math.random() * 6);
            this.xposition += (zufallX - 4); //-4 f�r Wind
            let zufallY = Math.round(Math.random() * 6);
            if (zufallY > 3) {
                this.yposition += zufallY;
            }
            if ((zufallY < 3) || (zufallY == 3)) {
                this.yposition -= zufallY;
            }
            if (this.xposition < 0) {
                this.xposition = 400;
            }
            if (this.xposition > 400) {
                this.xposition = 0;
            }
            if (this.yposition > 260) {
                this.yposition = 0;
            }
            if (this.yposition < 0) {
                this.yposition = 260;
            }
            this.draw();
        }
    }
    Blumenwiese.Beedata = Beedata;
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=7.Klassen.js.map