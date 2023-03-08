(function () {
  "use strict";

  function scrollToTop() {
    window.pageYOffset > 0 &&
      (window.scrollBy(0, -80), requestAnimationFrame(scrollToTop));
  }

  var backToTopBtn = document.querySelector(".back_to_top");

  window.addEventListener("scroll", function () {
    var scrolledAmount = window.pageYOffset,
      clientHeight = document.documentElement.clientHeight;

    backToTopBtn.classList.toggle(
      "back_to_top-show",
      scrolledAmount > clientHeight
    );
  });

  backToTopBtn.addEventListener("click", scrollToTop);
})();


