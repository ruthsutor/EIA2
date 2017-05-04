namespace StudiVZ {
    interface StudentData {
        matrikel: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let stringArray: string[] = _input.split(",");
        let sex: boolean;
        if (stringArray[4] == "0") {
            sex = true;
        }
        if (stringArray[4] == "1") {
            sex = false;
        }
        let student: StudentData = { matrikel: parseInt(stringArray[0]), name: stringArray[1], vorname: stringArray[2], alter: parseInt(stringArray[3]), geschlecht: sex, kommentar: stringArray[5] };
        students.push(student);
        return "danke!";
    }
    function queryData(_matrikel: number): string {
        let antwort: string = "Sorry not found...";
        for (let i: number = 0; i < students.length ; i++) {
            let geschlecht: string;
            if (students[i].geschlecht == true) {
                geschlecht = "weiblich";
            }
            if (students[i].geschlecht == false) {
                geschlecht = "männlich";
            }
            if (students[i].matrikel == _matrikel) {
                antwort = "Matrikelnummer: " + students[i].matrikel + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }
        }
        return antwort;
    }
}