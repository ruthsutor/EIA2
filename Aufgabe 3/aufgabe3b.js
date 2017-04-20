var maumau;
(function (maumau) {
    let karten = ["Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz K�nig", "Kreuz As",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz K�nig", "Herz As",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik K�nig", "Pik As",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo K�nig", "Karo As"];
    let hand = [];
    let stapelkarten = karten.length;
    let handkarten = 0;
    window.onload = init;
    function init() {
        document.getElementById("stapel").addEventListener("click", newCard);
    }
    function newCard() {
        if (karten.length > 0 && handkarten < 5) {
            let zufall = Math.round(Math.random() * (karten.length - 1)); //Zufallsgenerator
            let gezogen = karten[zufall]; //die gezogene Karte
            karten.splice(zufall, 1); //Karte aus Array entfernen
            handkarten = handkarten + 1; //eine Karte mehr auf der Hand
            let div = document.createElement("div"); //Handkarte erstellen
            document.getElementById("hand").appendChild(div);
            div.textContent = gezogen;
            div.style.width = "100px";
            div.style.height = "150px";
            div.style.marginRight = "20px";
            div.style.cssFloat = "left";
            div.style.border = "2px #000000 solid";
            div.style.textAlign = "center";
            div.style.display = "inline";
            hand.push(gezogen); //gezogene Karte wird Hand Array hinzugef�gt
            div.addEventListener("click", toAblage);
        }
        if (karten.length == 0) {
            document.getElementById("stapel").textContent = "Karten leer";
        }
    }
    function toAblage(_event) {
        let choosenCard = _event.target;
        choosenCard.parentNode.removeChild(choosenCard); //erstelltes Div l�schen
        handkarten = handkarten - 1;
        document.getElementById("ablage").textContent = choosenCard.textContent;
        for (let i = 0; i < hand.length; i++) {
            if (choosenCard.textContent == hand[i]) {
                hand.splice(i, 1); // entfernt die Karte aus dem Array
            }
        }
    }
})(maumau || (maumau = {}));
//# sourceMappingURL=aufgabe3b.js.map