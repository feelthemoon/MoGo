$(function () {
  /* fixed menu */
  const header = $("#header");
  let scrollPos = $(window).scrollTop();
  checkScroll(scrollPos);

  $(window).on("scroll resize", () => {
    scrollPos = $(window).scrollTop();
    checkScroll(scrollPos);
  });

  function checkScroll(scrollPos) {
    if (scrollPos > header.innerHeight() - 20) {
      header.addClass("fixed--opacity");
    } else {
      header.removeClass("fixed--opacity");
    }
    if (scrollPos > header.innerHeight() + 150) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  const nav = $("#navbar");
  const burger = $("#burger");
  burger.on("click", () => {
    nav.toggleClass("transform");
    nav.css("transition", "transform 1s ease");
  });

  /* Fix bug with resize */
  $(window).on("resize", () => {
    if ($(window).innerWidth() > 768) {
      nav.css("transition", "none");
    } else {
      nav.css("transition", "transform 1s ease");
    }
  });
});
