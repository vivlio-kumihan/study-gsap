const items = document.querySelectorAll('.js-item')
const num = items.length

gsap.set('#js-wrap', { width: num * 100 + '%' })
gsap.set(items, { width: 100 / num + '%' })

gsap.to(items, {
  xPercent: -100 * (num - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '#js-area',
    start: 'top top',
    end: '+=1000',
    pin: true,
    pinSpacing: false,
    scrub: true,
    markers: true
  }
})