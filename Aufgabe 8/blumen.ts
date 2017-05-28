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
    export class Flowers {
        xposition: number;
        yposition: number;
        color: string;
        //Methoden:
        constructor() {
            this.setposition();
            this.setcolor();
        }
        setposition(): void {
            this.yposition = Math.round((Math.random() * 100) + 160);
            this.xposition = Math.round((Math.random() * 400) + 0);
        }
        setcolor(): void {
            let c: number = Math.round(Math.random());
            if (c == 0) {
                this.color = "#ff99ff";
            }
            if (c == 1) {
                this.color = "#cc66ff";
            }
        }

    }
    export class Flower1 extends Flowers {
        constructor() {
            super();
            this.draw();
        }
        draw(): void {

            leinwand.beginPath();
            leinwand.moveTo(this.xposition, this.yposition);
            leinwand.quadraticCurveTo(this.xposition, this.yposition - 5, this.xposition + 5, this.yposition);
            leinwand.quadraticCurveTo(this.xposition + 7.5, this.yposition - 5, this.xposition + 10, this.yposition);
            leinwand.quadraticCurveTo(this.xposition + 15, this.yposition - 5, this.xposition + 15, this.yposition);
            leinwand.quadraticCurveTo(this.xposition + 7.5, this.yposition + 15, this.xposition, this.yposition);
            leinwand.closePath();
            leinwand.fillStyle = this.color;
            leinwand.fill();
            leinwand.beginPath();
            leinwand.moveTo(this.xposition + 10, this.yposition + 15);

        }

    }
    export class Flower2 extends Flowers {
        constructor() {
            super();
            this.draw();
        }
        draw(): void {
            leinwand.beginPath();
            leinwand.arc(this.xposition + 5, this.yposition, 2.5, 0, 2 * Math.PI);
            leinwand.arc(this.xposition - 5, this.yposition, 2.5, 0, 2 * Math.PI);
            leinwand.arc(this.xposition, this.yposition + 5, 2.5, 0, 2 * Math.PI);
            leinwand.arc(this.xposition, this.yposition - 5, 2.5, 0, 2 * Math.PI);
            leinwand.closePath();
            leinwand.fillStyle = this.color;
            leinwand.fill();
            leinwand.beginPath();
            leinwand.arc(this.xposition + 3.5, this.yposition + 3.5, 2.5, 0, 2 * Math.PI);
            leinwand.arc(this.xposition + 3.5, this.yposition - 3.5, 2.5, 0, 2 * Math.PI);
            leinwand.arc(this.xposition - 3.5, this.yposition + 3.5, 2.5, 0, 2 * Math.PI);
            leinwand.arc(this.xposition - 3.5, this.yposition - 3.5, 2.5, 0, 2 * Math.PI);
            leinwand.closePath();
            leinwand.fillStyle = this.color;
            leinwand.fill();
            leinwand.beginPath();
            leinwand.arc(this.xposition, this.yposition, 4, 0, 2 * Math.PI);
            leinwand.closePath();
            leinwand.fillStyle = "#ffff1a";
            leinwand.fill();
        }
    }


}