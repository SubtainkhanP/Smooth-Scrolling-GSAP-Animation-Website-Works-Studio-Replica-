function loading_animation(params) {
  var tl = gsap.timeline();
  tl.to("#loader #yellow1", {
    top: "-100%",
    ease: "expo.out",
    delay: 1,
    duration: 0.5,
  });
  tl.from(
    "#loader #yellow2",
    {
      top: "100%",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      color: "black",
      delay: 0.1,
    },
    "anim"
  );
  tl.to("#loader", {
    display: "none",
  });
}
loading_animation();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// smooth scrolling setup
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"), // tumhara scroll container
  smooth: true,
});

// ScrollTrigger ko update karna jab locomotive scroll kare
locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger ko batana ke scrolling locomotive handle kar raha hai
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

// refresh karna zaroori hai after setup
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

function pictureAnimation(params) {
  var elem = document.querySelectorAll(".elem");
  var page2 = document.querySelector("#page2");

  elem.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      var bgImg = elem.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgImg})`;
    });
    elem.addEventListener("mouseleave", () => {
      page2.style.backgroundImage = `url()`;
    });
  });
}
pictureAnimation();
function scrollToTop(params) {
  document.querySelector(".scroll-top h3").addEventListener("click", () => {
    scroll.scrollTo(0);
  });

  document.querySelector(".scroll-top i").addEventListener("click", () => {
    scroll.scrollTo(0);
  });
}
scrollToTop();

// tumhari animations
gsap.to(".p", {
  x: 220,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "bottom 40%",
    scrub: true,
  },
});
var s=gsap.to(".s", {
  x: 150,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "bottom 40%",
    scrub: true,
  },
});
gsap.to(".a", {
  x: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "bottom 40%",
    scrub: true,
  },
});
gsap.to("#nav-svg",{
  // opacity:0,
  display:"inline-block",
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"bottom 30%",
    scrub:true
  }
})
let isVisible = false;

document.querySelector("#nav-svg").addEventListener("click", () => {
  if (isVisible) {
    gsap.to([".a",".p",".s"], { x: 50, opacity: 0,color:"black", duration: 0.5 });
  } else {
    gsap.to([".a",".p",".s"], { x: 0, opacity: 1,color:"white", duration: 0.5, });
  }
  isVisible = !isVisible; // toggle state change
});





