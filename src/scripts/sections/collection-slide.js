import {register} from '@shopify/theme-sections';
import $ from 'jquery';
import { stubTrue } from 'lodash-es';
import 'slick-carousel';

register('collection-slide-section', {
  slideProducts() {
    $('.slideProductsColl').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('#prevProdColl'),
      nextArrow: $('#nextProdColl'),
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 556,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  },
  onLoad() {
    this.slideProducts();
  },
  init: function() {
    this.slideProducts();
  },
});
