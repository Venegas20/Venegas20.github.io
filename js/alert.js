/**
 * 
 * @param {string} titulo 
 * @param {string} texto 
 * @param {string} icono | warning | success | question | info | error	
 */
function sweetAlert(titulo, texto, icono) {

    Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}