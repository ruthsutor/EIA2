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
    function drawImage() {
        drawSky(0, 0, 400, 260);
        drawMountain();
        drawGrass(400);
        drawCloud(300, 70);
        drawTree();
        drawBienenKasten();
        drawFlowers();
    }
    Blumenwiese.drawImage = drawImage;
    function drawFlowers() {
        for (let i = 0; i < 50; i++) {
            let f = new Blumenwiese.FLower();
            if (i < 6) {
                Blumenwiese.flowers.push(f);
            }
        }
        console.log(Blumenwiese.flowers);
    }
    function drawSky(_x, _y, _width, _height) {
        Blumenwiese.leinwand.fillStyle = "#cce6ff";
        Blumenwiese.leinwand.fillRect(_x, _y, _width, _height);
    }
    function drawGrass(_width) {
        Blumenwiese.leinwand.beginPath();
        Blumenwiese.leinwand.moveTo(0, 120);
        Blumenwiese.leinwand.quadraticCurveTo(50, 100, 80, 130);
        Blumenwiese.leinwand.quadraticCurveTo(130, 180, 180, 150);
        Blumenwiese.leinwand.quadraticCurveTo(270, 100, _width, 150);
        Blumenwiese.leinwand.lineTo(_width, 260);
        Blumenwiese.leinwand.lineTo(0, 260);
        Blumenwiese.leinwand.closePath();
        Blumenwiese.leinwand.fillStyle = "#33cc33";
        Blumenwiese.leinwand.fill();
    }
    function drawMountain() {
        Blumenwiese.leinwand.beginPath();
        Blumenwiese.leinwand.moveTo(70, 170);
        Blumenwiese.leinwand.lineTo(110, 100);
        Blumenwiese.leinwand.lineTo(150, 170);
        Blumenwiese.leinwand.closePath();
        Blumenwiese.leinwand.fillStyle = "#999999";
        Blumenwiese.leinwand.fill();
        Blumenwiese.leinwand.beginPath();
        Blumenwiese.leinwand.moveTo(110, 170);
        Blumenwiese.leinwand.lineTo(150, 80);
        Blumenwiese.leinwand.lineTo(190, 170);
        Blumenwiese.leinwand.closePath();
        Blumenwiese.leinwand.fillStyle = "#999999";
        Blumenwiese.leinwand.fill();
    }
    function drawCloud(_x, _y) {
        Blumenwiese.leinwand.beginPath();
        Blumenwiese.leinwand.arc(_x, _y, 25, 0, 2 * Math.PI);
        Blumenwiese.leinwand.arc(_x + 45, _y, 10, 0, 2 * Math.PI);
        Blumenwiese.leinwand.arc(_x - 30, _y, 15, 0, 2 * Math.PI);
        Blumenwiese.leinwand.arc(_x + 30, _y - 15, 15, 0, 2 * Math.PI);
        Blumenwiese.leinwand.arc(_x + 30, _y + 10, 10, 0, 2 * Math.PI);
        Blumenwiese.leinwand.closePath();
        Blumenwiese.leinwand.fillStyle = "#FFFFFF";
        Blumenwiese.leinwand.fill();
    }
    function drawTree() {
        Blumenwiese.leinwand.beginPath();
        Blumenwiese.leinwand.moveTo(35, 120);
        Blumenwiese.leinwand.lineTo(36, 80);
        Blumenwiese.leinwand.lineTo(39, 80);
        Blumenwiese.leinwand.lineTo(40, 120);
        Blumenwiese.leinwand.closePath();
        Blumenwiese.leinwand.fillStyle = "#4d2800";
        Blumenwiese.leinwand.fill();
        Blumenwiese.leinwand.beginPath();
        Blumenwiese.leinwand.arc(37.5, 80, 15, 0, 2 * Math.PI);
        Blumenwiese.leinwand.closePath();
        Blumenwiese.leinwand.fillStyle = "#1f7a1f";
        Blumenwiese.leinwand.fill();
    }
    function drawBienenKasten() {
        Blumenwiese.leinwand.fillStyle = "#4d2800";
        Blumenwiese.leinwand.fillRect(320, 110, 30, 20);
        Blumenwiese.leinwand.fillRect(325, 120, 5, 15);
        Blumenwiese.leinwand.fillRect(340, 120, 5, 15);
        Blumenwiese.leinwand.fillStyle = "#000000";
        Blumenwiese.leinwand.fillRect(325, 115, 20, 2);
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=7.background.js.map