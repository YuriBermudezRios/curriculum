const contact = document.getElementById("contact")
const modal = document.getElementById("modal")
const submit = document.getElementById("contact-send")
const button = document.getElementById("button")
const inputsContact = document.querySelector("form")

contact.addEventListener('click', () => {
    modal.classList.remove("contact-closed")
    modal.classList.add("modal")
})

submit.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.remove("modal")
    modal.classList.add("contact-closed")
    alert("Envio exitoso")
    inputsContact.reset()
})

button.addEventListener('click', () => {
    modal.classList.remove("modal")
    modal.classList.add("contact-closed")
    inputsContact.reset()
})