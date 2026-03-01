export const initForm = (): void => {
    const form = document.getElementById('myForm') as HTMLFormElement
    if (!form) return

    const validateField = (input: HTMLInputElement | HTMLTextAreaElement): boolean => {
        const errorMsg = input.parentElement?.querySelector('.contact__error')
        if (!errorMsg) return true

        let isValid = true
        let message = ''

        if (input.validity.valueMissing) {
            isValid = false
            message = 'Это поле обязательно для заполнения'
        } else if (input.validity.typeMismatch && input.type === 'email') {
            isValid = false
            message = 'Введите корректный email адрес'
        } else if (input.validity.patternMismatch && input.type === 'tel') {
            isValid = false
            message = 'Введите корректный номер телефона'
        }

        input.classList.toggle('is-invalid', !isValid)
        errorMsg.textContent = message

        return isValid
    }

    const inputs = form.querySelectorAll('input, textarea')
    inputs.forEach((input) => {
        input.addEventListener('input', () =>
            validateField(input as HTMLInputElement | HTMLTextAreaElement)
        )
        input.addEventListener('blur', () =>
            validateField(input as HTMLInputElement | HTMLTextAreaElement)
        )
    })

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault()

        let isFormValid = true
        inputs.forEach((input) => {
            if (!validateField(input as HTMLInputElement | HTMLTextAreaElement)) {
                isFormValid = false
            }
        })

        if (!isFormValid) return

        const formData = new FormData(form)
        let output = 'Вы ввели следующие данные:\n\n'

        formData.forEach((value, key) => {
            output += `${key}: ${value}\n`
        })

        alert(output)
        form.reset()
    })
}
