export const initAnim = (): void => {
    initCounter()
    initSvg()
    initProgress()
}

const initProgress = (): void => {
    let timerId: number | null = null
    const btn = document.getElementById('resetProgress') as HTMLElement
    const bar = document.getElementById('progressBar') as HTMLElement
    if (!btn || !bar) return

    const restart = () => {
        if (timerId) clearTimeout(timerId)

        bar.classList.remove('loading-state')
        void bar.offsetWidth
        bar.classList.add('initial-state')

        timerId = window.setTimeout(() => {
            startFullLoad()
        }, 2000)
    }

    const startFullLoad = () => {
        bar.classList.remove('initial-state')
        void bar.offsetWidth
        bar.classList.add('loading-state')
    }

    btn.addEventListener('click', () => {
        restart()
        btn.innerText = 'Повторить'
    })
}

const initSvg = (): void => {
    const btn = document.getElementById('resetSvg') as HTMLElement
    let svg = document.getElementById('mySvg') as HTMLElement
    if (!btn || !svg) return

    const restart = () => {
        const newSvg = svg.cloneNode(true) as HTMLElement

        if (svg.parentNode) {
            svg.parentNode.replaceChild(newSvg, svg)

            svg = newSvg
        }
    }

    btn.addEventListener('click', () => {
        restart()
        btn.innerText = 'Повторить'
    })
}

const initCounter = (): void => {
    const btn = document.getElementById('resetCounter') as HTMLElement
    const counter = document.getElementById('counter') as HTMLElement
    if (!btn || !counter) return

    const target = 150
    const duration = 1000
    let requestId: number | null = null

    const start = () => {
        let startTimestamp: number | null = null
        const startValue = 0

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp

            const progress = Math.min((timestamp - startTimestamp) / duration, 1)

            const currentValue = Math.floor(progress * (target - startValue) + startValue)

            counter.innerText = currentValue.toString()

            counter.classList.remove('bump')
            void counter.offsetWidth
            counter.classList.add('bump')

            if (progress < 1) {
                requestId = requestAnimationFrame(step)
            }
        }

        requestId = requestAnimationFrame(step)
    }

    btn.addEventListener('click', () => {
        if (requestId) {
            cancelAnimationFrame(requestId)
            requestId = null
        }
        start()
        btn.innerText = 'Повторить'
    })
}
