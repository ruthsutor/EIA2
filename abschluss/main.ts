/*
Aufgabe: Abschlussaufgabe Alternative 2
Name: Ruth Sutor
Matrikel: 254899
Datum: 21/07/17    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

window.addEventListener("load", init);
let allpictures: Picture[] = [];
let allbackgrounds: HTMLDivElement[] = [];
let shownpictures: number[] = [];
function init(): void {
    document.getElementById("start").addEventListener("click", newGame);
}
function newGame(): void {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("buttondiv").style.zIndex = "0";
    createPictures();
}
function createPictures(): void {
    for (let i: number = 0; i < 12; i++) {
        for (let u: number = 0; u < 2; u++) {
            let source: string = "images/pair" + i + ".jpg";
            let pairnumber: number = i;
            let pic: Picture = { src: source, pair: pairnumber };
            allpictures.push(pic);
        }
    }
    placeDivs();
}
function placeDivs(): void {
    for (let i: number = 0; i < 24; i++) {
        let random: number = Math.round(Math.random() * (allpictures.length - 1) + 0);
        let picdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("picdiv");
        let backgrounddiv: HTMLDivElement = <HTMLDivElement>document.getElementById("background");
        let div: HTMLDivElement = document.createElement("div");
        let background: HTMLDivElement = document.createElement("div");
        let img: HTMLImageElement = document.createElement("img");
        img.src = allpictures[random].src;
        img.style.width = "50px";
        img.style.height = "50px";
        div.appendChild(img);
        picdiv.appendChild(div);
        background.id = String(i);
        background.addEventListener("click", showPicture);
        backgrounddiv.appendChild(background);
        allbackgrounds.push(backgrounddiv);
        allpictures.splice(random, 1);
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
}
function checkIfPair (): void {
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
interface Picture {
    src: string;
    pair: number;
} 
