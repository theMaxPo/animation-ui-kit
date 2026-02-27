export const initTheme = (): void => {
    const themeToggle = document.getElementById('themeToggle') as HTMLButtonElement
    if (!themeToggle) return

    const iconSun = themeToggle.querySelector('.icon-sun') as HTMLElement
    const iconMoon = themeToggle.querySelector('.icon-moon') as HTMLElement

    const savedTheme = localStorage.getItem('theme') || 'light'
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark')
        iconSun.style.display = 'none'
        iconMoon.style.display = 'block'
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark'

        if (isDark) {
            document.documentElement.removeAttribute('data-theme')
            localStorage.setItem('theme', 'light')
            iconSun.style.display = 'block'
            iconMoon.style.display = 'none'
        } else {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
            iconSun.style.display = 'none'
            iconMoon.style.display = 'block'
        }
    })
}
