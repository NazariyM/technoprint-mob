'use strict';

$(document).ready(function () {

  $('.js-nav-list-scroll').perfectScrollbar();

  (function () {
    var $prodSectOpen = $('.js-product-sect-open');

    $prodSectOpen.on('click', function () {
      $(this).toggleClass('open');
      $(this).next().toggle();
    });
  })();

  (function () {
    var $rubricListOpen = $('.js-open-rubric-list');

    $rubricListOpen.on('click', function () {
      $(this).toggleClass('open');
      $(this).next().toggle();
    });
  })();

  function menuToggling() {
    var $menuOpenBtn = $('.js-menu-open').find('.hamburger__bar'),
        $menu = $('.js-menu');

    $menuOpenBtn.on('click', function () {
      $(this).toggleClass('open');
      $menu.slideToggle();
    });
  }

  menuToggling();

  function initHomeSlider() {
    var homeSlider = $('.home-slider');

    homeSlider.slick({
      variableWidth: true,
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="home-slider__btn home-slider__btn_prev"><svg class="home-slider__icon icon-arr-sld-big"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-big"></use></svg></button>',
      nextArrow: '<button type="button" class="home-slider__btn home-slider__btn_next"><svg class="home-slider__icon icon-arr-sld-big"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-big"></use></svg></button>'
    });
  }

  initHomeSlider();

  // message extend
  (function () {
    var $extendBtn = $('.js-message-extend');
    var $moreSuggestText = $('.js-product-suggest-more');

    $extendBtn.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      $(this).prev('textarea').toggleClass('extended');
    });

    $moreSuggestText.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      $(this).prev().toggleClass('is-open');
    });
  })();

  function initSearchField() {
    var $searchOpenBtn = $('.js-search-open'),
        $search = $('.js-search'),
        $searchField = $search.find('.search__input');

    $searchOpenBtn.on('click', function () {
      $search.slideToggle();
    });

    $searchField.on('keyup', function () {
      if ($(this).val().length) {
        $(this).addClass('is-active');
      } else {
        $(this).removeClass('is-active');
      }
    });
  }

  initSearchField();

  // stepper plugin
  function initStepper() {
    $('.js-product-amount').stepper();

    var stepperArrowUp = $('.stepper-arrow.up');
    var stepperArrowDown = $('.stepper-arrow.down');

    stepperArrowUp.append('<svg class="stepper-icon icon-plus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-plus"></use></svg>');

    stepperArrowDown.append('<svg class="stepper-icon icon-minus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-minus"></use></svg>');
  }

  initStepper();

  // rubric list toggling
  (function () {
    var $rubricList = $('.js-rubric-list');

    $rubricList.on('click', function () {

      $(this).toggleClass('is-active');
      $(this).find('.rubric__mini-list').slideToggle(150);
    });

    $rubricList.each(function () {
      if ($(this).hasClass('is-active')) {
        $(this).find('.rubric__mini-list').slideDown();
      }
    });

    $('.rubric__mini-list').on('click', function (e) {
      e.stopPropagation();
    });
  })();

  // init img zoom
  $('[data-fancybox]').fancybox();

  (function () {
    var $productPic = $('.js-product-item-pic');

    $productPic.on('mouseover', function () {
      $(this).addClass('is-active');
    });

    $productPic.on('mouseleave', function () {
      $(this).removeClass('is-active');
    });

    $productPic.on('click', function () {
      $(this).removeClass('is-active');
    });
  })();
});