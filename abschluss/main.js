/*
Aufgabe: Abschlussaufgabe Alternative 2
Name: Ruth Sutor
Matrikel: 254899
Datum: 21/07/17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
window.addEventListener("load", init);
let allfields = [];
function init() {
    document.getElementById("start").addEventListener("click", newGame);
}
function newGame() {
    document.getElementById("start").style.visibility = "hidden";
    createFields();
}
function createFields() {
    for (let i = 0; i < 13; i++) {
        for (let u = 0; u < 2; u++) {
            let source = "images/pair" + i;
            let pairnumber = i;
            let field = { src: source, pair: pairnumber };
            allfields.push(field);
        }
    }
    placeDivs();
}
function placeDivs() {
    console.log(allfields);
}
//# sourceMappingURL=main.js.map