$(document).ready(() => {
  $(".jsOn").on("click", () => {
    $(".none").toggleClass("on");
  });

  $(".none").on("click", (e) => {
    let text = $(".none").text();
    if (text === "KOR") {
      $(e.currentTarget).text("ENG");
      $(".kor").text("KOR");
    } else {
      $(e.currentTarget).text("KOR");
      $(".kor").text("ENG");
    }
  });

  $(window).scroll((e) => {
    let scroll = $(e.currentTarget).scrollTop();
    if (scroll > 10) {
      $("nav").addClass("scroll");
      $(".color").css("color", "#2e2e2e");
      $(".language").css("color", "#2e2e2e");
    } else {
      $("nav").removeClass("scroll");
      $(".color_index").css("color", "#2e2e2e");
    }
  });

  $(".main_image").parallax({
    imageSrc: "./images/2p_main2.jpg",
    position: "100px",
  });
});
