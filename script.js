var Cursor = document.querySelector("#cursor");
var CursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  Cursor.style.left = dets.x + "px";
  Cursor.style.top = dets.y + "px";

  CursorBlur.style.left = dets.x - 250 + "px";
  CursorBlur.style.top = dets.y - 250 + "px";
});

var hoverElements = document.querySelectorAll(".hover-element");

hoverElements.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    CursorBlur.classList.add("reduce-blur");
  });

  element.addEventListener("mouseleave", function () {
    CursorBlur.classList.remove("reduce-blur");
  });
});

var MenuCursor = document.querySelectorAll(".nav-menu-list a");
MenuCursor.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    Cursor.style.scale = 3;
    Cursor.style.backgroundColor = "transparent";
    Cursor.style.border = "1px solid #fff";
  });
  elem.addEventListener("mouseleave", function () {
    Cursor.style.scale = 1;
    Cursor.style.border = "0px solid #95C11E";
    Cursor.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  padding: "1rem 5.5%",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from(".about-us-wrapper img, .about-us-txt", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  scrollTrigger: {
    trigger: ".card-inner",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
