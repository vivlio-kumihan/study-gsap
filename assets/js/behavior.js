// #04
// 上下左右からレイヤーが覆い被さるようにページを展開していく
gsap.defaults({
  ease: 'none',
  duration: 2,
})

const tl = gsap.timeline()
tl.from('.red', { xPercent: 100 })
tl.from('.orange', { xPercent: -100 })
tl.from('.purple', { yPercent: -100 })

ScrollTrigger.create({
  animation: tl,
  trigger: '.container',
  start: 'top top',
  end: `+=${gsap.utils.toArray('.panel').length}000`,
  scrub: true,
  pin: true,
  anticipatePin: 1
})

// // #01
// // 前回のコミットでやっていることを復習
// // トリガーになる要素に動きの初動の位置を与えるためには、
// // スクリーンで見渡せる範囲に限定された親要素であることが必須。
// // 見渡すことができない範囲にある終了のトリガーはendTriggerで指定できる。
// // 頭が悪いのでうまく説明できない。とりあえずサンプルの動きを見てイメージできるようにする。
// ScrollTrigger.create({
//   trigger: '.pin-item.red',
//   start: 'top 45%',
//   endTrigger: '#container',
//   end: 'bottom 60%',
//   pin: true,
//   // markers: true
// })

// // #02
// // 普通のpin　その1
// // 親要素の範囲内で動作をする。
// ScrollTrigger.create({
//   trigger: '#blue',
//   start: 'top top',
//   // 親要素の上辺から60%の地点でpinする。
//   end: 'bottom 60%',
//   pin: '.pin-item.blue',
//   // markers: true
// })

// // 普通のpin　その2
// ScrollTrigger.create({
//   trigger: '#yellow',
//   start: 'top 60%',
//   // 親要素の上辺から300pxの地点でpinする。
//   // なお、内容要素をposition: absoluteで作成している場合に
//   // 上半分がオーバーする。サンプルを参照してイメージできるように。
//   end: '+=300',
//   pin: '.pin-item.yellow',
//   // markers: true
// })

// // #03
// // 下のレイヤーほど値を高くしていく。
// gsap.set(".panel", {
//   // 複数の要素を包含する親要素に対して、
//   // zIndex属性になんでもいいので任意の変数『idx』『value』『array』
//   // で呼び出したら該当する値が返る！！！
//   // zIndex: (idx, value, array) => { 
//   //   console.log(`index${ idx }番目`, value, array) 
//   // }
//   // この特性を活かして、z-indexに然るべき値を代入していく。

//   // なんで{}でくくるとダメなのか？
//   // 『return』をつけて解決する。
//   zIndex: (idx, value, array) => {
//     return array.length - idx
//   }
//   // zIndex: (idx, value, array) => array.length - idx
// })

// gsap.to(".panel:not(:last-child)", {
//   yPercent: -100,
//   ease: "none",
//   // レイヤーを上へ繰っていく感覚でしっくりする『値』を『stagger』に設定しているとしか説明できない。
//   // 『stagger』って配列に格納されている値を順に出力するタイミングを調整するための属性だとしか見てなかった。
//   stagger: .5,
//   scrollTrigger: {
//     trigger: "#container",
//     start: "top top",
//     // top pageは表示されている。
//     // その後に100vhあるセクション何枚分がendの位置。
//     // "(.panel - 1) × 100%"を自動で入れたい。
//     end: `+=${gsap.utils.toArray('.panel').length - 1}00%`,
//     scrub: true,
//     pin: true,
//     markers: true
//   }
// })
