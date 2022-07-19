const navbar = document.querySelector("ul");
const menu = document.querySelector("#menu");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
});

// featured

const indicator = document.getElementsByClassName("indicator");
const main = document.querySelector(".content");
const video = document.querySelector("video");

for (var i = 0; i < indicator.length; i++) {
  indicator[i].onclick = function (e) {
    const indicator_image = document.getElementsByClassName("active");
    indicator_image[0].className = indicator_image[0].className.replace(
      "active",
      ""
    );
    this.className += " active";

    if (indicator_image) {
      main.src = e.target.src;
      main.style.display = "block";
      video.style.display = "none";
      video.src = "";
    }
    if (e.target == indicator[4]) {
      main.style.display = "none";
      video.style.display = "block";
      video.src = "video.mp4";
    }
  };
}
