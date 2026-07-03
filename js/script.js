// Typing Animation

const words = [

"Computer Science Student",

"Full Stack Developer",

"Frontend Developer",

"AI Enthusiast",

"Founder @ Origin Technologies",

"Photographer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type(){

const current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(type,1500);

return;

}

}else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(type,deleting ? 50 : 100);

}

type();


// Loading Screen

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

},2000);

});


// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach((element)=>{

const top = element.getBoundingClientRect().top;

const windowHeight = window.innerHeight;

if(top < windowHeight - 100){

element.classList.add("active");

}

});

});