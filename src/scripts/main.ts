import '../styles/main.scss'
import { initHeader } from './modules/header'
import { initToasts } from './modules/toast'
import { initSkeleton } from './modules/skeleton'
import { initCards } from './modules/cards'
import { initModal } from './modules/modal'
import { initAnim } from './modules/anim'
import { initForm } from './modules/form'
import { initBurger } from './modules/burger'
import { initCanvas } from './modules/canvas'
import { initTheme } from './modules/theme'

console.log('JS - Init')

document.addEventListener('DOMContentLoaded', () => {
    initHeader()
    initSkeleton()
    initToasts()
    initCards()
    initModal()
    initAnim()
    initForm()
    initBurger()
    initCanvas()
    initTheme()
})
