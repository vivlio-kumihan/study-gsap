const circle = document.querySelectorAll('.circle')
gsap.from(circle, 1, {
  autoAlpha: 0,
  x: '100%',
  y: '100%',
  ease: 'Power1.easeInOut',
  stagger: .2
})