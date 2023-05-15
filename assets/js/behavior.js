const line = document.getElementById("line-two")

const orgPostion = { x: "0", y: "0" }

gsap.set(line, {
  x: orgPostion.x,
  y: orgPostion.y
})

gsap.fromTo(line, 2, {
  x: orgPostion.x,
  y: orgPostion.y,
}, {
  width: "100%",
  transformOrigin: "top left",
  // 開始時と終了時の速度が遅くなるため、
  // 滑らかなアニメーションを実現することができます。
  // inOutの部分は、アニメーションの始まりと終わりの速度が
  // 遅くなるように指定しています。
  ease: "power2.inout"
})