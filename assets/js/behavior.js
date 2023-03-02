// duration, deley

// // duration => アニメーションにかかる時間
// // durationの設定は、第二引数に設定するか、オブジェクトに書くか。
// gsap.to(".box", {
//   x: "20rem",
//   duration: 10
// })

// gsap.to(".box", 10, {
//   x: "20rem",
// })


// deley => アニメーションが始まるまでのどれくら延滞するか。
gsap.to(".box", 1, {
  x: "20rem",
  delay: 1
})