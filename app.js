import { phrases } from "./phrases.js";

function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function showTime(){
    const startDate = new Date('2023-10-17');
    let text = "";

    if(new Date().getDate() == 17){
        text += "Feliz ";
        text += Math.floor((Date.now() - startDate) / (1000 * 3600 * 24 * 30.44));
        text += " Meses";
    }
    else{
        text += "Juntos a ";
        text += Math.floor((Date.now() - startDate) / (1000 * 3600 * 24));
        text += " Dias";
    }

    document.querySelector("#time").innerText = text;

}showTime();


function selectPhrase(){
    let hash = new Date().getDate() % phrases.length;
    
    if((new Date().getDate()-1 % phrases.length) == hash){
        if(hash == phrases.length-1)
            hash--;
        else
            hash++;
    }

    return phrases[hash];
}


function setPhrase(){
    let text = "\"";
    text += selectPhrase();
    text += "\"";
    
    document.querySelector(".phrase").innerText = text;

}setPhrase()


document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.container');
    
    containers.forEach(function(container) {
        container.addEventListener('mouseenter', function() {
            var card = this.querySelector('.card');
            card.style.top = '-120px';
            card.style.transition = 'top 0.5s';
        });
        container.addEventListener('click', function() {
            var card = this.querySelector('.card');
            if(card.value == "clicked"){
                card.style.top = '0px';
                card.style.transition = 'top 0.5s';
                card.value = "not-clicked"
            }
            else{
                card.value = "clicked"
                card.style.top = '-120px';
                card.style.transition = 'top 0.5s';
            }
        });
        container.addEventListener('mouseleave', function() {
            var card = this.querySelector('.card');
            card.style.top = '0px';
            card.style.transition = 'top 0.5s';
        });
    });
});