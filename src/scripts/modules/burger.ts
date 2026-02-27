export const initBurger = (): void => {
    const burger = document.getElementById('burger') as HTMLElement
    const menu = document.getElementById('menu') as HTMLElement
    if (!burger || !menu) return

    const toggleMenu = () => {
        burger.classList.toggle('active')
        menu.classList.toggle('open')
    }

    burger.addEventListener('click', toggleMenu)

    const links = menu.querySelectorAll('a')
    links.forEach((link) => {
        link.addEventListener('click', toggleMenu)
    })
}
