let days = document.querySelector("#days"),
  hours = document.querySelector("#hours"),
  minutes = document.querySelector("#minutes"),
  seconds = document.querySelector("#seconds");

let dd = document.querySelector("#dd"),
  hh = document.querySelector("#hh"),
  mm = document.querySelector("#mm"),
  ss = document.querySelector("#ss");

let endDate = "01/01/2024 00:00:00";

let x = setInterval(function () {
  let now = new Date(endDate).getTime(),
    countDown = new Date().getTime(),
    distance = now - countDown;

  let d = Math.floor(distance / (1000 * 60 * 60 * 24)),
    h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    s = Math.floor((distance % (1000 * 60)) / 1000);

  //display result
  days.innerHTML = d + "<br><span>Days</span>";
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";

  //animate stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown").style.display = "none";
    document.querySelector(".newYear").style.display = "block";
  }
});
