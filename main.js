import { TimelineMax } from 'gsap'

const tl = new TimelineMax()

tl.from('h1', {
  y: 100,
  opacity: 0,
  duration: 2
})