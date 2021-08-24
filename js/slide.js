$(document).ready(() => {
  $(".photo").slick({
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
  });

  $(".slide").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
