document.addEventListener('DOMContentLoaded', function () {
    var karten = ["Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz K�nig", "Kreuz As",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz K�nig", "Herz As",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik K�nig", "Pik As",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo K�nig", "Karo As"];
    var hand = [];
    var ablage = [];
    var stapelkarten = karten.length;
    var handkarten = 0;
    document.getElementById("stapel").addEventListener("click", function () {
        if (stapelkarten > 0 && handkarten < 5) {
            var zufall = Math.floor((Math.random() * stapelkarten) + 0); //Zufallsgenerator
            var gezogen = karten[zufall]; //die gezogene Karte
            karten.splice(zufall, 1); //Karte aus Array entfernen
            handkarten = handkarten + 1; //eine Karte mehr auf der Hand
            let div = document.createElement("div"); //Handkarte erstellen
            document.getElementById("hand").appendChild(div);
            div.textContent = gezogen;
            div.style.width = "200px";
            div.style.height = "300px";
            div.style.marginRight = "20px";
            div.style.cssFloat = "left";
            div.style.border = "2px #000000 solid";
            div.style.textAlign = "center";
            div.style.display = "inline";
            hand.push(karten[zufall]); //gezogene Karte wird Hand Array hinzugef�gt
            div.addEventListener("click", function () {
                for (let i = 0; i < hand.length; i++) {
                    if (this.textContent == hand[i]) {
                        handkarten = handkarten - 1;
                        ablage.push(hand[i]); //Karte wird Ablage Array hinzugef�gt
                        hand.splice(i, 1); //und aus Hand Array entfernt
                    }
                }
                document.getElementById("ablage").textContent = ablage[ablage.length]; //Letztes Element des Ablage Arrays wird gezeigt
            });
        }
    });
});
//# sourceMappingURL=aufgabe3b.js.map