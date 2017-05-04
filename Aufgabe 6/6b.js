var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let stringArray = _input.split(",");
        let sex;
        if (stringArray[4] == "0") {
            sex = true;
        }
        if (stringArray[4] == "1") {
            sex = false;
        }
        let student = { matrikel: parseInt(stringArray[0]), name: stringArray[1], vorname: stringArray[2], alter: parseInt(stringArray[3]), geschlecht: sex, kommentar: stringArray[5] };
        students.push(student);
        return "danke!";
    }
    function queryData(_matrikel) {
        let antwort = "Sorry not found...";
        for (let i = 0; i < students.length; i++) {
            let geschlecht;
            if (students[i].geschlecht == true) {
                geschlecht = "weiblich";
            }
            if (students[i].geschlecht == false) {
                geschlecht = "m�nnlich";
            }
            if (students[i].matrikel == _matrikel) {
                antwort = "Matrikelnummer: " + students[i].matrikel + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }
        }
        return antwort;
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=6b.js.map