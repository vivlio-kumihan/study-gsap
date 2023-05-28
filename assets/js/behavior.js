const section = document.querySelectorAll("section")

section.forEach(elem => {
  gsap.from(elem, .5, {
    opacity: 0,
    y: 20,
    scale: 0.7,
    ease: "back",
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      end: "50% 70%",
      markers: true,
      scrub: .5,
      // 一度アニメーションしたら終わり
      // once: true
    }
  })
})

