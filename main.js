const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If you want to add pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // If you want to add navigation buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // You can also enable autoplay
    autoplay: {
        delay: 3000,
    },
});
