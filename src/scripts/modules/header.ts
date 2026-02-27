export const initHeader = (): void => {
    const header = document.querySelector<HTMLElement>('.header')
    if (!header) return

    const onScroll = (): void => {
        header.classList.toggle('is-scrolled', window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
}
