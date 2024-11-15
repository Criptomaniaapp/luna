/***************************************************
==================== JS INDEX ======================
****************************************************
01. Preloader
02. Close Top Bar
03. Sticky Menu
04. Type JS
05. Hero Slider One
06. Hero Slider Three
07. About Us Counter
08. Counter Two
09. Service Slider 1
10. Testimonial Slider 1
11. Testimonial Slider 2
12. Portfolio Slider 1
13. Case Study Slider 2
14. Case Study Slider 3
15. Mouse Animation for all pages
16. Mouse Animation for Portfolio Slider 1
17. Mouse Animation for Case Study Slider 2
18. Mouse Animation for Case Study Slider 3
19. Mouse Animation Team Slider 2
20. Video Modal
21. About Us Animation
22. About Us Animation 3
23. Scroll Animation for About Thumb 2
24. Core Feature Images Animation
25. Scroll Animation for About Thumb 4
26. Animation for Workflow Thumb
27. WOW JS
28. Side Navbar
29. Button Hover
30. Offcanvas Toggle
31. Progress Bar 


****************************************************/

(function ($) {
  "use strict";

  // Screen Width
  var device_width = window.screen.width;

  // Preloader
  $(document).ready(function () {
    $("#container").addClass("loaded");
    if ($("#container").hasClass("loaded")) {
      $("#preloader")
        .delay(1000)
        .queue(function () {
          $(this).remove();
        });
    }
  });

  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);

  // Magnific Image popup
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Magnific Video popup
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  //testimonial 4
  var testimonial_4 = new Swiper(".testimonial_4", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheel: false,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,

      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          ' <span class="dash"></span> ' +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });

  // Testimonial
  var epTestiononial = new Swiper(".ep-testimonial-active", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".ep-ts-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ("0" + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ("0" + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          ' <span class="dash"></span> ' +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
  });

  // testimonial 9
  var testimonial_slider_9 = new Swiper(".testimonial__slider-9", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    speed: 1800,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
  });

  // Text Slider
  var text_slider_option = document.querySelector(".text__slider");

  if (text_slider_option) {
    var text_slider_speed = 5000;
    var text_slider_autoplay = true;
    var loop_value = true;
    var data_itemshow = "auto";

    if (text_slider_option.getAttribute("data-sliderSpeed")) {
      text_slider_speed = parseInt(
        text_slider_option.getAttribute("data-sliderSpeed")
      );
    }
    if (text_slider_option.getAttribute("data-autoPlay")) {
      text_slider_autoplay = text_slider_option.getAttribute("data-autoPlay");
    }

    if (text_slider_option.getAttribute("data-loop")) {
      loop_value = text_slider_option.getAttribute("data-loop");
    }
    if (text_slider_option.getAttribute("data-itemShow")) {
      data_itemshow = text_slider_option.getAttribute("data-itemShow");
    }

    if (text_slider_autoplay == "true") {
      var text_slider = new Swiper(".text__slider", {
        loop: loop_value,
        speed: text_slider_speed,
        allowTouchMove: false,
        slidesPerView: data_itemshow,
        slidesPerGroup: 10,
        spaceBetween: 20,
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
        },
      });
    } else {
      var text_slider = new Swiper(".text__slider", {
        loop: loop_value,
        speed: text_slider_speed,
        allowTouchMove: false,
        slidesPerView: data_itemshow,
        slidesPerGroup: 10,
        spaceBetween: 20,
        autoplay: false,
      });
    }
  }

  /////////////////////////////////////////////////////
  // Brand Slider
  var brand_logo_slider_options = document.querySelector(".brand_logo_slider");

  if (brand_logo_slider_options) {
    var brand_autoplay_val =
      brand_logo_slider_options.getAttribute("data-autoPlay");
    var brand_slider_speed = parseInt(
      brand_logo_slider_options.getAttribute("data-sliderSpeed")
    );

    if (brand_autoplay_val == "true") {
      var brand_logo_slider = new Swiper(".brand_logo_slider", {
        loop: true,
        speed: brand_slider_speed,
        slidesPerView: "auto",
        allowTouchMove: false,
        spaceBetween: 120,
        autoplay: {
          delay: 1,
        },
      });
    } else {
      var brand_logo_slider = new Swiper(".brand_logo_slider", {
        loop: true,
        speed: brand_slider_speed,
        autoplay: false,
        spaceBetween: 120,
        slidesPerView: "auto",
        allowTouchMove: false,
      });
    }
  }
  /////////////////////////////////////////////////////

  // contentwriter testimonial
  var contenttestimonial = new Swiper(".swiper.contentwriter-active", {
    speed: 2000,
    navigation: {
      nextEl: ".cwt-prev",
      prevEl: ".cwt-next",
    },
  });

  // Nav Icon 2
  $("#header_navicon_2").on("click", function () {
    $(".header__area-2").css("left", "0");
  });

  $("#header_naviconclose_2").on("click", function () {
    $(".header__area-2").css("left", "-320px");
  });

  // video 7

  var video_player = document.querySelector(".video7_layer");
  if (video_player) {
    $(".video7_layer").vidbacking();
  }
  // Active GSAP


  ///////////////////////////////////////////////////
  //
  const skill_counter = window.counterUp.default;
  const skill_cb = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        skill_counter(el, {
          duration: 1500,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };

  const IO = new IntersectionObserver(skill_cb, {
    threshold: 1,
  });

  const els = document.querySelectorAll(".wc-counter");
  els.forEach((el) => {
    IO.observe(el);
  });
  ///////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // 33. Progress Bar
  $(".progress__label").progressBar({
    percentage: true,
    animation: true,
    height: "10",
    barColor: "#1E2337",
    shadow: true,
  });
  ///////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // 33. Progress Bar 2
  $(".progress__label-2").progressBar({
    height: "10",
    percentage: true,
    animation: true,
    shadow: true,
    barColor: "#1E2337",
    backgroundColor: "#ffcaca",
  });

  var progress_item_2 = document.querySelectorAll(
    ".progress__item-2 .sonny_progressbar"
  );
  progress_item_2.forEach((elem) => {
    var prog_val = elem.getAttribute("data-width");
    elem.childNodes[1].childNodes[2].style.left = prog_val + "%";
  });
  ///////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  // Developer Portfolio Slider
  var dev_portf_slider_opts = document.querySelector(
    ".developer-portfolio__slider"
  );

  if (dev_portf_slider_opts) {
    var auto_play = dev_portf_slider_opts.getAttribute("data-autoplay");
    var items = dev_portf_slider_opts.getAttribute("data-items");

    var portfolio_slider = new Swiper(".developer-portfolio__slider", {
      loop: true,
      speed: 3000,
      autoplay: auto_play == "true" ? true : false,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: items - 1,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: items,
          spaceBetween: 60,
        },
        1600: {
          slidesPerView: items,
          spaceBetween: 80,
        },
      },
    });
  }
  //////////////////////////////////////////////////////

  //////////////////////////////////////////////////////
  var hero_slider_8 = new Swiper(".heroslider_8", {
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 1500,
    },
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  ///////////////////////////////////////////////////
  // Developer Testimonial Slider
  var testimonial_slider = new Swiper(".developer-testimonial__slider", {
    loop: true,
    speed: 2500,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 80,
      },
    },
  });
  /////////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  // Creator Testimonial Slider
  var testimonial_slider = new Swiper(".creator-testimonial__slider", {
    loop: true,
    speed: 2500,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 80,
      },
    },
  });
  /////////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  // Social Fluence Testimonial Slider
  var sfluence_testimonial_slider = new Swiper(
    ".sfluence-testimonial__slider",
    {
      loop: true,
      speed: 2000,
      slidesPerView: 1,
      spaceBetween: 20,
    }
  );
  /////////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  // Social Fluence Testimonial Slider
  var speaker_event_slider = new Swiper(".speaker-event__slider", {
    loop: true,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          ' <span class="mid-line"></span> ' +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
    navigation: {
      nextEl: ".ms-btn-next",
      prevEl: ".ms-btn-prev",
    },
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  var about_slider = new Swiper(".developer-about__slider", {
    loop: true,
    freemode: true,
    spaceBetween: 80,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 10000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });
  /////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////
  $(".developer-resume__tab-menu li a").on("click", function () {
    var target = $(this).attr("data-rel");
    $(".developer-resume__tab-menu li a").removeClass("active");
    $(this).addClass("active");
    $("#" + target)
      .fadeIn("slow")
      .siblings(".developer-resume-tab-box")
      .hide();
    return false;
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // 04. Type JS
  var type_list = document.querySelector("#typed_list");

  if (type_list) {
    var hero_1 = new Typed("#typed", {
      stringsElement: "#typed_list",
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: "|",
      loop: true,
    });
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Active MixitUp
  var mixitup_active = document.querySelector(".mixitup-active");
  if (mixitup_active) {
    var portf_mixer = mixitup(".mixitup-active");
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Scroll Top

  let scroll_top = document.getElementById("scroll_top");
  if (scroll_top) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        scroll_top.classList.add("showed");
      } else {
        scroll_top.classList.remove("showed");
      }
    };

    scroll_top.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
  /////////////////////////////////////////////////////

  // meanmenu activition
  $(".offcanvas__menu").meanmenu({
    meanScreenWidth: "5000",
    meanMenuContainer: ".offcanvas__menu-wrapper",
    meanMenuCloseSize: "36px",
  });

  // meanmenu activition
  $(".main-menu").meanmenu({
    meanScreenWidth: "1400",
    meanMenuContainer: ".offcanvas__menu-wrapper",
    meanMenuCloseSize: "36px",
  });

  // parallax

  $(".img-parallax").each(function () {
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg() {
      var speed = img.data("speed");
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();

      // The next pixel to show on screen
      var winBottom = winY + winH;

      // If block is shown on screen
      if (winBottom > imgY && winY < imgY + parentH) {
        // Number of pixels shown after block appear
        var imgBottom = (winBottom - imgY) * speed;
        // Max number of pixels until block disappear
        var imgTop = winH + parentH;
        // Porcentage between start showing until disappearing
        var imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);
      }
      img.css({
        top: imgPercent + "%",
        transform: "translate(-50%, -" + imgPercent + "%)",
      });
    }
    $(document).on({
      scroll: function () {
        parallaxImg();
      },
      ready: function () {
        parallaxImg();
      },
    });
  });

  // service 9
  $(".js-tilt").tilt({
    maxTilt: 5,
  });

  /////////////////////////////////////////////////////
  // 30. Event JS
  const eventImg = document.querySelectorAll(".sfluence-event__item a");

  function eventImgMove(event, eventImg) {
    const contentBox = eventImg.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    eventImg.children[4].style.transform = `translate(${dx}px, ${dy}px)`;
  }

  eventImg.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(eventImgMove(event, item), 1000);
    });
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Social Fluence Slider
  var sfluence_video__slider = new Swiper(".sfluence-video__slider", {
    loop: true,
    speed: 1500,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
      formatFractionCurrent: function (number) {
        return ("0" + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ("0" + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          ' <span class="mid-line"></span> ' +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
    breakpoints: {
      1300: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Social Fluence Modal
  // var sf_modal = jQuery('.sfluence-video__slide .slider-icon');

  // if (sf_modal) {
  //   sf_modal.on('click', function () {
  //     var sf_modal_id = jQuery(this).attr('data-sliderID');

  //     jQuery('#modal_sfluence_' + sf_modal_id).addClass('showed');
  //   });

  //   jQuery('.modal__sfluence-area .close_btn').on('click', function () {
  //     jQuery('.modal__sfluence-area').removeClass('showed');
  //   });
  // }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Play Video on Hover
  var play_video_on_hover = document.querySelectorAll(".play_video_on_hover");

  play_video_on_hover.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      item.play();
    });
  });

  play_video_on_hover.forEach((item) => {
    item.addEventListener("mouseout", (e) => {
      item.pause();
    });
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Testimonial Video
  var testimonial_video = document.querySelectorAll(".testimonial_video");

  testimonial_video.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      item.play();
    });
  });

  testimonial_video.forEach((item) => {
    item.addEventListener("mouseout", (e) => {
      item.pause();
    });
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Responsive table
  var table = document.querySelector(".wcf-table");
  if (table) {
    new basictable(".wcf-table", {
      breakpoint: 768,
    });
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Service Item Hover
  const fashion_eventImg = document.querySelectorAll(".fashion__service-item");
  const eventImgreal = document.querySelectorAll(".fashion__service-up");

  if (fashion_eventImg) {
    function eventImgMove(event, eventImg) {
      const contentBox = eventImg.getBoundingClientRect();
      const dx = (event.clientX - contentBox.x) / 50;
      const dy = (event.clientY - contentBox.y) / 10;

      eventImgreal.forEach((img) => {
        img.childNodes[1].style.transform = `translate(${dx}px, ${dy}px)`;
        img.childNodes[3].style.transform = `translate(${dx}px, ${dy}px)`;
      });
    }

    function imgMoveFunc() {
      fashion_eventImg.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
          setInterval(eventImgMove(event, item), 1000);
        });
      });
    }

    function removefunc() {
      fashion_eventImg.forEach((e) => {
        e.classList.remove("active");
      });
    }

    fashion_eventImg.forEach((e, i) => {
      e.addEventListener("mouseenter", () => {
        removefunc();
        e.classList.add("active");

        imgMoveFunc();
      });
    });
  }

  const intDesigner_eventImg = document.querySelectorAll(".hover_item_name");
  const intDesigner_eventImgreal = document.querySelectorAll(
    ".hover_item_content"
  );

  if (intDesigner_eventImg) {
    function eventImgMove(event, eventImg) {
      const contentBox = eventImg.getBoundingClientRect();
      const dx = (event.clientX - contentBox.x) / 50;
      const dy = (event.clientY - contentBox.y) / 10;

      intDesigner_eventImgreal.forEach((img) => {
        img.childNodes[1].style.transform = `translate(${dx}px, ${dy}px)`;
        img.childNodes[3].style.transform = `translate(${dx}px, ${dy}px)`;
      });
    }

    function imgMoveFunc() {
      intDesigner_eventImg.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
          setInterval(eventImgMove(event, item), 1000);
        });
      });
    }

    function removefunc() {
      intDesigner_eventImg.forEach((e) => {
        e.classList.remove("active");
      });
    }

    intDesigner_eventImg.forEach((e, i) => {
      e.addEventListener("mouseenter", () => {
        removefunc();
        e.classList.add("active");

        imgMoveFunc();
      });
    });
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  const photographer_eventItem = document.querySelectorAll(
    ".photographer__service-item"
  );
  const photographer_imageItem = document.querySelectorAll(
    ".photographer__service-hoverImg"
  );

  function ImageMove(event, eventImg) {
    const contentBox = eventImg.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    photographer_imageItem.forEach((img) => {
      img.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  }

  photographer_eventItem.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(ImageMove(event, item), 1000);
    });
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Lawyer Counter
  const lawyer_counter_items = document.querySelectorAll(
    ".counter__content__item__count"
  );

  if (lawyer_counter_items.length < 0) {
    gsap.from(lawyer_counter_items, {
      textContent: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".counter__content",
      },
      ease: Power1.easeIn,
      snap: { textContent: 1 },
      stagger: 1,
    });
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Athletic Counter

  var countdown = document.querySelector("#countdown");

  if (countdown) {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/30/",
        birthday = dayMonth + yyyy;

      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }

      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;

          (document.getElementById("days").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's finished!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
        }, 0);
    })();
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Button Move Animation
  // const all_btns = gsap.utils.toArray(".btn_wrapper");
  // if (all_btns.length > 0) {
  //   var all_btn = gsap.utils.toArray(".btn_wrapper");
  // }

  const all_btn = gsap.utils.toArray(".btn-wrapper");
  const all_btn_cirlce = gsap.utils.toArray(".btn-item");

  all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, all_btn_cirlce[i], 80);
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.5, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(all_btn_cirlce[i], 0.5, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Button Hover Animation
  var btn_hover_all = document.querySelectorAll(".btn-hover-bgchange");

  if (btn_hover_all) {
    for (const ele of btn_hover_all) {
      var newSpan = document.createElement("span");
      ele.appendChild(newSpan);
    }

    $(".btn-hover-bgchange").on("mouseenter", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find("span").css({
        top: y,
        left: x,
      });
    });

    $(".btn-hover-bgchange").on("mouseout", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find("span").css({
        top: y,
        left: x,
      });
    });
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Yoga Trainer class shedule
  var schedule_fixed = document.querySelector(".schedule__fixed");
  if (schedule_fixed && device_width > 1200) {
    gsap.to(".schedule__fixed", {
      scrollTrigger: {
        trigger: ".schedule__area-9",
        pin: ".schedule__fixed",
        start: "top top",
        end: "bottom bottom",
      },
    });
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Yoga Trainer Hero Image Animation
  // imageMovingAnimation(".yogaTrainer__hero", ".yogaTrainer__hero-center img");

  // Social Influencer Hero Image Aniamtion
  // imageMovingAnimation(".sfluence-hero__mid", ".sfluence-hero__mid .img");

  // function imageMovingAnimation(wrapper, image_list) {
  //   let container = document.querySelector(wrapper)
  //   try {
  //     if (container) {
  //       container.addEventListener("mousemove", (e) => {

  //         var x = e.clientX
  //         var y = e.clientY
  //         let viewportWidth = window.innerWidth;
  //         let viewportHeight = window.innerHeight;
  //         let center = viewportWidth / 2
  //         let centerHeight = innerHeight / 2

  //         if (x > center) {
  //           gsap.to(image_list, {
  //             x: 60,
  //             duration: 5,
  //             ease: "power4.out"
  //           })
  //         }
  //         else {
  //           gsap.to(image_list, {
  //             x: -60,
  //             duration: 5,
  //             ease: "power4.out"
  //           })
  //         }
  //         if (y > centerHeight) {
  //           gsap.to(image_list, {
  //             y: 30,
  //             duration: 5,
  //             ease: "power4.out"
  //           })
  //         }
  //         else {
  //           gsap.to(image_list, {
  //             y: -90,
  //             duration: 5,
  //             ease: "power4.out"
  //           })
  //         }
  //       });
  //     }
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Image Hover
  const dancer_hover_text = document.querySelectorAll(".dancer_hover_text");

  if (dancer_hover_text) {
    function hoverImgFunc(event, dancer_hover_text) {
      const contentBox = dancer_hover_text.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      dancer_hover_text.children[0].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    dancer_hover_text.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(hoverImgFunc(event, item), 1000);
      });
    });
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Cursor Default
  // setTimeout(cursorDefaultHide, 1000);

  function cursorDefaultHide() {
    var cursor_default_hide = document.querySelector(".wc-cursor");
    cursor_default_hide.style.display = "none";
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Image Reveal Animation
  let img_anim_reveal = document.querySelectorAll(".img_anim_reveal");

  img_anim_reveal.forEach((img_reveal) => {
    let image = img_reveal.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: img_reveal,
        start: "top 50%",
      },
    });

    tl.set(img_reveal, { autoAlpha: 1 });
    tl.from(img_reveal, 1.5, {
      xPercent: -100,
      ease: Power2.out,
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out,
    });
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Product Designer Sidebar Menu
  let sidebar_links = gsap.utils.toArray(".sidebar-menu li a");
  sidebar_links.forEach((a) => {
    let element = document.querySelector(a.getAttribute("href")),
      linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top",
      });
    ScrollTrigger.create({
      trigger: element,
      start: "top center",
      end: "bottom center",
      onToggle: (self) => self.isActive && setActive(a),
    });
    a.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, {
        duration: 0.1,
        scrollTo: linkST.start,
        overwrite: "auto",
      });
    });
  });

  function setActive(link) {
    sidebar_links.forEach((el) => el.classList.remove("active"));
    link.classList.add("active");
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Film Team Members Slider
  var film_team_slider_option = document.querySelector(".film_team_member");

  if (film_team_slider_option) {
    var film_autoplay_val =
      film_team_slider_option.getAttribute("data-autoplay");
    var film_itemperviwe_val =
      film_team_slider_option.getAttribute("data-itemperviwe");

    if (film_autoplay_val == "true") {
      var film_team_member = new Swiper(".film_team_member", {
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 1800,
        },
        breakpoints: {
          1800: {
            slidesPerView: film_itemperviwe_val,
            spaceBetween: 90,
          },
          1300: {
            slidesPerView: film_itemperviwe_val - 1,
            spaceBetween: 70,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        },
      });
    } else {
      var film_team_member = new Swiper(".film_team_member", {
        loop: true,
        speed: 2000,
        autoplay: false,
        breakpoints: {
          1800: {
            slidesPerView: film_itemperviwe_val,
            spaceBetween: 90,
          },
          1300: {
            slidesPerView: film_itemperviwe_val - 1,
            spaceBetween: 70,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        },
      });
    }
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Most View Slider
  var creator_mostview_slider = new Swiper(".creator-mostview__slider", {
    loop: true,
    freemode: true,
    speed: 1000,
    spaceBetween: 30,
    navigation: {
      nextEl: ".most-btn-next",
      prevEl: ".most-btn-prev",
    },
    breakpoints: {
      1300: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      1023: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  //
  const phPortfolio = new Swiper(".photographer__portfoliothumb-active", {
    loop: true,
    speed: 1500,
    spaceBetween: 15,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  //. Hover Wobble
  var wobbleElements = document.querySelectorAll(".hover-wobble");

  wobbleElements.forEach(function (el) {
    el.addEventListener("mouseover", function () {
      if (
        !el.classList.contains("animating") &&
        !el.classList.contains("mouseover")
      ) {
        el.classList.add("animating", "mouseover");

        var letters = el.innerText.split("");

        setTimeout(function () {
          el.classList.remove("animating");
        }, (letters.length + 1) * 50);

        var animationName = el.dataset.animation;
        if (!animationName) {
          animationName = "jump";
        }

        el.innerText = "";

        letters.forEach(function (letter) {
          if (letter == " ") {
            letter = "&nbsp;";
          }
          el.innerHTML += '<span class="letter">' + letter + "</span>";
        });

        var letterElements = el.querySelectorAll(".letter");
        letterElements.forEach(function (letter, i) {
          setTimeout(function () {
            letter.classList.add(animationName);
          }, 50 * i);
        });
      }
    });

    el.addEventListener("mouseout", function () {
      el.classList.remove("mouseover");
    });
  });
  /////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////
  // Offcanvas Menu Off/On
  var open_offcanvas = document.getElementById("open_offcanvas");
  var close_offcanvas = document.getElementById("close_offcanvas");

  if (open_offcanvas && close_offcanvas) {
    open_offcanvas.addEventListener("click", function () {
      document.querySelector(".offcanvas-area").style.opacity = "1";
      document.querySelector(".offcanvas-area").style.visibility = "visible";
    });

    close_offcanvas.addEventListener("click", function () {
      document.querySelector(".offcanvas-area").style.opacity = "0";
      document.querySelector(".offcanvas-area").style.visibility = "hidden";
    });
  }

  $("#offcanvasOne a").click(function(){
    $('.offcanvas').offcanvas('hide');
});
  /////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////
  // mousemovable for recent exhibution
  const exhibutionItem = document.querySelectorAll(".artist__exhibition-item");
  const exhibutionImage = document.querySelectorAll(
    ".artist__exhibition-thumb"
  );

  function cursorMove2(event, eventImg) {
    const contentBox = eventImg.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    exhibutionImage.forEach((img) => {
      img.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  }

  exhibutionItem.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(cursorMove2(event, item), 1000);
    });
  });
  /////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////
  //
  var cursor_border_hide = document.querySelector(".cursor_border_hide");
  if (cursor_border_hide) {
    cursor_border_hide.addEventListener("mousemove", () => {
      var cursor_text = document.querySelector(".wc-cursor.text");
      var cursor_1 = document.querySelector(".cursor1");
      if (cursor_text) {
        cursor_1.style.opacity = "0";
      } else {
        cursor_1.style.opacity = "1";
      }
    });
  }
  /////////////////////////////////////////////////////////

  // Blog Share Pin
  var blog_pin_wrapper = document.querySelector(".blog_pin_wrapper");

  if (blog_pin_wrapper && device_width > 767) {
    gsap.to(".blog_share_pin", {
      scrollTrigger: {
        trigger: ".blog_pin_wrapper",
        pin: ".blog_share_pin",
        start: "top top",
        end: "bottom bottom",
      },
      marginTop: 20,
    });
  }

  // Switcher JS
  $("#switcher_open").on("click", function () {
    $(this).hide();
    $("#switcher_close").show();
    $(".switcher__icon").css("right", "280px");
    $(".switcher__items").css({
      right: "0",
    });
  });

  $("#switcher_close").on("click", function () {
    $(this).hide();
    $("#switcher_open").show();
    $(".switcher__icon").css("right", "0");
    $(".switcher__items").css({
      right: "-280px",
    });
  });

  // Mode JS
  $(".mode-type button").on("click", function (e) {
    $(this).addClass("active").siblings().removeClass("active");

    var mode_val = $(".mode-type button.active").attr("data-mode");
    if (mode_val == "light") {
      $("body").addClass("light");
    } else {
      $("body").removeClass("light");
    }
  });



  // Language JS
  $(".lang_dir button").on("click", function (e) {
    $(this).addClass("active").siblings().removeClass("active");

    var dir_val = $(".lang_dir button.active").attr("data-mode");
    if (dir_val == "rtl") {
      $("body").addClass("dir-rtl");
    } else {
      $("body").removeClass("dir-rtl");
    }
  });

  // Cursor JS
  $("#cursor_style").on("change", function () {
    var cursor_val = $(this).val();

    if (cursor_val == "1") {
      $(".cursor1").hide();
      $(".cursor2").hide();
    } else {
      $(".cursor1").show();
      $(".cursor2").show();
    }
  });

  $("a[href='#top']").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // electrician Testimonial Slider
  var testimonial_slider_electrician = new Swiper(".elc-test__slider", {
    loop: true,
    speed: 2500,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 80,
      },
    },
  });

  // dentist testimonial slider
  var dtTest = new Swiper(".dentist-testimonial-thumbs", {
    loop: false,
    spaceBetween: 15,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var dtTest2 = new Swiper(".dentist-testimonial-content", {
    loop: false,
    spaceBetween: 30,
    navigation: {
      nextEl: ".dtTest-button-next",
      prevEl: ".dtTest-button-prev",
    },
    thumbs: {
      swiper: dtTest,
    },
  });

  // before-after slider
  $(".beforeAfter").beforeAfter({
    // is draggable/swipeable
    movable: true,

    // click image to move the slider
    clickMove: true,

    // always show the slider
    alwaysShow: true,

    // intial position of the slider
    position: 50,

    // opacity between 0 and 1
    opacity: 0.4,
    activeOpacity: 1,
    hoverOpacity: 0.8,

    // slider colors
    separatorColor: "#ffffff",
    bulletColor: "#ffffff",
    arrowColor: "#333333",
  });

  // dentist Testimonial Slider
  var testimonial_slider_dentist = new Swiper(".dentist-testimonial__slider", {
    loop: true,
    speed: 2500,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          ' <span class="mid-line"></span> ' +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
    breakpoints: {
      1200: {
        spaceBetween: 80,
      },
    },
  });

  // // Disabled right click
  // document.addEventListener('contextmenu', (e) => e.preventDefault());

  // function ctrlShiftKey(e, keyCode) {
  //   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  // }

  // document.onkeydown = (e) => {
  //   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  //   if (
  //     event.keyCode === 123 ||
  //     ctrlShiftKey(e, 'I') ||
  //     ctrlShiftKey(e, 'J') ||
  //     ctrlShiftKey(e, 'C') ||
  //     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  //   )
  //     return false;
  // };
})(jQuery);
