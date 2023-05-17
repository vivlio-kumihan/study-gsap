const boxOnes = Array.from(document.querySelectorAll(".box-one"))
const orgPosition = { x: "0", y: "0" }

boxOnes.forEach(box => {
  box.addEventListener("mouseenter", function () {
    gsap.set(boxOnes, {
      x: orgPosition.x,
      y: orgPosition.y
    })
    
    gsap.fromTo(boxOnes, 1, {
      x: orgPosition.x,
      y: orgPosition.y,
      // アニメーションの支点　デフォルトは"center cetner"
      // transformOrigin: "bottom right"
    }, {
      scaleX: 0,
    })
  })
  // これで効くということはインスタンスを覚えているということか？
  box.addEventListener("mouseleave", function () {
    gsap.to(boxOnes, 1, {
      scaleX: 1,
    })
  })
})
