// // CSSのtransform要素の繰り返す属性は、GSAPでは.repeat()関数
// gsap.to('.box', 1, {
//   left: '100%',
//   delay: 1
// }).repeat(5)

// // CSSのtransform要素のinfiniteは、.repeat()関数に-1
// gsap.to('.box', 1, {
//   left: '100%',
//   delay: 1
// }).repeat(-1)

// // 繰り返す間隔に少し間を開ける場合は、repeatDelay()関数に時間を入れる
// gsap.to('.box', 1, {
//   left: '100%',
//   delay: 1
// }).repeat(-1).repeatDelay(2)

// // 左 => 右 => 右 => 左としたい場合は、yoyo()関数の引数にtrue
// gsap.to(".box", 1, {
//   left: "100%",
//   delay: 1
// }).repeat(-1).yoyo(true)

// // 折り返し戻る時の動きを指定する場合は、yoyoEase属性に任意のease値を与える
// gsap.to(".box", 1, {
//   left: "100%",
//   // yoyoEase: true === ease: "power1.out" 同じ
//   yoyoEase: true,
//   duration: 2.5,
//   delay: 1
// }).repeat(-1).yoyo(true)

// 行き、折り返し共に動きを指定する場合
gsap.to(".box", 1, {
  left: "100%",
  ease: "bounce.out",
  yoyoEase: "bounce.in",
  duration: 2.5,
  delay: 1
}).repeat(-1).yoyo(true)