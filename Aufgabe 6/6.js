/*
Aufgabe: Aufgabe 6a
Name: Ruth Sutor
Matrikel: 254899
Datum: 4/05/2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Wiese;
(function (Wiese) {
    window.addEventListener("load", init);
    let leinwand;
    let allBees = [];
    let getImage;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        leinwand = canvas.getContext("2d");
        drawImage();
        getImage = leinwand.getImageData(0, 0, 400, 260);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        setTimeout(animateBees, 100);
    }
    function create10Bees() {
        for (let i = 0; i < 9; i++) {
            createNewBee();
        }
    }
    function createNewBee() {
        let b;
        let random = Math.round(Math.random());
        if (random == 1) {
            b = true;
        }
        if (random == 0) {
            b = false;
        }
        let c;
        let random2 = Math.round(Math.random());
        if (random2 == 1) {
            c = "#ffff1a";
        }
        if (random2 == 0) {
            c = "#ff6600";
        }
        let bee = { xposition: 320, yposition: 115, big: b, color: c };
        allBees.push(bee);
        drawBee(320, 115, b, c);
    }
    function animateBees() {
        leinwand.putImageData(getImage, 0, 0);
        for (let i = 0; i < allBees.length - 1; i++) {
            let zufallX = Math.round(Math.random() * 6);
            allBees[i].xposition += (zufallX - 4); //-4 f�r Wind
            let zufallY = Math.round(Math.random() * 6);
            if (zufallY > 3) {
                allBees[i].yposition += zufallY;
            }
            if ((zufallY < 3) || (zufallY == 3)) {
                allBees[i].yposition -= zufallY;
            }
            if (allBees[i].xposition < 0) {
                allBees[i].xposition = 400;
            }
            if (allBees[i].xposition > 400) {
                allBees[i].xposition = 0;
            }
            if (allBees[i].yposition > 260) {
                allBees[i].yposition = 0;
            }
            if (allBees[i].yposition < 0) {
                allBees[i].yposition = 260;
            }
            drawBee(allBees[i].xposition, allBees[i].yposition, allBees[i].big, allBees[i].color);
        }
        setTimeout(animateBees, 100);
    }
    function drawBee(_x, _y, _big, _color) {
        if (_big == false) {
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
            leinwand.fillStyle = _color;
            leinwand.fillRect(_x, _y - 1, 1, 2);
        }
        if (_big == true) {
            leinwand.beginPath();
            leinwand.arc(_x, _y, 1.5, 0, 2 * Math.PI);
            leinwand.closePath();
            leinwand.fillStyle = "#000000";
            leinwand.fill();
            leinwand.beginPath();
            leinwand.arc(_x + 2, _y, 1.5, 0, 2 * Math.PI);
            leinwand.closePath();
            leinwand.fillStyle = "#000000";
            leinwand.fill();
            leinwand.fillStyle = _color;
            leinwand.fillRect(_x, _y - 1, 2, 2);
        }
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
})(Wiese || (Wiese = {}));
//# sourceMappingURL=6.js.map