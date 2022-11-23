const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".services");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  let id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("tab-active");
      e.target.classList.add("tab-active");
    });

    articles.forEach(function (article) {
      article.classList.remove("show");
    });
    let element = document.getElementById(id);
    element.classList.add("show");
  }
});

const display = localStorage.getItem("nextIdentity");
console.log(display);
const _history = document.getElementById("history");
const _vision = document.getElementById("vision");
const _goals = document.getElementById("goals");

localStorage.clear();

if (display === "first-btn") {
  window.addEventListener("load", () => {
    _history.classList.add("show");
    _vision.classList.remove("show");
    _goals.classList.remove("show");

    document.querySelector('[data-id="history"]').classList.add("tab-active");
    document.querySelector('[data-id="vision"]').classList.remove("tab-active");
    document.querySelector('[data-id="goals"]').classList.remove("tab-active");
  });
}
if (display === "second-btn") {
  window.addEventListener("load", () => {
    _history.classList.remove("show");
    _vision.classList.add("show");
    _goals.classList.remove("show");

    document.querySelector('[data-id="vision"]').classList.add("tab-active");
    document.querySelector('[data-id="goals"]').classList.remove("tab-active");
    document
      .querySelector('[data-id="history"]')
      .classList.remove("tab-active");
  });
}
if (display === "third-btn") {
  _history.classList.remove("show");
  _vision.classList.remove("show");
  _goals.classList.add("show");

  document.querySelector('[data-id="history"]').classList.remove("tab-active");
  document.querySelector('[data-id="vision"]').classList.remove("tab-active");
  document.querySelector('[data-id="goals"]').classList.add("tab-active");
}

const servicesBtns = document.querySelectorAll(".services-btn");

servicesBtns.forEach((servicesBtn) => {
  servicesBtn.addEventListener("click", (e) => {
    const id = e.currentTarget.id;

    if (id === "first-btn") {
      window.location.href = "./services.html";
      localStorage.setItem("nextIdentity", id);
    } else if (id === "second-btn") {
      window.location.href = "./services.html";
      localStorage.setItem("nextIdentity", id);
    } else if (id === "third-btn") {
      window.location.href = "./services.html";
      localStorage.setItem("nextIdentity", id);
    }
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 170;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

