type ToastType = 'success' | 'error'

export const initToasts = (): void => {
    const container = document.querySelector('.toast-container') as HTMLElement
    const successBtn = document.getElementById('successToast') as HTMLButtonElement
    const errorBtn = document.getElementById('errorToast') as HTMLButtonElement

    if (!container || !successBtn || !errorBtn) return

    const show = (message: string, type: ToastType = 'success', duration: number = 4000): void => {
        const toast = document.createElement('div')
        const text = document.createElement('span')

        toast.className = `toast ${type}`
        text.innerText = message

        toast.appendChild(text)
        container.appendChild(toast)

        const removeToast = () => {
            if (toast.classList.contains('hide')) return
            toast.classList.add('hide')
            toast.addEventListener('animationend', () => toast.remove())
        }

        setTimeout(removeToast, duration)
    }

    successBtn.addEventListener('click', () => {
        show('Файл загружен!', 'success')
    })
    errorBtn.addEventListener('click', () => {
        show('Ошибка загрузки!', 'error')
    })
}
