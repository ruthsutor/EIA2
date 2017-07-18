/*
Aufgabe: Abschlussaufgabe Alternative 2
Name: Ruth Sutor
Matrikel: 254899
Datum: 21/07/17    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

window.addEventListener("load", init);
let allfields: Field[] = [];
function init(): void {
    document.getElementById("start").addEventListener("click", newGame);
}
function newGame(): void {
    document.getElementById("start").style.visibility = "hidden";
    createFields();
}
function createFields(): void {
    for (let i: number = 0; i < 12; i++) {
        for (let u: number = 0; u < 2; u++) {
            let source: string = "images/pair" + i + ".jpg";
            let pairnumber: number = i;
            let field: Field = {src: source, pair: pairnumber};
            allfields.push(field);
        }
    }
    placeDivs();
}
function placeDivs(): void {
    for (let i: number = 0; i < 24; i++) {
        let random: number = Math.round(Math.random() * allfields.length);
        let bigdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("fielddiv");
        let div: HTMLDivElement = document.createElement("div");
        let img: HTMLImageElement = document.createElement("img");
        img.src = allfields[random].src;
        img.style.width = "50px";
        img.style.height = "50px";
        div.appendChild(img);
        bigdiv.appendChild(div);
        allfields.splice(random, 1);
        }
}
interface Field {
    src: string;
    pair: number;
} 
