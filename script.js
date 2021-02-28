window.addEventListener('scroll', () => {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const questionCard = document.querySelectorAll('.question-card');
const colorHex = document.querySelector('.question-card img');
console.log(colorHex);


Array.prototype.map.call(questionCard, card => card.style.boxShadow = '');