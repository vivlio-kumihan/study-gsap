const header = document.getElementById("header")
const lines = header.children
const orgPosition = { x: "0", y: "0" }

header.addEventListener("mouseenter", function () {
  gsap.set(lines, {
    x: orgPosition.x,
    y: orgPosition.y
  })

  gsap.fromTo(lines, .7, {
    x: orgPosition.x,
    y: orgPosition.y
  }, {
    width: "100%",
    ease: "power2.inout"
  })
})

header.addEventListener("mouseleave", function() {
  gsap.to(lines, .7, {
    left: "100%",
    width: "0",
    ease: "power2.inout",
    onComplete: () => {
      gsap.to(lines, { left: "0" })
    }
  })
})