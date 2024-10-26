import $ from "jquery";

// snowfall
//link: https://monsterspost.com/20-codepens-to-give-christmas-mood-to-your-website
$(document).ready(function () {
  $(function () {
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var limit_flake = 50;
    setInterval(function () {
      let dimension = randomInt(3, 8) + "px";
      var flake =
        "<div class='drop' style='right:" +
        randomInt(10, window.innerWidth - 20) +
        "px;width:" +
        dimension +
        ";height:" +
        dimension +
        "'></div>";
      $("body").append(flake);
      var list_flake = $(".drop");
      if (list_flake.length > limit_flake)
        list_flake[list_flake.length - 1].remove();
    }, 200);
  });
});
