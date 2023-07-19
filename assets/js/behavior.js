// gsap.to('.box', 3, {
//   x: 300,
//   backgroundColor: 'red',
//   delay: 1,
//   // アニメーションがスタートした時点で呼び出したい処理を書く。
//   onStart: () => console.log('onStart'),
//   // アニメーションが完了した時点で呼び出したい処理を書く。
//   onComplete: () => console.log('onComplete'),
//   // アニメーションが継続している間に呼び続ける処理を書く。
//   onUpdate: () => console.log('onUpdate'),
//   // アニメーションが繰り返される時にしたい処理を書く。
//   onRepeat: () => console.log('onRepeat'),
//   // アニメーションが繰り返される時にしたい処理を書く。
//   onReverseComplete: () => console.log('onReverse')
// })
// // アニメーションを繰り返す関数
// .repeat(1)
// // アニメーションを逆再生させる関数
// .reverse(1)

// プログレス・バーの元ネタ
// 0（％）から100（％）の値を生成する。
const tween = gsap.to('#box', 3, {
  x: 300,
  backgroundColor: 'red',
  delay: 1,
  onUpdate: () => {
    outPutProgress()
  }
})

// 生成しているtween（動き）にprogress() 関数を当てると、
// tweenに同期した0から100の数値が得られる。
// 得た値を表示させる任意の要素へ投げる。
function outPutProgress() {
  const progress = (Math.floor(tween.progress() * 100))
  document.getElementById('progress').textContent = `${ progress }%`
}
// この位置で関数を呼ぶことで、
// tweenする前に、初期値（0％）を表示させることができる。
outPutProgress()


gsap.to('#scrub-box', 3, {
  opacity: 1,
  scrollTrigger: {
    trigger: '#scrub-box',
    start: 'top 40%',
    end: 'bottom 60%',
    scrub: true,
    markers: true,
    // 引数に『e（イベント）』を入れると情報が出てくる。
    // onEnter: () => {
    //   // console.log(e)
    //   console.log('onEnter')
    // },
    // onEnterBack: () => console.log('onEnterBack'),
    // 全然反応が違うから注意する。
    // endがscroll-endより内へ入るたびに反応する
    // onLeave: () => console.log('onLeave'),
    // startがscroll-startより内へ入るたびに反応する
    // onLeaveBack: () => console.log('onLeaveBack')
    // スクリーンサイズが変更された時に発火する。
    // onRefresh: () => console.log('onRefresh')
    // onEnter, onEnterBack / onLeave, onLeaveBackを合わせたもの。つまりトグルスイッチ。
    // onToggle: () => console.log('onToggle')
    // onUpdate 有効な使い方ができるコールバック関数
    // プログレス・バーの元ネタになる。
    // onUpdate: (e) => console.log(e.progress)
    // startからendのアニメーション有効範囲で、上下の動きを示す。上: 1、下: -1
    // onUpdate: (e) => console.log(e.direction)
    // startからendのアニメーション有効範囲ないにいるかどうかを真偽値で示す。
    // onUpdate: (e) => console.log(e.isActive)
    // スクロールの方向とその速さを示す。スクロールに応じた何かをするときに使う。
    onUpdate: (e) => console.log(e.getVelocity())
  }
})