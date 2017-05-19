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
    function drawImage() {
        drawSky(0, 0, 400, 260);
        drawMountain();
        drawGrass(400);
        drawCloud(300, 70);
        drawTree();
        drawBienenKasten();
        drawFlowers();
    }
    Blumenwiese2.drawImage = drawImage;
    function drawFlowers() {
        for (let i = 0; i < 50; i++) {
            //Blumensorte
            let flowerKind = Math.round(Math.random());
            if (flowerKind == 0) {
                let f = new Blumenwiese2.Flower1();
                if (i < 6) {
                    Blumenwiese2.flowers.push(f);
                }
            }
            if (flowerKind == 1) {
                let f = new Blumenwiese2.Flower2();
                if (i < 6) {
                    Blumenwiese2.flowers.push(f);
                }
            }
        }
        console.log(Blumenwiese2.flowers);
    }
    function drawSky(_x, _y, _width, _height) {
        Blumenwiese2.leinwand.fillStyle = "#cce6ff";
        Blumenwiese2.leinwand.fillRect(_x, _y, _width, _height);
    }
    function drawGrass(_width) {
        Blumenwiese2.leinwand.beginPath();
        Blumenwiese2.leinwand.moveTo(0, 120);
        Blumenwiese2.leinwand.quadraticCurveTo(50, 100, 80, 130);
        Blumenwiese2.leinwand.quadraticCurveTo(130, 180, 180, 150);
        Blumenwiese2.leinwand.quadraticCurveTo(270, 100, _width, 150);
        Blumenwiese2.leinwand.lineTo(_width, 260);
        Blumenwiese2.leinwand.lineTo(0, 260);
        Blumenwiese2.leinwand.closePath();
        Blumenwiese2.leinwand.fillStyle = "#33cc33";
        Blumenwiese2.leinwand.fill();
    }
    function drawMountain() {
        Blumenwiese2.leinwand.beginPath();
        Blumenwiese2.leinwand.moveTo(70, 170);
        Blumenwiese2.leinwand.lineTo(110, 100);
        Blumenwiese2.leinwand.lineTo(150, 170);
        Blumenwiese2.leinwand.closePath();
        Blumenwiese2.leinwand.fillStyle = "#999999";
        Blumenwiese2.leinwand.fill();
        Blumenwiese2.leinwand.beginPath();
        Blumenwiese2.leinwand.moveTo(110, 170);
        Blumenwiese2.leinwand.lineTo(150, 80);
        Blumenwiese2.leinwand.lineTo(190, 170);
        Blumenwiese2.leinwand.closePath();
        Blumenwiese2.leinwand.fillStyle = "#999999";
        Blumenwiese2.leinwand.fill();
    }
    function drawCloud(_x, _y) {
        Blumenwiese2.leinwand.beginPath();
        Blumenwiese2.leinwand.arc(_x, _y, 25, 0, 2 * Math.PI);
        Blumenwiese2.leinwand.arc(_x + 45, _y, 10, 0, 2 * Math.PI);
        Blumenwiese2.leinwand.arc(_x - 30, _y, 15, 0, 2 * Math.PI);
        Blumenwiese2.leinwand.arc(_x + 30, _y - 15, 15, 0, 2 * Math.PI);
        Blumenwiese2.leinwand.arc(_x + 30, _y + 10, 10, 0, 2 * Math.PI);
        Blumenwiese2.leinwand.closePath();
        Blumenwiese2.leinwand.fillStyle = "#FFFFFF";
        Blumenwiese2.leinwand.fill();
    }
    function drawTree() {
        Blumenwiese2.leinwand.beginPath();
        Blumenwiese2.leinwand.moveTo(35, 120);
        Blumenwiese2.leinwand.lineTo(36, 80);
        Blumenwiese2.leinwand.lineTo(39, 80);
        Blumenwiese2.leinwand.lineTo(40, 120);
        Blumenwiese2.leinwand.closePath();
        Blumenwiese2.leinwand.fillStyle = "#4d2800";
        Blumenwiese2.leinwand.fill();
        Blumenwiese2.leinwand.beginPath();
        Blumenwiese2.leinwand.arc(37.5, 80, 15, 0, 2 * Math.PI);
        Blumenwiese2.leinwand.closePath();
        Blumenwiese2.leinwand.fillStyle = "#1f7a1f";
        Blumenwiese2.leinwand.fill();
    }
    function drawBienenKasten() {
        Blumenwiese2.leinwand.fillStyle = "#4d2800";
        Blumenwiese2.leinwand.fillRect(320, 110, 30, 20);
        Blumenwiese2.leinwand.fillRect(325, 120, 5, 15);
        Blumenwiese2.leinwand.fillRect(340, 120, 5, 15);
        Blumenwiese2.leinwand.fillStyle = "#000000";
        Blumenwiese2.leinwand.fillRect(325, 115, 20, 2);
    }
})(Blumenwiese2 || (Blumenwiese2 = {}));
//# sourceMappingURL=8.background.js.map