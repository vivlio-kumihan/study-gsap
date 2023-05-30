// 指摘されて入れてみた。
gsap.registerPlugin(ScrollTrigger)

const titleElement = document.querySelector("h1"),
      titleTexts = titleElement.textContent.split("")

titleElement.textContent = ""
let outputTexts = ""

// このままでもスペースは出力される。
titleTexts.forEach(text => outputTexts += `<span>${text}</span>`)
// 反対にこちらではスペースは出力されない。
// titleTexts.forEach(text => outputTexts += text === " " ? " " : `<span>${text}</span>`)
titleElement.innerHTML = outputTexts
// 確認
// console.log(document.querySelectorAll("h1 span"))

const target = "h1 span"
document.querySelectorAll(target).forEach(el => {
  gsap.set(el, {
    x: 0,
    opacity: 0,
    rotation: 90
  })
})

const tl = gsap.timeline()

// opacity以外何も効かない。
// Elementsでは結果は反映されている。viewが効いてない。
tl.to(target, 10, {
  x: 100,
  opacity: 1,
  rotation: 0
})
.to(target, 1.5, {
  opacity: 0,
  scale: 3,
  rotation: 180
})


// texts.forEach(char => {
//   console.log(char)
//   if (char === /[a-zA-Z0-9]/) {
//     console.log(char)
//   } else if (char === /[\n\r]/) {
//     console.log("<br>")
//   }
// })


// const section = document.querySelectorAll("section")

// section.forEach(elem => {
//   gsap.from(elem, .5, {
//     opacity: 0,
//     y: 20,
//     scale: 0.7,
//     ease: "back",
//     scrollTrigger: {
//       trigger: elem,
//       start: "top 80%",
//       end: "50% 70%",
//       markers: true,
//       scrub: .5,
//       // 一度アニメーションしたら終わり
//       // once: true
//     }
//   })
// })

