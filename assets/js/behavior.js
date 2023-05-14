const heading = document.querySelector(".heading");
const underline = window.getComputedStyle(document.querySelector(".heading"), "::after")
console.log(underline.position)
console.log(underline.left)
console.log(underline.bottom)
console.log(underline.width)
console.log(underline.height)
console.log(underline.backgroundColor)
// const underline = window.getComputedStyle(heading, '::after');

// // 下線を左から右に伸ばすアニメーション
// const underlineHoverIn = gsap.to(underline, {
//   duration: 0.5,
//   scaleX: 1,
//   transformOrigin: "left center",
//   paused: true,
// });

// // 下線を右から左に縮めるアニメーション
// const underlineHoverOut = gsap.to(underline, {
//   duration: 0.5,
//   scaleX: 0,
//   transformOrigin: "right center",
//   paused: true,
// });

// // マウスオーバー時に下線を左から右に伸ばすアニメーションを再生
// heading.addEventListener("mouseenter", () => {
//   underlineHoverIn.play();
// });

// // マウスアウト時に下線を右から左に縮めるアニメーションを再生
// heading.addEventListener("mouseleave", () => {
//   underlineHoverOut.play();
// });


// // const heading = document.querySelector(".heading");
// // const underline = window.getComputedStyle(heading, '::after');

// // // 下線を左から右に伸ばすアニメーション
// // const underlineHoverIn = gsap.to(underline, {
// //   duration: 0.5,
// //   scaleX: 1,
// //   transformOrigin: "left center",
// //   paused: true,
// // });

// // // 下線を右から左に縮めるアニメーション
// // const underlineHoverOut = gsap.to(underline, {
// //   duration: 0.5,
// //   scaleX: 0,
// //   transformOrigin: "right center",
// //   paused: true,
// // });

// // // マウスオーバー時に下線を左から右に伸ばすアニメーションを再生
// // heading.addEventListener("mouseenter", () => {
// //   underlineHoverIn.play();
// // });

// // // マウスアウト時に下線を右から左に縮めるアニメーションを再生
// // heading.addEventListener("mouseleave", () => {
// //   underlineHoverOut.play();
// // });

// // // underline.style.position = 'absolute';
// // // underline.style.left = '0';
// // // underline.style.bottom = '0';
// // // underline.style.height = computedStyles.height;
// // // underline.style.width = computedStyles.width;
// // // underline.style.backgroundColor = computedStyles.backgroundColor;


// // // // const line = document.createElement("div");
// // // // line.style.width = "1px";
// // // // line.style.height = "5050%";
// // // // line.style.backgroundColor = "black";
// // // // line.style.position = "absolute";
// // // // line.style.left = "0";
// // // // line.style.top = "0";
// // // // document.body.appendChild(line);

// // // // const timeline = gsap.timeline({});

// // // // timeline.to(line, {
// // // //   width: "100%",
// // // //   duration: 1,
// // // // })
// // // //   .to(line, {
// // // //     width: "0",
// // // //     duration: 0.5,
// // // //     delay: 0.5,
// // // //   });

// const line = document.createElement("div");
// line.style.width = "1px";
// line.style.height = "100%";
// line.style.backgroundColor = "black";
// line.style.position = "absolute";
// line.style.left = "0";
// line.style.top = "0";
// document.body.appendChild(line);
// const timeline = gsap.timeline({});
// timeline.to(line, {
//   width: "100%",
//   duration: 1,
// })
//   .to(line, {
//     width: "0",
//     duration: 0.5,
//     delay: 0.5,
//     right: 0,
//     left: "auto",
//     ease: "power2.in",
//   });





// // // // // 下線の初期化
// // // // const line = document.createElement("figure.under-line");
// // // // line.style.width = "1px";
// // // // line.style.height = "1px";
// // // // line.style.backgroundColor = "black";
// // // // line.style.position = "absolute";
// // // // line.style.left = "0";
// // // // line.style.top = "120%";

// // // // // 標的となる見出しの初期化
// // // // const heading = document.getElementById("apear-under-line")
// // // // heading.appendChild(line)

// // // // // アニメーション設定

// // // // heading.addEventListener("mouseenter", function() {
// // // //   gsap.to(line, {
// // // //     width: "100%",
// // // //     duration: 1,
// // // //     ease: "power2.out",
// // // //   })
// // // // })

// // // const heading = document.querySelector(".heading");
// // // const underline = heading.querySelector("::after");

// // // underline.style.transformOrigin = "left center";
// // // underline.style.transform = "scaleX(0)";

// // // heading.addEventListener("mouseenter", () => {
// // //   console.log("hello")
// // //   gsap.to(underline, {
// // //     scaleX: 1,
// // //     duration: 0.5,
// // //     ease: "power2.inOut",
// // //   });
// // // });

