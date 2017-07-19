/*
Aufgabe: Abschlussaufgabe Alternative 2
Name: Ruth Sutor
Matrikel: 254899
Datum: 21/07/17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
window.addEventListener("load", init);
let allpictures = [];
let allbackgrounds = [];
let shownpictures = [];
function init() {
    document.getElementById("start").addEventListener("click", newGame);
}
function newGame() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("buttondiv").style.zIndex = "0";
    createPictures();
}
function createPictures() {
    for (let i = 0; i < 12; i++) {
        for (let u = 0; u < 2; u++) {
            let source = "images/pair" + i + ".jpg";
            let pairnumber = i;
            let pic = { src: source, pair: pairnumber };
            allpictures.push(pic);
        }
    }
    placeDivs();
}
function placeDivs() {
    for (let i = 0; i < 24; i++) {
        let random = Math.round(Math.random() * (allpictures.length - 1) + 0);
        let picdiv = document.getElementById("picdiv");
        let backgrounddiv = document.getElementById("background");
        let div = document.createElement("div");
        let background = document.createElement("div");
        let img = document.createElement("img");
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
function showPicture(_event) {
    if (shownpictures.length == 2) {
        coverPictures();
        clearShownPictures();
    }
    let selected = _event.target;
    selected.style.visibility = "hidden";
    let fieldnumber = parseInt(selected.id);
    shownpictures.push(fieldnumber);
    if (shownpictures.length == 2) {
        checkIfPair();
    }
}
function checkIfPair() {
    let allimgs = document.getElementsByTagName("img");
    let img1 = allimgs[shownpictures[0]];
    let img2 = allimgs[shownpictures[1]];
    if (img1.src == img2.src) {
        removePair();
    }
}
function removePair() {
    let alldivs = document.getElementsByTagName("div");
    let div1 = alldivs[shownpictures[0] + 2];
    let div2 = alldivs[shownpictures[1] + 2];
    div1.style.backgroundColor = "#ffffff";
    div1.removeEventListener("click", showPicture);
    div2.style.backgroundColor = "#ffffff";
    div2.removeEventListener("click", showPicture);
}
function coverPictures() {
    let alldivs = document.getElementsByTagName("div");
    for (let i = 0; i < alldivs.length; i++) {
        alldivs[i].style.visibility = "visible";
    }
}
function clearShownPictures() {
    shownpictures.length = 0;
}
//# sourceMappingURL=main.js.map