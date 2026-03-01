import { DotLottie } from '@lottiefiles/dotlottie-web'

export const initLottie = () => {
    const canvas = document.querySelector<HTMLCanvasElement>('#dotlottie-canvas')

    if (!canvas) return

    const dotLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: canvas,
        src: './assets/logoA.lottie',
    })
}
