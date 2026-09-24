/*
const button = document.querySelector("button");
const quote = document.querySelector(".quote");

button.addEventListener("click", function () {
    quote.textContent = "You did something today. That's enough. 🌷";
    button.textContent = "You did it! ♡";
}); 
*/

const crushes = [
    {
        name: "Jungkook 👀",
        image:"images/jk.jpg",
        message: "Looks innocent. That’s the problem.",
        status: "heart rate: absolutely NOT normal"
    },

    {
        name: "Jimin 🫠",
         image:"images/jm.jpg",
        message: "He smiled. You forgot every word you knew.",
        status: "system: losing consciousness"
    },

    {
        name: "Yoongi 🐈",
         image:"images/yg.jpg",
        message: "He said nothing. Somehow that made it worse.",
        status: "he don't give a uh"
    },

    {
        name: "Taehyung 💗",
         image:"images/V.jpg",
        message: "Eye contact detected. Immediate emotional damage.",
        status: "system: visually overwhelmed"
    },

    {
        name: "RM 😭",
         image:"images/BTS RM  'MARRY GO ROUND' MV PHOTO SKETCH.jpg",
        message: "Looks friendly. That’s the trap.",
        status: "delusion level: critical"
    },
    {
        name: "Jhope❤️‍🔥",
         image:"images/HOBI 💜.jpg",
        message: "Charisma set to illegal levels",
        status: "Anyway...He will judge you"

    },
   {
        name: "Seokjin ✨",
        image:"images/Jin 💘   ig @hooliganjeon.jpg",
        message: "Looks harmless. Absolutely isn’t.",
        status: "He don't have think"

    }

];
const crushImage = document.getElementById("crushImage");

const crushName = document.getElementById("crushName");
const crushMessage = document.getElementById("crushMessage");
const status = document.getElementById("status");

const button = document.getElementById("crushButton");

let currentIndex = 0;
let direction = 1;


button.addEventListener("click", function () {
    const crush = crushes[currentIndex];

    // RASM
crushImage.classList.add("fade-text");

setTimeout(() => {
    crushImage.src = crush.image;
    crushImage.alt = crush.name;

    crushImage.classList.remove("fade-text");
}, 500);
    // YOZUVLAR
    crushName.classList.add("fade-text");
crushMessage.classList.add("fade-text");
status.classList.add("fade-text");

setTimeout(() => {
    crushName.textContent = crush.name;
    crushMessage.textContent = crush.message;
    status.textContent = crush.status;

    crushName.classList.remove("fade-text");
    crushMessage.classList.remove("fade-text");
    status.classList.remove("fade-text");
}, 500);

    currentIndex++;

    if (currentIndex >= crushes.length) {
        currentIndex = 0;
    }

    const heart = document.createElement("span");

heart.textContent = "♡";
heart.classList.add("floating-heart");

button.appendChild(heart);

setTimeout(() => {
    heart.remove();
}, 1000);
});