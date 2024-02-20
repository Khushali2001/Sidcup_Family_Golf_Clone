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
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
