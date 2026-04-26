console.log("Portfolio loaded successfully!");

const texts=[
    "Welcome to my portfolio!",
    "I am Kshitiz Kumar",
    "I build real-world tech",
    "I create IoT projects",
    "I am a software developer",
];

let index=0;
let charIndex=0;
let currentText="";
let isDeleting=false;

function typeEffect(){
    currentText=texts[index];

    if (!isDeleting) {
    document.getElementById("typing").textContent =
      currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // pause
      return;
    }
  } else {
    document.getElementById("typing").textContent =
      currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();