console.log('Running');

const button = document.querySelector(".button");
const socialLinks = document.querySelector('.social-links');

console.log(button);

button.addEventListener('click', () => {
    socialLinks.classList.toggle('active');
})