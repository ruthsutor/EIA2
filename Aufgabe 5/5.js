/*
Aufgabe: Aufgabe 5
Name: Ruth Sutor
Matrikel: 254899
Datum: 26/04/2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", init);
    let leinwand;
    let x = [];
    let y = [];
    let getImage;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        leinwand = canvas.getContext("2d");
        drawImage();
        getImage = leinwand.getImageData(0, 0, 400, 260);
        draw10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", drawNewBee);
        setTimeout(animateBees, 100);
    }
    function draw10Bees() {
        for (let i = 0; i < 9; i++) {
            x.push(320);
            y.push(115);
            drawBee(x[i], y[i]);
        }
    }
    function drawNewBee() {
        x.push(320);
        y.push(115);
        drawBee(320, 115);
    }
    function animateBees() {
        leinwand.putImageData(getImage, 0, 0);
        for (let i = 0; i < x.length - 1; i++) {
            let zufallX = Math.round(Math.random() * 6);
            x[i] += (zufallX - 4); //-4 f�r Wind
            let zufallY = Math.round(Math.random() * 6);
            if (zufallY > 3) {
                y[i] += zufallY;
            }
            if ((zufallY < 3) || (zufallY == 3)) {
                y[i] -= zufallY;
            }
            if (x[i] < 0) {
                x[i] = 400;
            }
            if (x[i] > 400) {
                x[i] = 0;
            }
            if (y[i] > 260) {
                y[i] = 0;
            }
            if (y[i] < 0) {
                y[i] = 260;
            }
            drawBee(x[i], y[i]);
        }
        setTimeout(animateBees, 100);
    }
    function drawImage() {
        drawSky(0, 0, 400, 260);
        drawMountain();
        drawGrass(400);
        drawCloud(300, 70);
        drawTree();
        drawBienenKasten();
        for (let i = 0; i < 50; i++) {
            let flowerKind = Math.round(Math.random() * 4);
            let y = Math.round((Math.random() * 100) + 160);
            let x = Math.round((Math.random() * 400) + 0);
            switch (flowerKind) {
                case 0:
                    drawFlower1(x, y, "#ff99ff");
                    break;
                case 1:
                    drawFlower1(x, y, "#cc66ff");
                    break;
                case 2:
                    drawFlower2(x, y, "#ff99ff");
                    break;
                case 3:
                    drawFlower2(x, y, "#cc66ff");
                    break;
            }
        }
    }
    function drawBee(_x, _y) {
        leinwand.beginPath();
        leinwand.arc(_x, _y, 1, 0, 2 * Math.PI);
        leinwand.closePath();
        leinwand.fillStyle = "#000000";
        leinwand.fill();
        leinwand.beginPath();
        leinwand.arc(_x + 1, _y, 1, 0, 2 * Math.PI);
        leinwand.closePath();
        leinwand.fillStyle = "#000000";
        leinwand.fill();
        leinwand.fillStyle = "#ffff00";
        leinwand.fillRect(_x, _y - 1, 1, 2);
    }
    function drawSky(_x, _y, _width, _height) {
        leinwand.fillStyle = "#cce6ff";
        leinwand.fillRect(_x, _y, _width, _height);
    }
    function drawGrass(_width) {
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
    function drawMountain() {
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
    function drawCloud(_x, _y) {
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
    function drawTree() {
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
    function drawBienenKasten() {
        leinwand.fillStyle = "#4d2800";
        leinwand.fillRect(320, 110, 30, 20);
        leinwand.fillRect(325, 120, 5, 15);
        leinwand.fillRect(340, 120, 5, 15);
        leinwand.fillStyle = "#000000";
        leinwand.fillRect(325, 115, 20, 2);
    }
    function drawFlower1(_x, _y, _color) {
        leinwand.beginPath();
        leinwand.moveTo(_x, _y);
        leinwand.quadraticCurveTo(_x, _y - 5, _x + 5, _y);
        leinwand.quadraticCurveTo(_x + 7.5, _y - 5, _x + 10, _y);
        leinwand.quadraticCurveTo(_x + 15, _y - 5, _x + 15, _y);
        leinwand.quadraticCurveTo(_x + 7.5, _y + 15, _x, _y);
        leinwand.closePath();
        leinwand.fillStyle = _color;
        leinwand.fill();
        leinwand.beginPath();
        leinwand.moveTo(_x + 10, _y + 15);
    }
    function drawFlower2(_x, _y, _color) {
        leinwand.beginPath();
        leinwand.arc(_x + 5, _y, 2.5, 0, 2 * Math.PI);
        leinwand.arc(_x - 5, _y, 2.5, 0, 2 * Math.PI);
        leinwand.arc(_x, _y + 5, 2.5, 0, 2 * Math.PI);
        leinwand.arc(_x, _y - 5, 2.5, 0, 2 * Math.PI);
        leinwand.closePath();
        leinwand.fillStyle = _color;
        leinwand.fill();
        leinwand.beginPath();
        leinwand.arc(_x + 3.5, _y + 3.5, 2.5, 0, 2 * Math.PI);
        leinwand.arc(_x + 3.5, _y - 3.5, 2.5, 0, 2 * Math.PI);
        leinwand.arc(_x - 3.5, _y + 3.5, 2.5, 0, 2 * Math.PI);
        leinwand.arc(_x - 3.5, _y - 3.5, 2.5, 0, 2 * Math.PI);
        leinwand.closePath();
        leinwand.fillStyle = _color;
        leinwand.fill();
        leinwand.beginPath();
        leinwand.arc(_x, _y, 4, 0, 2 * Math.PI);
        leinwand.closePath();
        leinwand.fillStyle = "#ffff1a";
        leinwand.fill();
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=5.js.map