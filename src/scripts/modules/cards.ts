export const initCards = (): void => {
    const card = document.getElementById('3dCard') as HTMLElement
    if (!card) return

    card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -12
        const rotateY = ((x - centerX) / centerX) * 12

        card.style.setProperty('--rx', `${rotateX}deg`)
        card.style.setProperty('--ry', `${rotateY}deg`)
    })

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rx', '0deg')
        card.style.setProperty('--ry', '0deg')
    })
}
