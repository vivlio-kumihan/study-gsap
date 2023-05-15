const header = document.getElementById("header")

// HTMLCollectionとして２つのspanを収集する。
const lines = header.children
const orgPosition = { x: "0", y: "0" }

header.addEventListener("mouseenter", function () {
  // なんと！　配列からそれぞれの要素へ自動で処理してくれる。
  gsap.set(lines, {
    x: orgPosition.x,
    y: orgPosition.y
  })

  gsap.fromTo(lines, .7, {
    x: orgPosition.x,
    y: orgPosition.y
  }, {
    width: "100%",
    transformOrigin: "top left",
    ease: "power2.inout"
  })
})

header.addEventListener("mouseleave", function () {
  gsap.to(lines, .7, {
    width: "0",
    ease: "power2.inout",
  })
})