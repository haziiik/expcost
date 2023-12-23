const scriptURL = 'https://script.google.com/macros/s/AKfycbwhmqu1zdOp6kIbgY6p7byjADtGjrh_mpy02khMIR_khxlFda3pIfarQXufatDqR12e/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})