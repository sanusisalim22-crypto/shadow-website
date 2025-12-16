// ----------------------
// Smooth scroll for nav links
// ----------------------
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ----------------------
// Fade-in sections and footer on scroll
// ----------------------
const sections = document.querySelectorAll('main section');
const footer = document.querySelector('footer');

function showOnScroll() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < trigger){
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });

    const footerTop = footer.getBoundingClientRect().top;
    if(footerTop < window.innerHeight){
        footer.classList.add('show');
    }
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// ----------------------
// Active nav link on scroll
// ----------------------
function setActiveLink() {
    let scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
        const top = section.offsetTop - 60; // adjust for header height
        const bottom = top + section.offsetHeight;
        const id = section.id;

        if(scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
