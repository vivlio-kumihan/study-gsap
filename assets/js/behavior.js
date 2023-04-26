// timeline()関数 => 複数のアニメーションを時間軸に沿ってコントロールする方法

// timeline()関数
// タイムラインのインスタンスを生成させる
const tl = gsap.timeline()

// インスタンス内でオブジェクトを順番に指定しながらタイムラインを進める
// 上下二つの箱　一連の横方向への（1秒間で移動する）動き
tl.to("figure:nth-of-type(1)", 1, {
  x: "10rem"
})
.to("figure:nth-of-type(2)", 1, {
  x: "10rem",
  rotation: "180deg"
})

// 帰りの動き
.to("figure:nth-of-type(1)", 1, {
  x: "0rem"
})
.to("figure:nth-of-type(2)", 1, {
  x: "0rem",
  rotation: "0deg"
}).repeat(-1)



// // keyframs属性　その1
// // keyframs属性にさまざまな動きを『オブジェクト』で記述する。
// // 特に、X軸、Y軸への動きを配列で指定することができる。
// gsap.to("figure", 5, {
//   keyframes: {
//     x: [0, "20rem", "20rem", 0, 0],
//     y: [0, 0, "20rem", "20rem", 0],

//     // 一連の動き全体でのease
//     // ease: "bounce.in",
//     // 一辺ごとのease
//     easeEach: "bounce.in",
//   }
// }).repeat(-1)



// // keyframs属性　その2
// // keyframs属性にさまざまな動きを『配列』で記述する。
// // 各動きを現す値はオブジェクト。
// gsap.to("figure", {
//   keyframes: [
//     { x: "10rem", y: "10rem", rotation: "360deg", ease: "power2.inOut", duration: 1 },
//     { x: "20rem", y: "0rem", rotation: "0deg", ease: "power2.inOut", duration: 3 },
//     { x: "10rem", y: "-10rem", rotation: "360deg", ease: "power2.inOut", duration: 1 },
//     { x: "0rem", y: "0rem", rotation: "0deg", ease: "power2.inOut", duration: 3 },
//   ]
// }).repeat(-1)



// // keyframs属性　その3
// // keyframs属性にさまざまな動きを『オブジェクト』で記述する。
// // durationをパーセンテージで指定できる。が、『その2』の方が感覚的に動きを把握しやすい。
// gsap.to("figure", 10, {
//   keyframes: {
//     "10%": { x: "10rem", y: "10rem", rotation: "360deg", ease: "power2.inOut" },
//     "30%": { x: "20rem", y: "0rem", rotation: "0deg", ease: "power2.inOut" },
//     "50%": { x: "10rem", y: "-10rem", rotation: "360deg", ease: "power2.inOut" },
//     "90%": { x: "0rem", y: "0rem", rotation: "0deg", ease: "power2.inOut" },
//   }
// }).repeat(-1)