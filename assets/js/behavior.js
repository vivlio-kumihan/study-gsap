// サイドメニューを止めて、メインの読み物をスクロールさせる。
// サイドとメインの『2つのpin』を用意する。
// サイドをどこで止めるかを『start: 'top 10%'』で、
// サイドをどのタイミングでメインと同期させるかを、
// メインをpinにして決める。
ScrollTrigger.create({
  trigger: '.pin',
  start: 'top 10%',
  endTrigger: '.end-pin',
  end: 'bottom bottom', 
  pin: true,
  // markers: true,
})

// スクロールしてHeroコンテンツを過ぎるとヘッダーがスクリーン上辺へ収納される動作。
// これにハンバーガーメニューの出現と合わせて複合的な動作を作る。
ScrollTrigger.create({
  trigger: '.container',
  start: '1px top',
  end: document.body.innerHeight,
  toggleClass: {
    className: 'headerHideBtnAppear', 
    targets: ['header', '.headerMenuBtn']
  },
  markers: true,
})

//リサイズがあったらScrollTriggerをリセットする（innerHeightが変わっている可能性があるため）
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
})

// for headerMenuBtn's 3 div(s)
document.getElementById('headerMenuBtn').insertAdjacentHTML('afterbegin', '<a><div></div><div></div><div></div></a>')
