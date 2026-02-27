export const initSkeleton = (): void => {
    const btn = document.getElementById('skeleton-toggle')
    if (!btn) return

    const skeletons = document.querySelectorAll<HTMLElement>(
        '.skeleton-card, .skeleton-profile, .skeleton-list'
    )
    let isLoading = true

    btn.addEventListener('click', () => {
        isLoading = !isLoading
        skeletons.forEach((el) => {
            el.classList.toggle('skeleton--loaded', !isLoading)
            el.setAttribute('aria-busy', String(isLoading))
        })
        btn.textContent = isLoading ? 'Переключить Skeleton ↔ Контент' : 'Вернуть Skeleton'
    })
}
