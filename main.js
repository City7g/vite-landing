// const canvas = document.querySelector('canvas')
// const ctx = canvas.getContext('2d')
// canvas.width  = 600;
// canvas.height = 600; 

// const drawBall = (x, y, radius) => {
//   ctx.beginPath()
//   ctx.arc(x, y, radius, 0, 2 * Math.PI)
//   ctx.strokeStyle = '#ff0000'
//   ctx.fill()
//   ctx.closePath()
// }

// drawBall(100, 100, 20)
import './main.css'
import './grid.css'

document.querySelector('body').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('grid')
})