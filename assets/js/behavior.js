// gsapの基本的なメソッド
// to, from, fromTo, set

// // from ////////////////////////////////////////
// // アニメーションの始まりを指定する。
// // gsap.to(対象とする要素, duration（存続期間/秒）, 動きを設定する関数)
// gsap.from(".box", 2, {
//   // どういうふうに終わるのかを設定する。
//   x: "-10rem",
//   y: "-10rem"
// })

// // to ////////////////////////////////////////
// // アニメーションの終わりを指定する。
// // gsap.to(対象とする要素, duration／存続期間（秒）, 動きを設定する関数)
// gsap.to(".box", 2, {
//         // どういうふうに終わるのかを設定する。
//         x: "10rem",
//         y: "10rem"
// })

// // fromTo ////////////////////////////////////////
// // アニメーションの始まりを指定する。
// // gsap.to(対象とする要素, duration（存続期間/秒）, 動きを設定する関数)
// gsap.fromTo(".box", 2, 
//   {
//     // from 始まり
//     x: "-10rem",
//     y: "10rem"
//   },
//   {
//     // to 終わり
//     x: "0rem",
//     y: "0rem"
//   }
// )

// fromTo、jsを読み込むまでの一瞬、最初の場所に戻ってから指定位置に位置どりする挙動がある。
// これを回避する方法は、
//    => ローリングアニメーションで誤魔化す。
//    => CSSで位置を指定する。
//      transform: translate(横軸、縦軸);
//    => set関数を使う。

// // set
// // アニメーションの始まりを指定する。
// // gsap.to(対象とする要素, 動きを設定する関数)
// // 最初の位置を変数に格納する。これはオブジェクト。
// const firstPosition = {
//   x: '-10rem',
//   y: '-10rem'
// }
// // オブジェクトのインスタンスの呼出。
// gsap.set(".box",  {
//     x: firstPosition.x,
//     y: firstPosition.y
//   }
// )
// // リロードしたら動かす。
// // gsap.fromTo(".box", 1, {
// //   x: firstPosition.x,
// //   y: firstPosition.y
// // },
// // {
// //   x: "10rem",
// //   y: "10rem"
// // })
// // 1000mm秒後（1秒後）に動かす。
// setTimeout(() => {
//   gsap.fromTo(".box", 1, {
//     x: firstPosition.x,
//     y: firstPosition.y
//   },
//   {
//     x: "10rem",
//     y: "10rem"
//   })
// }, 1000)

// // duration, deley
// // duration => アニメーションにかかる時間
// // durationの設定は、第二引数に設定するか、
// gsap.to(".box", {
//   x: "20rem",
//   duration: 2
// })
// // オブジェクトに書くか。deleyとの併用を考えるとこの書き方を習慣にはしない。
// gsap.to(".box", 2, {
//   x: "20rem",
// })

// // deley => アニメーションが始まるまでのどれくら延滞するか。
// gsap.to(".box", {
//   x: "20rem",
//   duration: 2,
//   delay: 2
// })

// アニメーションでよく使う表現の指定について

// ４つのtransform CSSプロパティと、
// その他のCSSプロパティの指定について。

// transformOrigin（変化の起点）について
// opacityとautoAlphaについて

// GSAPに用意されているCSSのtransformと同じプロパティ
// 移動  translate
// 伸縮  scale
// 回転  rotate
// 歪み  skew

// gsap.to(".box", 2, {
//   // // translate
//   // x: "10rem",
//   // y: "10rem"

//   // // scale
//   // // センターセンターで拡大
//   // scale: 1.5 
//   // // x軸センター方向へ拡大
//   // scaleX: 2
//   // // y軸センター方向へ拡大
//   // scaleY: .5

//   // // rotate
//   // // センターを支点に回転
//   // rotation: "90deg"
//   // // x軸で回転
//   // rotationX: "180deg"
//   // // y軸で回転
//   // rotationY: "180deg"

//   // // skew
//   // // こんな設定すると面白い効果になるけど動きをコントロールしにくい。
//   // skewX: "360deg",
//   // skewY: "-360deg"
// }) 

// // CSSで設定されているプロパティを変えることができる。
// gsap.to (".box", 2, {
//   backgroundColor: "red",
//   borderRadius: "50%",
//   border: "2rem solid #eee",
//   boxShadow: "0 0 2rem red",
// })

// // CSSのtransform-originをGSAPで設定。
// // アニメーションの支点を任意に設定できる。
// gsap.to(".box", 2, {
//   rotation: "360deg",
//   transformOrigin: "50% 100%",
//   scaleX: 0
// }) 

// // 最終形態を透明にしても要素はまだそこにある。
// // その下の要素へアクセスする必要がある場合、例えばクリックして何かする
// // というような動作ができなくなる。
// // これを回避するために、visibility: hidden; を設定する。
// // ついでに、GSAPで関数を定義して実行させるやり方も覚える。
// gsap.to(".box", 2, {
//   scale: 3,
//   opacity: 0, 
//   onComplete: function() {
//     document.querySelector(".box").style.visibility = "hidden"
//   }
// })

// // GSAPには、予めプロパティが用意されている。
// gsap.to(".box", 2, {
//   scale: 100,
//   rotation: "360deg",
//   autoAlpha: 0  
// })

const headers = document.querySelectorAll(".header")
for (headTwo of headers) {
  let orgText = headTwo.lastElementChild
  let lastChar = orgText.textContent.slice(-1)
  let preText = orgText.textContent.slice(0, -1)
  orgText.innerHTML = `${ preText }<span class="spacing-nomalize">${ lastChar }</span>`
}

gsap.set(".container > ul > li", {
  y: "2rem",
  opacity: 0
})
gsap.to(".container > ul > li", 2, {
  y: 0,
  opacity: 1,
  rotation: "360deg",
  scale: 10,
  stagger: {
    each: .1,
    from: "center"
  }
})

// -----
gsap.set("#articles > .wrapper", {
  y: "2rem",
  opacity: 0
})

gsap.to("#articles > .wrapper", 2, {
  y: 0,
  opacity:1,
  // ここれだけでもすでにカッコいいし…
  // stagger: .1
  // より複雑にする。
  stagger: {
    // each => 何秒ずらしてそれぞれの要素を表示していくか。
    // each: .1

    // amount => 指定した秒数間で含まれる全要素をずらして表示していく。
    // amount: 1

    // 『each: .1』と同じ
    // each: .1,
    // from: "start"

    // 『each: .1』の逆向き
    // each: .1,
    // from: "end"

    // center => 中央から端へ
    // each: .1,
    // from: "center"

    // edges => 端から中央へ
    // each: .1,
    // from: "edges"
    
    // random => ランダムに
    each: .1,
    from: "random"
  }
})
