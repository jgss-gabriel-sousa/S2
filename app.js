import { phrases } from "./phrases.js";

function showTime(){
    const startDate = new Date('2023-10-16');
    let text = "";

    if(new Date().getDate() == 16){
        text += "Feliz ";
        text += Math.floor((Date.now() - startDate) / (1000 * 3600 * 24 * 30.44));
        text += " Meses";
    }
    else{
        text += "Juntos a  ";
        text += Math.floor((Date.now() - startDate) / (1000 * 3600 * 24));
        text += " Dias";
    }

    document.querySelector("#time").innerText = text;

}showTime();


let text = "\"";

function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
text += phrases[rand(0, phrases.length-1)]
text += "\"";

document.querySelector(".phrase").innerText = text;


document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
        container.addEventListener('mouseenter', function() {
            var card = this.querySelector('.card');
            card.style.top = '-120px';
            card.style.transition = 'top 0.5s';
        });
        container.addEventListener('mouseleave', function() {
            var card = this.querySelector('.card');
            card.style.top = '0px';
            card.style.transition = 'top 0.5s';
        });
    });
});