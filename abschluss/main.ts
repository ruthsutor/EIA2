/*
Aufgabe: Abschlussaufgabe Alternative 2
Name: Ruth Sutor
Matrikel: 254899
Datum: 21/07/17    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

window.addEventListener("load", init);
let crc: CanvasRenderingContext2D;
let allpictures: Picture[] = [];
let allbackgrounds: HTMLDivElement[] = [];
let shownpictures: number[] = [];
function init(): void {
    document.getElementById("start").addEventListener("click", newGame);
}
function newGame(): void {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("buttondiv").style.zIndex = "0";
    animation();
}
function createPictures(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    canvas.style.visibility = "hidden";
    for (let i: number = 0; i < 12; i++) {
        for (let u: number = 0; u < 2; u++) {
            let pic: Picture = new Picture(i);
            allpictures.push(pic);
        }
    }
    placeDivs();
}
function placeDivs(): void {
    for (let i: number = 0; i < 24; i++) {
        let random: number = Math.round(Math.random() * (allpictures.length - 1) + 0);
        allpictures[random].place(random, i);
    }
}
function showPicture(_event: MouseEvent): void {
    if (shownpictures.length == 2) {
        coverPictures();
        clearShownPictures();
    }
    let selected: HTMLElement = <HTMLElement>_event.target;
    selected.style.visibility = "hidden";
    let fieldnumber: number = parseInt(selected.id);
    shownpictures.push(fieldnumber);
    if (shownpictures.length == 2) {
        checkIfPair();
    }
    checkIfLastPair();
}
function checkIfLastPair(): void {
    let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
    let alreadygone: number = 0;
    for (let i: number = 0; i < alldivs.length; i++) {
        if (alldivs[i].style.backgroundColor == "rgb(255, 255, 255)") {
            alreadygone += 1;
        }
    }
    if (alreadygone == 24) {
        setTimeout(endGame, 1000);
    }
}
function endGame(): void {
    let picdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("picdiv");
    let backgrounddiv: HTMLDivElement = <HTMLDivElement>document.getElementById("background");
    while (picdiv.firstChild) {
        picdiv.removeChild(picdiv.firstChild);
    }
    while (backgrounddiv.firstChild) {
        backgrounddiv.removeChild(backgrounddiv.firstChild);
    }
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("buttondiv").style.zIndex = "100";
}
function checkIfPair(): void {
    let allimgs: NodeListOf<HTMLImageElement> = document.getElementsByTagName("img");
    let img1: HTMLImageElement = allimgs[shownpictures[0]];
    let img2: HTMLImageElement = allimgs[shownpictures[1]];
    if (img1.src == img2.src) {
        removePair();
    }
}
function removePair(): void {
    let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
    let div1: HTMLDivElement = alldivs[shownpictures[0] + 2];
    let div2: HTMLDivElement = alldivs[shownpictures[1] + 2];
    div1.style.backgroundColor = "#ffffff";
    div1.removeEventListener("click", showPicture);
    div2.style.backgroundColor = "#ffffff";
    div2.removeEventListener("click", showPicture);
}
function coverPictures(): void {
    let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
    for (let i: number = 0; i < alldivs.length; i++) {
        alldivs[i].style.visibility = "visible";
    }
}
function clearShownPictures(): void {
    shownpictures.length = 0;
}

//CANVAS


function animation(): void {
    let canvas: HTMLCanvasElement;
    canvas = document.getElementsByTagName("canvas")[0];
    canvas.style.visibility = "visible";
    crc = canvas.getContext("2d");
    let r: number = 0;
    changeRadius(r);
}
function changeRadius(_r: number): void {
    _r += 20;
    drawCircle(_r);
    if (_r > 200) {
        setTimeout(createPictures, 300);
    }
    else {
        setTimeout(changeRadius, 50, _r);
    }
}
function drawCircle(_r: number): void {
    crc.beginPath();
    crc.arc(156, 104, _r, 0, 2 * Math.PI);
    crc.closePath();
    crc.fillStyle = "#80aaff";
    crc.fill();
}

//CLASS PICTURE

class Picture {
    src: string;
    constructor(_i: number) {
        this.src = "images/pair" + _i + ".jpg";
    }
    place(_random: number, _i: number): void {
        let picdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("picdiv");
        let backgrounddiv: HTMLDivElement = <HTMLDivElement>document.getElementById("background");
        let div: HTMLDivElement = document.createElement("div");
        let background: HTMLDivElement = document.createElement("div");
        let img: HTMLImageElement = document.createElement("img");
        img.src = this.src;
        img.style.width = "50px";
        img.style.height = "50px";
        div.appendChild(img);
        picdiv.appendChild(div);
        background.id = String(_i);
        background.addEventListener("click", showPicture);
        backgrounddiv.appendChild(background);
        allbackgrounds.push(backgrounddiv);
        allpictures.splice(_random, 1);
    }
}