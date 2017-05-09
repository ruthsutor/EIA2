/*  
Aufgabe: Aufgabe 7
Name: Ruth Sutor
Matrikel: 254899
Datum: 9/05/2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
namespace Blumenwiese {
    export class Beedata {
        xposition: number;
        yposition: number;
        big: boolean;
        color: string;
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
        move(): void {
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
}