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

    export function drawImage(): void {

        drawSky(0, 0, 400, 260);
        drawMountain();
        drawGrass(400);
        drawCloud(300, 70);
        drawTree();
        drawBienenKasten();
        drawFlowers();

    }
    function drawFlowers(): void {
        for (let i: number = 0; i < 50; i++) {
            //Blumensorte
            let flowerKind: number = Math.round(Math.random());
            if (flowerKind == 0) {
                let f: Flower1 = new Flower1();
                if (i < 6) {
                    flowers.push(f);
                }
            }
            if (flowerKind == 1) {
                let f: Flower2 = new Flower2();
                if (i < 6) {
                    flowers.push(f);
                }
            }
        }
        console.log(flowers);
    }
    function drawSky(_x: number, _y: number, _width: number, _height: number): void {
        leinwand.fillStyle = "#cce6ff";
        leinwand.fillRect(_x, _y, _width, _height);
    }
    function drawGrass(_width: number): void {
        leinwand.beginPath();
        leinwand.moveTo(0, 120);
        leinwand.quadraticCurveTo(50, 100, 80, 130);
        leinwand.quadraticCurveTo(130, 180, 180, 150);
        leinwand.quadraticCurveTo(270, 100, _width, 150);
        leinwand.lineTo(_width, 260);
        leinwand.lineTo(0, 260);
        leinwand.closePath();
        leinwand.fillStyle = "#33cc33";
        leinwand.fill();
    }
    function drawMountain(): void {
        leinwand.beginPath();
        leinwand.moveTo(70, 170);
        leinwand.lineTo(110, 100);
        leinwand.lineTo(150, 170);
        leinwand.closePath();
        leinwand.fillStyle = "#999999";
        leinwand.fill();
        leinwand.beginPath();
        leinwand.moveTo(110, 170);
        leinwand.lineTo(150, 80);
        leinwand.lineTo(190, 170);
        leinwand.closePath();
        leinwand.fillStyle = "#999999";
        leinwand.fill();
    }
    function drawCloud(_x: number, _y: number): void {
        leinwand.beginPath();
        leinwand.arc(_x, _y, 25, 0, 2 * Math.PI);
        leinwand.arc(_x + 45, _y, 10, 0, 2 * Math.PI);
        leinwand.arc(_x - 30, _y, 15, 0, 2 * Math.PI);
        leinwand.arc(_x + 30, _y - 15, 15, 0, 2 * Math.PI);
        leinwand.arc(_x + 30, _y + 10, 10, 0, 2 * Math.PI);
        leinwand.closePath();
        leinwand.fillStyle = "#FFFFFF";
        leinwand.fill();
    }
    function drawTree(): void {
        leinwand.beginPath();
        leinwand.moveTo(35, 120);
        leinwand.lineTo(36, 80);
        leinwand.lineTo(39, 80);
        leinwand.lineTo(40, 120);
        leinwand.closePath();
        leinwand.fillStyle = "#4d2800";
        leinwand.fill();
        leinwand.beginPath();
        leinwand.arc(37.5, 80, 15, 0, 2 * Math.PI);
        leinwand.closePath();
        leinwand.fillStyle = "#1f7a1f";
        leinwand.fill();
    }
    function drawBienenKasten(): void {
        leinwand.fillStyle = "#4d2800";
        leinwand.fillRect(320, 110, 30, 20);
        leinwand.fillRect(325, 120, 5, 15);
        leinwand.fillRect(340, 120, 5, 15);
        leinwand.fillStyle = "#000000";
        leinwand.fillRect(325, 115, 20, 2);
    }
}