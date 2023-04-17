// アニメーションでよく使う表現の指定について

// ４つのtransform CSSプロパティと、
// その他のCSSプロパティの指定について。

// transformOrigin（変化の起点）について
// opacityとautoAlphaについて


// gsapの基本的なメソッド
// to, from, fromTo, set

// // to ////////////////////////////////////////
// // アニメーションの終わりを指定する。
// // gsap.to(対象とする要素, duration／存続期間（秒）, 動きを設定する関数)
// gsap.to(".box", 2, {
//   // どういうふうに終わるのかを設定する。
//   x: "10rem",
//   y: "10rem"
// })

// // from ////////////////////////////////////////
// // アニメーションの始まりを指定する。
// // gsap.to(対象とする要素, duration（存続期間/秒）, 動きを設定する関数)
// gsap.from(".box", 2, {
//   // どういうふうに終わるのかを設定する。
//   x: "10rem",
//   y: "10rem"
// })

// // fromTo ////////////////////////////////////////
// // アニメーションの始まりを指定する。
// // gsap.to(対象とする要素, duration（存続期間/秒）, 動きを設定する関数)
// gsap.fromTo(".box", 2, 
//   {
//     // from 始まり
//     x: "-100rem",
//     y: "200rem"
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

// set
// アニメーションの始まりを指定する。
// gsap.to(対象とする要素, 動きを設定する関数)

// 最初の位置を変数に格納する。これはオブジェクト。
const firstPosition = {
  x: '-10rem',
  y: '0'
}

// // オブジェクトのインスタンスの呼出。
gsap.set(".box", {
  x: firstPosition.x,
  y: firstPosition.y
}
)

// 1000mm秒後（1秒後）に動かす。
setTimeout(() => {
  gsap.fromTo(".box", 1, {
    x: firstPosition.x,
    y: firstPosition.y
  },
    {
      x: "-10rem",
      y: "-14rem"
    })
}, 1000)

// 最初の位置を変数に格納する。これはオブジェクト。
const figPosition = {
  x: '-1500rem',
  // x: '0',
  y: '0'
}

// オブジェクトのインスタンスの呼出。
gsap.set("figure > img", {
  x: figPosition.x,
  y: figPosition.y
}
)

// 1000mm秒後（1秒後）に動かす。
setTimeout(() => {
  gsap.fromTo("figure > img", 1, {
    x: figPosition.x,
    y: figPosition.y
  },
    {
      x: "0",
      y: "0"
    })
}, 1000)
