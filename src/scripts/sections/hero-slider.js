import {register} from '@shopify/theme-sections';
import $ from 'jquery';
import 'slick-carousel';

register('hero-slider-section', {
  sliderMain() {
    const autoSlide = $('#mainslide').attr('data-autorotate');
    const speedSlide = $('#mainslide').attr('data-speed');
    $('.slide-main-hero').slick({
      autoplay: autoSlide,
      autoplaySpeed: speedSlide,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      fade: true,
      cssEase: 'linear',
      prevArrow: $('#prevslideHomeMain'),
      nextArrow: $('#nextslideHomeMain')
    });
  },
  onLoad() {
    this.sliderMain();
  },
});
