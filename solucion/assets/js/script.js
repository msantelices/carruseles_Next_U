import { newCarousel } from "./glide.js"

const carouselContainer = document.querySelector('.glide')

const customOptions = {
    autoplay: 3000,
    hoverpause: true
}

newCarousel(carouselContainer, customOptions);
