document.addEventListener('DOMContentLoaded', function () {

    var name = prompt("Wie heisst du?");
    document.getElementById("helloname").innerHTML = "Hallo" + " " + name;
});
