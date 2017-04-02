document.addEventListener('DOMContentLoaded', function () {

    var gerade = true;
    var reis: number = 1;
    for (let i = 0; i < 64; i++) {
        var div = document.createElement("div");
        if (i % 8 == 0) {
            div.className += " float";
            gerade = !gerade;
        }
        if ((i + 1) % 2 == 0 && !gerade) {
            div.className += " schwarz";
        }
        if (i % 2 == 0 && gerade) {
            div.className += " schwarz";
        }
        
        div.textContent = reis +"";
        document.body.appendChild(div);
        reis = reis * 2;
    
};
});