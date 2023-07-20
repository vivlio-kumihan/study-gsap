gsap.registerPlugin(ScrollTrigger);

// div.container要素をインスタンスにする。
const pageContainer = document.querySelector(".container");

// 次にLocomotiveScrollの初期化をする。
// SmoothScrollの機能を使用したいので『smooth: true』を設定。
// 『el』には『SmoothScroll』を作動させたい領域を指定する。
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

// LocomotiveScroll内でscrollイベントが走る度に、ScrollTriggerも更新させる。
scroller.on("scroll", ScrollTrigger.update);

// 『SmoothScroll』と『LocomotiveScroll』で内部要素の高さを同調する設定
// 『SmoothScroll』を作動させると『LocomotiveScroll』がスクロールを制御するようになる。
// 『el』で指定した部分で色々な高さの調整が行われるので、
// 『ScrollTrigger』でもその値を使用するようにする。
// 『LocomotiveScroll』を初期化した際のDOM要素と同じものを指定する。
ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

//////////////////////////////////
window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  // そしてwindowが更新される度に『ScrollTrigger』『LocomotiveScroll』の
  // 両方を更新するようにする。
  // 全ての更新が終わり『LocomotiveScroll』で高さの調整が終わった後、
  // 最後に『ScrollTrigger』を『refresh』する。
  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
  ScrollTrigger.refresh();
});