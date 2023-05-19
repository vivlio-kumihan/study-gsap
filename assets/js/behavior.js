const cover = document.querySelector(".cover")
const coverOrgPosition = { x: 0, y: 0}

gsap.set(cover, {
  x: coverOrgPosition.x,
  y: coverOrgPosition.y
})

gsap.fromTo(cover, 5, {
  x: coverOrgPosition.x,
  y: coverOrgPosition.y
}, {
  // visiblity: hidden, opacity: 0 のショートカット
  autoAlpha: 0,
  delay: 3
})






// const boxs = document.querySelectorAll(".box")
// const orgPosition = { x: 0, y: 0 }

// boxs.forEach((box, idx) => {
//   gsap.set(box[idx], {
//     x: orgPosition.x,
//     y: orgPosition.y
//   })

//   switch (box.classList[1]) {
//     case "skew-x-plus":
//       gsap.fromTo(box, 2, {
//         x: orgPosition.x,
//         y: orgPosition.y
//       }, {
//         skewX: "40deg",
//         transformOrigin: "0 0"
//       })
//       break;
//     case "skew-x-minus":
//       gsap.fromTo(box, 2, {
//         x: orgPosition.x,
//         y: orgPosition.y
//       }, {
//         skewX: "-40deg",
//         transformOrigin: "100% 100%"
//       })
//       break;
//     case "skew-y-plus":
//       gsap.fromTo(box, 2, {
//         x: orgPosition.x,
//         y: orgPosition.y
//       }, {
//         skewY: "40deg",
//         transformOrigin: "100% 100%"
//       })
//       break;
//     case "skew-y-minus":
//       gsap.fromTo(box, 2, {
//         x: orgPosition.x,
//         y: orgPosition.y
//       }, {
//         skewY: "-40deg",
//         transformOrigin: "100% 100%"
//       })
//       break;
//   }
// })