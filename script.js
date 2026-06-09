// MENU

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});


// DARK MODE

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});


// MUSIC

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {

    if(music.paused){
        music.play();
    } else {
        music.pause();
    }

});


// TYPING EFFECT

const words = [
    "Frontend Developer",
    "Designer",
    "Systems Builder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    let currentWord = words[wordIndex];

    if(!deleting){
        charIndex++;
    }else{
        charIndex--;
    }

    document.getElementById("typing").textContent =
    currentWord.substring(0,charIndex);

    if(charIndex === currentWord.length){
        deleting = true;

        setTimeout(typeEffect,1000);
        return;
    }

    if(charIndex === 0){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect,120);
}

typeEffect();