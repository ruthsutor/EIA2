/*  
Aufgabe: Aufgabe 8
Name: Ruth Sutor
Matrikel: 254899
Datum: 18/05/2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
namespace Blumenwiese2 {
    export class Beedata {
        xposition: number;
        yposition: number;
        big: boolean;
        color: string;
        //Methoden:
        constructor() {
            let random: number = Math.round(Math.random());
            if (random == 1) {
                this.big = true;
            }
            if (random == 0) {
                this.big = false;
            }
            let random2: number = Math.round(Math.random());
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
        draw(): void {
            if (this.big == false) {
                leinwand.beginPath();
                leinwand.arc(this.xposition, this.yposition, 1, 0, 2 * Math.PI);
                leinwand.closePath();
                leinwand.fillStyle = "#000000";
                leinwand.fill();
                leinwand.beginPath();
                leinwand.arc(this.xposition + 1, this.yposition, 1, 0, 2 * Math.PI);
                leinwand.closePath();
                leinwand.fillStyle = "#000000";
                leinwand.fill();
                leinwand.fillStyle = this.color;
                leinwand.fillRect(this.xposition, this.yposition - 1, 1, 2);
            }
            if (this.big == true) {
                leinwand.beginPath();
                leinwand.arc(this.xposition, this.yposition, 1.5, 0, 2 * Math.PI);
                leinwand.closePath();
                leinwand.fillStyle = "#000000";
                leinwand.fill();
                leinwand.beginPath();
                leinwand.arc(this.xposition + 2, this.yposition, 1.5, 0, 2 * Math.PI);
                leinwand.closePath();
                leinwand.fillStyle = "#000000";
                leinwand.fill();
                leinwand.fillStyle = this.color;
                leinwand.fillRect(this.xposition, this.yposition - 1, 2, 2);
            }
        }
        move(_i: number): void {
            let zufallX: number = Math.round(Math.random() * 6);
            this.xposition += (zufallX - 4); //-4 für Wind
            let zufallY: number = Math.round(Math.random() * 6);
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
    export class Honeybee extends Beedata {
        xtarget: number;
        ytarget: number;
        gohome: boolean;
        speed: number;
        nektar: string;
        random: number;
        constructor() {
            super();
            this.setspeed();
            this.settargetflower();
            this.gohome = false;
            this.nektar = "leer";
        }
        setspeed(): void {
            let random: number = Math.round(Math.random());
            if (random == 0) {
                this.speed = 0.1;
            }
            else {
                this.speed = 0.05;
            }
        }
        settargetflower(): void {
            this.random = Math.round(Math.random() * 5);
            let targetflower: Flowers = flowers[this.random];
            this.xtarget = targetflower.xposition;
            this.ytarget = targetflower.yposition;
        }
        move(_i: number): void {
            if (this.gohome == false) {
                let xDiff: number = this.xtarget - this.xposition;
                let yDiff: number = this.ytarget - this.yposition;
                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                    this.gohome = true;
                    this.xtarget = 320;
                    this.ytarget = 115;
                    this.nektar = "voll";
                }
                else {
                    this.xposition += xDiff * this.speed;
                    this.yposition += yDiff * this.speed;
                }
            }

            if (this.gohome == true) {
                let xDiff: number = this.xtarget - this.xposition;
                let yDiff: number = this.ytarget - this.yposition;
                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                    this.gohome = false;
                    this.settargetflower();
                    this.nektar = "leer";
                }
                else {
                    this.xposition += xDiff * this.speed;
                    this.yposition += yDiff * this.speed;
                }

            }
            this.draw();
            let beeid: string = String(_i + 1);
            let target: string;
            if (this.xtarget == 320 && this.ytarget == 115) {
                target = "Home";
            }
            else {
                target = "Flower" + String(this.random + 1);
            }
            document.getElementById(beeid).innerHTML = "Target: " + target + "  Nektar: " + this.nektar;

        }
    }
}