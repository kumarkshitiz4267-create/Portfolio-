const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navlinks');
const revealItems = document.querySelectorAll('.reveal');
const tiltCards = document.querySelectorAll('.tilt-card');

menuBtn.addEventListener('click', ()=> {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link =>{
    link.addEventListener('click',() => {
        navLinks.classList.remove('active');
    });
});

function showOnScroll(){
    const triggerBottom = window.innerHeight*0.85;

    revealItems.forEach(item =>{
        const boxTop = item.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            item.classList.add('show');
        }
    });
}

showOnScroll();
window,addEventListener('scroll',showOnScroll);

function addTiltEffect(card) {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 14;
    const rotateY = (x - centerX) / 14;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
}

tiltCards.forEach(addTiltEffect);
