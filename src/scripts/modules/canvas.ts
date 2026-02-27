export const initCanvas = (): void => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const reset = document.getElementById('resetCanvas') as HTMLCanvasElement
    const stop = document.getElementById('stopCanvas') as HTMLCanvasElement
    if (!canvas || !reset || !stop) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.strokeStyle = 'hsla(288, 100%, 66%, 1.00)'
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 100

    const speed = 5
    let hue = 0
    let currentWidth = 75
    let targetWidth = 75

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let angle = Math.random() * Math.PI * 2

    let animationId: number | null = null

    const autoDraw = () => {
        ctx.strokeStyle = `hsl(${hue}, 100%, 72%)`
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        currentWidth += (targetWidth - currentWidth) * 0.05
        if (Math.random() < 0.03) targetWidth = Math.random() * 100 + 25
        ctx.lineWidth = currentWidth

        const prevX = x
        const prevY = y

        angle += (Math.random() - 0.5) * 0.2

        x += Math.cos(angle) * speed
        y += Math.sin(angle) * speed

        ctx.beginPath()
        ctx.moveTo(prevX, prevY)
        ctx.lineTo(x, y)
        ctx.stroke()

        if (x < 0 || x > window.innerWidth) angle = Math.PI - angle
        if (y < 0 || y > window.innerHeight) angle = -angle

        hue = (hue + 1) % 360

        animationId = requestAnimationFrame(autoDraw)
    }

    const stopDrawing = () => {
        if (animationId) {
            cancelAnimationFrame(animationId)
            animationId = null
        }
    }

    const startDrawing = () => !animationId && autoDraw()

    const resetCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height)

    reset.addEventListener('click', () => resetCanvas())

    stop.addEventListener('click', () => (animationId ? stopDrawing() : startDrawing()))
}
