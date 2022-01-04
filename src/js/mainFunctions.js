$(document).ready(function () {
  $(".loop").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 60,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },
    },
  });
});
