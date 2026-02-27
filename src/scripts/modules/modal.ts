export const initModal = (): void => {
    const modalTriggers = document.querySelectorAll('[data-modal-target]')
    const closeBtns = document.querySelectorAll('.modal-close')
    const overlays = document.querySelectorAll('.modal__overlay')

    const toggleModal = (modal: HTMLElement, isOpen: boolean): void => {
        if (!modal) return
        modal.classList.toggle('is-open', isOpen)
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }

    modalTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault()
            const targetId = (trigger as HTMLElement).dataset.modalTarget
            if (targetId) {
                const targetModal = document.getElementById(targetId)
                if (targetModal) toggleModal(targetModal, true)
            }
        })
    })

    closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const overlay = btn.closest('.modal__overlay') as HTMLElement
            if (overlay) toggleModal(overlay, false)
        })
    })

    overlays.forEach((overlay) => {
        overlay.addEventListener('mousedown', (e: Event) => {
            if (e.target === overlay) toggleModal(overlay as HTMLElement, false)
        })
    })

    document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal__overlay.is-open') as HTMLElement
            if (openModal) toggleModal(openModal, false)
        }
    })
}
