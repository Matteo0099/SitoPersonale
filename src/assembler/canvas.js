const canvas = document.getElementById("canvas")
const container = document.querySelector("#containerCanvas")
const colorEl = document.getElementById("color")
const clear = document.getElementById("clear")
let color = colorEl.value

let ctx = canvas.getContext('2d')

const pos = { x: 0, y: 0 }

clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

colorEl.addEventListener("change", (e) => {
    color = e.target.value
})

document.addEventListener('DOMContentLoaded', () => { 
    canvas.width = container.offsetWidth
    canvas.height = container.offsetHeight
});

window.addEventListener('resize', () => { 
    canvas.width = container.offsetWidth
    canvas.height = container.offsetHeight
})

canvas.addEventListener('mousemove', (e) => {
    if (e.buttons !== 1) return

    ctx.beginPath()
  
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    ctx.strokeStyle = color
  
    ctx.moveTo(pos.x, pos.y)    
    setPosition(e)
    ctx.lineTo(pos.x, pos.y)
  
    ctx.stroke()
})

canvas.addEventListener('mousedown', setPosition)
canvas.addEventListener('mouseenter', setPosition)

function setPosition(e) {
  pos.x = e.offsetX
  pos.y = e.offsetY
}
