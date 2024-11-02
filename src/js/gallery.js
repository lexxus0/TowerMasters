import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([Pagination]);

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.5,

  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
});
