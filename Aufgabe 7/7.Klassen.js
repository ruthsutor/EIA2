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
    class Beedata {
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