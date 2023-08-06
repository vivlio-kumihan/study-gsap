// ScrollTrigger.create({
//   trigger: '#two',
//   start: 'top bottom',
//   end: 'bottom bottom',
//   markers: true,
//   toggleClass: {
//     targets: ['#li-two'],
//     className: 'toggleMenu'
//   }
// })

// // ScrollTriggerを使用して各セクションに対して個別のアニメーションを設定する
// ScrollTrigger.create({
//   trigger: '#one',   // #oneセクションが表示領域内に入ったとき
//   start: 'top center', // トリガーが表示領域の中央に来たとき
//   end: 'bottom center', // トリガーが表示領域の中央に出たとき
//   markers: true,     // マーカーを表示（デバッグ用）
//   toggleClass: {
//     targets: ['#li-one', '.shrinkLine.one'], // 対象となるリストアイテムのID
//     className: 'toggleMenu' // 追加/削除するクラス名
//   }
// });

// ScrollTrigger.create({
//   trigger: '#two',   // #twoセクションが表示領域内に入ったとき
//   start: 'top center', // トリガーが表示領域の中央に来たとき
//   end: 'bottom center', // トリガーが表示領域の中央に出たとき
//   markers: true,     // マーカーを表示（デバッグ用）
//   toggleClass: {
//     targets: ['#li-two', '.shrinkLine.two'], // 対象となるリストアイテムのID
//     className: 'toggleMenu' // 追加/削除するクラス名
//   }
// });

// ScrollTrigger.create({
//   trigger: '#three',   // #threeセクションが表示領域内に入ったとき
//   start: 'top center', // トリガーが表示領域の中央に来たとき
//   end: 'bottom center', // トリガーが表示領域の中央に出たとき
//   markers: true,     // マーカーを表示（デバッグ用）
//   toggleClass: {
//     targets: ['#li-three', '.shrinkLine.three'], // 対象となるリストアイテムのID
//     className: 'toggleMenu' // 追加/削除するクラス名
//   }
// });

// ScrollTrigger.create({
//   trigger: '#four',   // #fourセクションが表示領域内に入ったとき
//   start: 'top center', // トリガーが表示領域の中央に来たとき
//   end: 'bottom center', // トリガーが表示領域の中央に出たとき
//   markers: true,     // マーカーを表示（デバッグ用）
//   toggleClass: {
//     targets: ['#li-four', '.shrinkLine.four'], // 対象となるリストアイテムのID
//     className: 'toggleMenu' // 追加/削除するクラス名
//   }
// });

[...Array(4)].forEach((e, idx) => {
  num = ['one', 'two', 'three', 'four']
  ScrollTrigger.create({
    trigger: `#${ num[idx] }`,
    start: 'top center',
    end: 'bottom center',
    markers: true,
    toggleClass: {
      targets: [`#li-${ num[idx] }`, `.shrinkLine.${ num[idx] }`],
      className: 'toggleMenu'
    }
  })
})
