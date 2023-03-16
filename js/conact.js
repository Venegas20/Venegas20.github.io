



const nombre = document.getElementById('nombre');
const gamil = document.getElementById('email');
const comentario = document.getElementById('comentario');



const buttonEnviar = document.getElementById('btnEnviar');

var miFormulario = document.getElementById("fromContacto");
miFormulario.addEventListener("submit", function (event) {
    event.preventDefault(); // evitar acción predeterminada
    // realizar acciones personalizadas aquí
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "venegas71abc@gmail.com",
        Password: "BF71346BEB09CD72EE08231764AF9A14662B",
        To: 'venegas71abc@gmail.com',
        From: "venegas71abc@gmail.com",
        Subject: `DATOS DE CONTACTO - [${nombre.value}]`,
        Body: `
    <h1>${nombre.value}</h1> 
    <a href="mailto:${email.value}">${email.value}</a>
    <p>${comentario.value}</p>
    `
    }).then(
        (message) => {
            if (message == "OK") {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Gracias Por Contactarnos con nosotros...',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(message);
               
            }
            else {

                Swal.fire({
                    icon: 'Error',
                    title: 'Oops...',
                    text: 'El correo no ha sido Enviado...!!',
                    // footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }

    );
});

// if (buttonEnviar) {
//     buttonEnviar.addEventListener('click', () => {


//     })
// };
