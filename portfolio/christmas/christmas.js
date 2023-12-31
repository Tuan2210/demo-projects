let pageHeight = document.documentElement.scrollHeight;
let sky = document.querySelector("#sky"),
  stars1 = document.querySelector("#stars1"),
  stars2 = document.querySelector("#stars2"),
  moon = document.querySelector("#moon"),
  santa1 = document.querySelector("#santa1"),
  bird1 = document.querySelector("#bird1"),
  bird2 = document.querySelector("#bird2"),
  bird3 = document.querySelector("#bird3"),
  sea = document.querySelector("#sea");

let aquaman = document.querySelector("#aquaman");

// -- evt scroll --
window.onscroll = () => {
  let scrolling = true,
    valueY = window.scrollY;
  const scrollAble = pageHeight - window.innerHeight;

  if (!scrolling) return;

  if (valueY < scrollAble) {
    scrolling = true;

    stars1.style.left = -(-50 + valueY * 0.1) + "%";
    stars2.style.left = -(50 + valueY * 0.1) + "%";
    moon.style.top = valueY + 2 + "px";

    santa1.style.top = 55 - valueY * 0.2 + "%";
    santa1.style.left = -20 + valueY * 0.3 + "%";

    bird1.style.top = 45 - valueY * 0.3 + "%";
    bird1.style.left = 20 - valueY * 0.2 + "%";

    bird2.style.top = 45 - valueY * 0.1 + "%";
    bird2.style.left = 65 - valueY * -0.1 + "%";
    bird3.style.top = 50 - valueY * 0.1 + "%";
    bird3.style.left = 62 - valueY * -0.1 + "%";

    aquaman.style.top = 60 - valueY * 0.1 + "%";
    aquaman.style.left = -70 + valueY * 0.32 + "%";
  } else scrolling = false;
};

// -- evt falling snow --
//link: https://monsterspost.com/20-codepens-to-give-christmas-mood-to-your-website/
// include css & js (chirstmas-style.css & christmas.js)
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
