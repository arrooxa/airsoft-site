const questionCard = document.querySelectorAll('.question-card');
const questionImage = document.querySelectorAll('.question-card img')[1];
const colorHex = questionImage.src.substring(questionImage.src.indexOf('colors/', 0) + 7, questionImage.src.length - 4);
const profileImage = document.querySelector('.profile-image');
const closeIcon = document.querySelector('.close-icon');
const page = document.querySelector('.page');
const imageFocus = document.querySelector('.click-function');

profileImage.addEventListener('click', () => {
    imageFocus.style.display = 'block';
    page.style.opacity = '0.1';
    closeIcon.style.cursor = 'pointer';
    document.querySelector('*').style.overflow = 'hidden'; 
        closeIcon.addEventListener('click', () => {
            imageFocus.style.display = 'none';
            page.style.opacity = '1';
            document.querySelector('*').style.overflow = 'auto';
        })
})

Array.prototype.map.call(questionCard, card => {
    card.style.boxShadow = `3px 3px 2px #${colorHex}`
});