// // // heading.addEventListener("mouseleave", () => {
// // //   gsap.to(underline, {
// // //     scaleX: 0,
// // //     duration: 0.5,
// // //     ease: "power2.inOut",
// // //     delay: 0.5,
// // //   });
// // // });


// 別バージョン　取り置く
// リロード毎に行うアニメーション
const line = document.querySelector(".line")
const timeline = gsap.timeline({});
timeline.to(line, {
  width: "100%",
  duration: 1,
  ease: "power2.out",
}).to(line, {
  width: "0",
  duration: 0.5,
  delay: 0.5,
  left: 0,
  ease: "power1.in",
});


// // // // gsap.from(".line", {
// // // //   y: "-5rem",
// // // //   opacity: 0, // 初期値を0に設定
// // // //   duration: 1, // アニメーションの時間を1秒に設定
// // // //   // delay: 1.5 // アニメーションの開始を1.5秒遅らせる
// // // // })
// // // // gsap.to(".line",1, {
// // // //   x: "0",
// // // //   y: "0",
// // // //   transformOrigin: "left top",
// // // //   scaleX: 500,
// // // //   opacity: 1,
// // // //   // rotate: "180deg"
// // // // })

// // // // gsap.to(element, {
// // // //   rotation: 90, // 回転角度（単位は度数法）
// // // // });



// // // // // gsapの基本的なメソッド
// // // // // to, from, fromTo, set

// // // // // // to ////////////////////////////////////////
// // // // // // アニメーションの終わりを指定する。
// // // // // // gsap.to(対象とする要素, duration／存続期間（秒）, 動きを設定する関数)
// // // // // gsap.to(".box", 2, {
// // // // //   // どういうふうに終わるのかを設定する。
// // // // //   x: "10rem",
// // // // //   y: "10rem"
// // // // // })

// // // // // // from ////////////////////////////////////////
// // // // // // アニメーションの始まりを指定する。
// // // // // // gsap.to(対象とする要素, duration（存続期間/秒）, 動きを設定する関数)
// // // // // gsap.from(".box", 2, {
// // // // //   // どういうふうに終わるのかを設定する。
// // // // //   x: "10rem",
// // // // //   y: "10rem"
// // // // // })

// // // // // // fromTo ////////////////////////////////////////
// // // // // // アニメーションの始まりを指定する。
// // // // // // gsap.to(対象とする要素, duration（存続期間/秒）, 動きを設定する関数)
// // // // // gsap.fromTo(".box", 2, 
// // // // //   {
// // // // //     // from 始まり
// // // // //     x: "-100rem",
// // // // //     y: "200rem"
// // // // //   },
// // // // //   {
// // // // //     // to 終わり
// // // // //     x: "0rem",
// // // // //     y: "0rem"
// // // // //   }
// // // // // )

// // // // // fromTo、jsを読み込むまでの一瞬、最初の場所に戻ってから指定位置に位置どりする挙動がある。
// // // // // これを回避する方法は、
// // // // //    => ローリングアニメーションで誤魔化す。
// // // // //    => CSSで位置を指定する。
// // // // //      transform: translate(横軸、縦軸);
// // // // //    => set関数を使う。

// // // // // set
// // // // // アニメーションの始まりを指定する。
// // // // // gsap.to(対象とする要素, 動きを設定する関数)

// // // // // 最初の位置を変数に格納する。これはオブジェクト。
// // // // const firstPosition = {
// // // //   x: '-10rem',
// // // //   y: '0'
// // // // }

// // // // // // オブジェクトのインスタンスの呼出。
// // // // gsap.set(".box",  {
// // // //     x: firstPosition.x,
// // // //     y: firstPosition.y
// // // //   }
// // // // )

// // // // // 1000mm秒後（1秒後）に動かす。
// // // // setTimeout(() => {
// // // //   gsap.fromTo(".box", 1, {
// // // //     x: firstPosition.x,
// // // //     y: firstPosition.y
// // // //   },
// // // //   {
// // // //     x: "-10rem",
// // // //     y: "-14rem"
// // // //   })
// // // // }, 1000)

// // // // // 最初の位置を変数に格納する。これはオブジェクト。
// // // // const figPosition = {
// // // //   x: '-1500rem',
// // // //   // x: '0',
// // // //   y: '0'
// // // // }

// // // // // オブジェクトのインスタンスの呼出。
// // // // gsap.set("figure > img",  {
// // // //     x: figPosition.x,
// // // //     y: figPosition.y
// // // //   }
// // // // )

// // // // // 1000mm秒後（1秒後）に動かす。
// // // // setTimeout(() => {
// // // //   gsap.fromTo("figure > img", 1, {
// // // //     x: figPosition.x,
// // // //     y: figPosition.y
// // // //   },
// // // //   {
// // // //     x: "0",
// // // //     y: "0"
// // // //   })
// // // // }, 1000)
