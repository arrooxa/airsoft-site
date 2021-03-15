document.addEventListener('DOMContentLoaded', () => {

    const membersImage = document.querySelectorAll('.circle-image img');
    const membersSocial = document.querySelectorAll('.membros.social-media');


    [...membersImage].map((item,index) => {
        item.addEventListener('mouseenter', () => {
            membersSocial[index].style.display = 'block';
            membersSocial[index].addEventListener('mouseenter', () => {
                membersSocial.style.display = 'block';
            })
        })
        item.addEventListener('mouseleave', () => {
            membersSocial[index].style.display = 'none';
        })
    })
})