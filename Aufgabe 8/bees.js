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
                Blumenwiese2.leinwand.beginPath();
                Blumenwiese2.leinwand.arc(this.xposition, this.yposition, 1, 0, 2 * Math.PI);
                Blumenwiese2.leinwand.closePath();
                Blumenwiese2.leinwand.fillStyle = "#000000";
                Blumenwiese2.leinwand.fill();
                Blumenwiese2.leinwand.beginPath();
                Blumenwiese2.leinwand.arc(this.xposition + 1, this.yposition, 1, 0, 2 * Math.PI);
                Blumenwiese2.leinwand.closePath();
                Blumenwiese2.leinwand.fillStyle = "#000000";
                Blumenwiese2.leinwand.fill();
                Blumenwiese2.leinwand.fillStyle = this.color;
                Blumenwiese2.leinwand.fillRect(this.xposition, this.yposition - 1, 1, 2);
            }
            if (this.big == true) {
                Blumenwiese2.leinwand.beginPath();
                Blumenwiese2.leinwand.arc(this.xposition, this.yposition, 1.5, 0, 2 * Math.PI);
                Blumenwiese2.leinwand.closePath();
                Blumenwiese2.leinwand.fillStyle = "#000000";
                Blumenwiese2.leinwand.fill();
                Blumenwiese2.leinwand.beginPath();
                Blumenwiese2.leinwand.arc(this.xposition + 2, this.yposition, 1.5, 0, 2 * Math.PI);
                Blumenwiese2.leinwand.closePath();
                Blumenwiese2.leinwand.fillStyle = "#000000";
                Blumenwiese2.leinwand.fill();
                Blumenwiese2.leinwand.fillStyle = this.color;
                Blumenwiese2.leinwand.fillRect(this.xposition, this.yposition - 1, 2, 2);
            }
        }
        move(_i) {
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
    Blumenwiese2.Beedata = Beedata;
    class Honeybee extends Beedata {
        constructor() {
            super();
            this.speed = 0.1;
            this.settargetflower();
            this.home = true;
        }
        settargetflower() {
            let random = Math.round(Math.random() * 5);
            let targetflower = Blumenwiese2.flowers[random];
            this.xtarget = targetflower.xposition;
            this.ytarget = targetflower.yposition;
        }
        move(_i) {
            if (this.home == true) {
                let xDiff = this.xtarget - this.xposition;
                let yDiff = this.ytarget - this.yposition;
                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                    this.home = false;
                    this.xtarget = 320;
                    this.ytarget = 115;
                }
                else {
                    this.xposition += xDiff * this.speed;
                    this.yposition += yDiff * this.speed;
                }
            }
            if (this.home == false) {
                let xDiff = this.xtarget - this.xposition;
                let yDiff = this.ytarget - this.yposition;
                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                    this.home = true;
                    this.settargetflower();
                }
                else {
                    this.xposition += xDiff * this.speed;
                    this.yposition += yDiff * this.speed;
                }
            }
            this.draw();
            let beeid = String(_i + 1);
            document.getElementById(beeid).innerHTML = "Target: " + this.xtarget + "/" + this.ytarget;
        }
    }
    Blumenwiese2.Honeybee = Honeybee;
})(Blumenwiese2 || (Blumenwiese2 = {}));
//# sourceMappingURL=bees.js.map