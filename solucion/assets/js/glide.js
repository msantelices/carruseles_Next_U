export const newCarousel = (carouselContainer, options = {}) => {
    const defaultOptions = {
        type: 'carousel',
        startAt: 0,
        perView: 5,
        focusAt: 'center',
        breakpoints: {
            500: {
                perView: 2
            },
            768: {
                perView: 3
            },
            1024: {
                perView: 3
            },
            1200: {
                perView: 4
            }
        },
        gap: 30,
        autoplay: 6000,
        hoverpause: false
    };

    const mergedOptions = { ...defaultOptions, ...options };

    new Glide(carouselContainer, mergedOptions).mount();
};
