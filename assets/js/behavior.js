const boxs = document.querySelectorAll(".box")
const orgPosition = { x: 0, y: 0 }

boxs.forEach((box, idx) => {
  gsap.set(box[idx], {
    x: orgPosition.x,
    y: orgPosition.y
  })

  switch (box.classList[1]) {
    case "skew-x-plus":
      gsap.fromTo(box, 2, {
        x: orgPosition.x,
        y: orgPosition.y
      }, {
        skewX: "180deg",
        transformOrigin: "0 0"
      })
      break;
    case "skew-x-minus":
      gsap.fromTo(box, 2, {
        x: orgPosition.x,
        y: orgPosition.y
      }, {
        skewX: "-180deg",
        transformOrigin: "100% 100%"
      })
      break;
    case "skew-y-plus":
      gsap.fromTo(box, 2, {
        x: orgPosition.x,
        y: orgPosition.y
      }, {
        skewY: "180deg",
        transformOrigin: "100% 100%"
      })
      break;
    case "skew-y-minus":
      gsap.fromTo(box, 2, {
        x: orgPosition.x,
        y: orgPosition.y
      }, {
        skewY: "-180deg",
        transformOrigin: "100% 100%"
      })
      break;
  }
})