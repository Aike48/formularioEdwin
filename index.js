const frmEmail = document.getElementById ('frm-email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'service_irvmitv'
const templateId = 'template_2bqivzs'
const apiKey = '4gU3ekKgGRK7RmcxT'

function sendEmail(event) {
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId, templateId, frmEmail, apiKey)
    .then (result => Swal.fire ('Su mensaje se ha enviado con éxito'))
    .catch( error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No ha sido poible enviar el mensaje'
        })
    })
}