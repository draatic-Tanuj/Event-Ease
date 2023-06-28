var button=document.querySelector('.prev-button');
button.style.height='30px';
button.style.width='10px';

var slider = new Swiper(".gallery-to-look-for",{
    slidedsPreview:4.7,
    spaceBetween:35,
    navigation: {
        nextEl:".next-button",
        prevEl:".prev-button",
    },
});
