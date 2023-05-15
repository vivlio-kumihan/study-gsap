const line = document.getElementById("line-one")

const orgPostion = { x: "-45px", y: "-45px" }

gsap.set(line, {
  x: orgPostion.x,
  y: orgPostion.y
})

gsap.fromTo(line, 2, {
  x: orgPostion.x,
  y: orgPostion.y,
}, {
  x: "0",
  y: "0",
  rotation: "360deg",
  transformOrigin: "top left"
})