const menu = document.getElementById('menu'),
      menuList = document.getElementById('menuList'),
      menuListIcons = document.querySelectorAll('.menuList li')
            // menuアイコンのスクリーン上の座標情報を得る。
      const menuClientRect = menu.getBoundingClientRect(),
            // 正確性を期すためにしていると思うが、
            // window.scrollX、window.scrollY、menu.offsetWidthの必要性に疑いを持つ目が大切。
            
            // 今見ているスクリーンの原点に、
            // 『left』メソッドを送って座標軸xを得た値が
            // スクロールした場合に変化するのでその分を見越して座標軸xに加える。
            // leftPosition1 = window.pageXOffset + menuClientRect.left,
            leftPosition = window.scrollX + menuClientRect.left,
            // その情報の中で『top』メソッドを送って座標軸yを得る。
            // topPosition1 = window.pageYOffset + menuClientRect.top,
            topPosition = window.scrollY + menuClientRect.top,
            // centerPositionX = leftPosition + menuClientRect.width / 2,
            centerPositionX = leftPosition + menu.offsetWidth / 2,
            // centerPositionY = topPosition + menuClientRect.height / 2
            centerPositionY = topPosition + menu.offsetHeight / 2


// console.log(leftPosition)
// // console.log(topPosition1)
// console.log(leftPosition)
// // console.log(topPosition1)
// console.log(menuClientRect.left)
// console.log(window.scrollY)
// console.log(menuClientRect)
console.log(centerPositionX)
console.log(centerPositionY) 


// closeが最初は大きいのを回避するため。
gsap.set('#close', {
  scale: .8
})      

// 円に物を置いていく座標の出し方。
// 90度をラジアンに変換する
//       ↓
// 90 * 円周率 / 100
//       ↓
// 90 * Math.PI / 100

// x2 = x1（原点の座標） + r（半径） * cosθ
// y2 = y1（原点の座標） + r（半径） * sinθ

// x2 = x1 + r * Math.cosθ(90 * Math.PI / 180)
// y2 = y1 + r * Math.sinθ(90 * Math.PI / 180) 
const r = menu.offsetWidth
menuListIcons.forEach((li, idx, arr) => {
  const angle = 360 / arr.length * idx,
        postionX = centerPositionX + r * Math.cos(angle * Math.PI / 180),
        postionY = centerPositionY + r * Math.sin(angle * Math.PI / 180)
  // console.log(idx)
  // console.log(li)
  // console.log(postionX)
  // console.log(postionY)
  // console.log(menu.offsetWidth)
  // console.log(menu.offsetHeight)
  li.style.left = `${ postionX }px`
  li.style.top = `${ postionY }px`
})

menu.addEventListener('click', function() {
  const isMenuAcrive = this.classList.contains('active')
  gsap.to(this, 1, {
    onStart: () => {
      // a要素になっているのでクリックした一瞬だけしか
      // console.logが見えない。対処は、HTMLだったらhref属性を消す。
      // console.log('onstart')
      gsap.to('#open', .9, {
        opacity: isMenuAcrive ? 1 : 0,
        scale: isMenuAcrive ? 1 : .8,
        // 波形確認。少し戻ってスーッと変化するeasing。
        // つまり、少し大きさを戻す動作を追加する。
        ease: 'back.in(5)'
      })
      gsap.to('#close', .9, {
        opacity: isMenuAcrive ? 0 : 1,
        scale: isMenuAcrive ? .8 : 1,
        ease: 'back.in(5)'
      })
      this.classList.toggle('active')
    }
  })
})