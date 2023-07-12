// trigger要素が、
// 『任意の地点』でpinし、以降、
// 任意『要素に追従』して、
// スクロールアウトする効果
ScrollTrigger.create({
  trigger: '.container.one',
  // sassでも説明したが、
  // ペラペラのボックスに、
  // 底辺から20pxということは、
  // 上の要素の底辺から20px食い込む位置に
  // レイアウト『出来る』ということ。
  // これを前提にすると、
  // start、endそれぞれ100％の意味がわかる。
  start: 'top 100%',
  endTrigger: '.space.end',
  end: 'top 100%', 
  pin: true,
  // pinSpacingありだとtrigger要素の高さと
  // 同じ高さの空きがその要素の下に発生する。
  pinSpacing: false,
  // markers: true
})

ScrollTrigger.create({
  trigger: '.box',
  start: 'top 80%',
  // ここをページの最後までと指定するのが肝
  endTrigger: 'html',
  end: 'bottom top',
  toggleClass: {
    targets: ['.box'],
    className: 'active'
  },
  markers: true,
})