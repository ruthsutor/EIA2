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
    for (let i: number = 0; i < 13; i++) {
        for (let u: number = 0; u < 2; u++) {
            let source: string = "images/pair" + i;
            let pairnumber: number = i;
            let field: Field = {src: source, pair: pairnumber};
            allfields.push(field);
        }
    }
    placeDivs();
}
function placeDivs(): void {
   console.log(allfields);
}
interface Field {
    src: string;
    pair: number;
} 
