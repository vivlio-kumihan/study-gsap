const tl = gsap.timeline()
gsap.defaults({
  ease: 'power1.inOut',
  duration: 1,
})
// 経過時間: 0s
// 単純に1秒後に動き始める。
tl.to('.one', { x: 700 }, '+=1')
// 1秒前に1秒かけて動く　つまり、2秒 - 1秒 => 1秒後に動き始める。
tl.to('.two', { x: 700 }, '-=1')
// 経過時間: 2s
// 単純に1秒後に動き始める。
tl.to('.three', { x: 700 }, '+=1')
// 経過時間: 4s
// 1秒前に1秒かけて動く　つまり、2秒 - 1秒 => 1秒後に動き始める。
// つまり、単純に1秒後に動き始める。
tl.to('.four', { x: 700 }, 'anchor')
// 経過時間: 5s => つまり、5 - 2 = 3秒後に動く
tl.to('.five', { x: 700 }, 'anchor-=2')
// 前と同時に動かす属性値は'<'
tl.to('.six', { x: 700 })
// 3秒後に1秒間かけて動く。合計4秒
tl.to('.seven', { x: 700 })
// 意図しないといけない動きをするので注意。
// 前を起点（1秒間）に、1秒前に1秒かけて動く。
tl.to('.eight', { x: 700 }, '<-=1')
// 自分を起点に、2秒前に1秒間かけて動く。
tl.to('.nine', { x: 700 }, '-=2')





// const circle = document.querySelectorAll('.circle')
// gsap.from(circle, 1, {
//   autoAlpha: 0,
//   x: '100%',
//   y: '100%',
//   ease: 'Power1.easeInOut',
//   stagger: .2
// })