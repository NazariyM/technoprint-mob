'use strict';

$(document).ready(function () {

  $('.js-nav-list-scroll').perfectScrollbar();

  function initTopBar() {
    var $topBar = $('.js-header-bar'),
        $topBarMenu = $topBar.find('.header__bar-btn'),
        $topBarContent = $topBar.find('.header__bar-content > div');

    $topBarMenu.each(function (i) {
      $(this).attr('data-tab', 'tab' + i);
    });
    $topBarContent.each(function (i) {
      $(this).attr('data-tab', 'tab' + i);
    });

    $topBarMenu.click(function () {
      var tabData = $(this).data('tab');
      $topBar.find($topBarContent).hide();
      $topBar.find($topBarContent).filter('[data-tab=' + tabData + ']').show();

      if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $topBar.find($topBarContent).filter('[data-tab=' + tabData + ']').hide();
      } else {
        var $before = $('.header__bar-btn.is-active');
        $before.removeClass('is-active');
        $(this).addClass('is-active');
      }
    });

    $topBarMenu.each(function () {
      var $this = $(this);
      if ($this.hasClass('is-open')) $this.trigger('click');
    });

    var $menuBtn = $('.js-menu-hamburger');
    var $win = $(window);
    var myWinH = $win.height() * 3;

    $win.on('scroll', function () {
      if ($(this).scrollTop() > myWinH) {
        $menuBtn.addClass('is-active');
      } else {
        $menuBtn.removeClass('is-active');
      }
    }).on('resize', function () {
      myWinH = $(this).height();
    });

    $menuBtn.on('click', function () {
      $('html, body').animate({
        scrollTop: $("[data-tab='tab0']").offset().top
      }, 400);
    });
  }

  initTopBar();

  var $homeSlider = $('.js-home-slider');
  var $productSlider = $('.js-product-look');
  $homeSlider.slick({
    variableWidth: true,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="home-slider__btn home-slider__btn_prev"><svg class="home-slider__icon icon-arr-sld-big"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-big"></use></svg></button>',
    nextArrow: '<button type="button" class="home-slider__btn home-slider__btn_next"><svg class="home-slider__icon icon-arr-sld-big"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-big"></use></svg></button>'
  });
  $productSlider.slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="product__look-btn product__look-btn_prev"><svg class="product__look-btn-icon icon-arr-sld-big"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-big"></use></svg></button>',
    nextArrow: '<button type="button" class="product__look-btn product__look-btn_next"><svg class="product__look-btn-icon icon-arr-sld-big"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld-big"></use></svg></button>'
  });

  (function () {
    var $prodSectOpen = $('.js-product-sect-open');
    $prodSectOpen.on('click', function () {
      $(this).toggleClass('open');
      $(this).next().toggleClass('is-open');
    });
  })();

  (function () {
    var $showMoreText = $('.js-more-text');
    $showMoreText.on('click', function (e) {
      e.preventDefault();
      var $thisBtn = $(this);
      var $items = $thisBtn.siblings();

      $items.each(function () {
        if ($(this).hasClass('is-visible')) {
          $(this).hide().removeClass('is-visible');
          $thisBtn.text('Показать полностью');
        } else if ($(this).hasClass('hidden')) {
          $(this).show().addClass('is-visible');
          $thisBtn.text('Скрыть');
        }
      });
    });
  })();

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

  function initFocusFields() {
    var $focusInput = $('.js-focus-fields').find('input:not("[type=file]"), textarea');

    $focusInput.on('focus', function () {
      var $focusField = $(this).parent();
      $focusField.addClass('is-focus');
    });
    $focusInput.on('blur', function () {
      var $focusField = $(this).parent();
      $focusField.removeClass('is-focus');
    });
  }

  initFocusFields();

  // stepper plugin
  function initStepper() {
    $('.js-product-amount').stepper();

    var stepperArrowUp = $('.stepper-arrow.up');
    var stepperArrowDown = $('.stepper-arrow.down');

    stepperArrowUp.append('<svg class="stepper-icon icon-plus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-plus"></use></svg>');

    stepperArrowDown.append('<svg class="stepper-icon icon-minus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-minus"></use></svg>');
  }

  initStepper();

  // rubric menu toggling
  (function () {
    var $rubricList = $('.js-rubric-list');
    var $rubricMiniList = $('.js-rubric-mini-list');
    var $rubricOpen = $('.js-rubric-open');

    $rubricList.on('click', function () {
      $(this).toggleClass('is-active');
    });
    $rubricMiniList.on('click', function () {
      $(this).toggleClass('is-active');
    });

    $('.rubric__sub-list, .rubric__mini-list').on('click', function (e) {
      e.stopPropagation();
    });

    $rubricOpen.on('click', function (ev) {
      ev.stopPropagation();
      $(this).next().toggle();
      $(this).toggleClass('is-active');
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

  // open basket comment
  var $commentOpenBtn = $('.js-open-comment');
  $commentOpenBtn.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
    $(this).next().toggle();
  });
  // remove item from basket
  var $removeBtn = $('.js-remove-product');
  $removeBtn.on('click', function () {
    $(this).parent().remove();
  });
});