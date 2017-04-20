namespace maumau {

    let karten: string[] = ["Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As"];
    let hand: string[] = [];
    let stapelkarten: number = karten.length;
    let handkarten: number = 0;
    window.onload = init;
    function init(): void {
        document.getElementById("stapel").addEventListener("click", newCard);

    }
    function newCard(): void {
        if (karten.length > 0 && handkarten < 5) {
            let zufall: number = Math.round(Math.random() * (karten.length - 1)); //Zufallsgenerator
            let gezogen: string = karten[zufall]; //die gezogene Karte
            karten.splice(zufall, 1); //Karte aus Array entfernen
            handkarten = handkarten + 1; //eine Karte mehr auf der Hand
            let div: HTMLElement = document.createElement("div"); //Handkarte erstellen
            document.getElementById("hand").appendChild(div);
            div.textContent = gezogen;
            div.style.width = "100px";
            div.style.height = "150px";
            div.style.marginRight = "20px";
            div.style.cssFloat = "left";
            div.style.border = "2px #000000 solid";
            div.style.textAlign = "center";
            div.style.display = "inline";
            hand.push(gezogen); //gezogene Karte wird Hand Array hinzugefügt
            div.addEventListener("click", toAblage);
        }
        if (karten.length == 0) {
            document.getElementById("stapel").textContent = "Karten leer";
        }
    }

    function toAblage(_event: Event): void {
        let choosenCard: HTMLDivElement = <HTMLDivElement>_event.target;
        choosenCard.parentNode.removeChild(choosenCard); //erstelltes Div löschen
        handkarten = handkarten - 1;
        document.getElementById("ablage").textContent = choosenCard.textContent;
        for (let i: number = 0; i < hand.length; i++) {
            if (choosenCard.textContent == hand[i]) { //guckt welche Karte angeklickt wurde
                hand.splice(i, 1); // entfernt die Karte aus dem Array
            }
        }
    }
}

