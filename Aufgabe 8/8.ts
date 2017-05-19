/*  
Aufgabe: Aufgabe 8
Name: Ruth Sutor
Matrikel: 254899
Datum: 18/05/2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
namespace Blumenwiese2 {
    window.addEventListener("load", init);
    export let leinwand: CanvasRenderingContext2D;
    export let allBees: Beedata[] = [];
    export let flowers: Flowers[] = [];
    export let getImage: ImageData;
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        leinwand = canvas.getContext("2d");
        drawImage();
        getImage = leinwand.getImageData(0, 0, 400, 260);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        setTimeout(animateBees, 100);
    }
    function create10Bees(): void {
        for (let i: number = 0; i < 10; i++) {
            if (i < 6) {
                createHoneyBee();
            }
            else {
                createNewBee();
            }
        }
        //console.log(allBees);
    }
    function createNewBee(): void {
        let b: Beedata = new Beedata();
        allBees.push(b);
    }
    function createHoneyBee(): void {
        let b: Honeybee = new Honeybee();
        allBees.push(b);
    }
    function animateBees(): void {
        leinwand.putImageData(getImage, 0, 0);
        for (let i: number = 0; i < allBees.length - 1; i++) {
            allBees[i].move(i);
            if (allBees[i].stopp < 21 && allBees[i].stopp != 0) {
                allBees[i].stopp += 1;
            }
            if (allBees[i].stopp == 20) {
                allBees[i].stopp = 0;
            }
        }
        setTimeout(animateBees, 100);
    }
}