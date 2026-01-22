const words = ['poduzetnika', 'developera', 'dizajnera'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.querySelector('.typed');

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typedElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 100 : 150;
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        typeSpeed = 500; 
    }
    
    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000); 
});