document.addEventListener("DOMContentLoaded", function() {
    // Función para validar el formulario al enviar
    document.getElementById("postulacionForm").addEventListener("submit", function(event) {
        event.preventDefault();
        validarFormulario();
    });
});

function validarFormulario() {
    // Validaciones de campos
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var celular = document.getElementById("celular").value;
    var rut = document.getElementById("rut").value;
    var genero = document.getElementById("genero").value;
    var contraseña = document.getElementById("password").value;

    if (nombre.length < 3 || nombre.length > 20) {
        alert("El nombre debe tener entre 3 y 20 caracteres.");
        return;
    }

    if (apellidos.length < 3 || apellidos.length > 20) {
        alert("El apellido paterno debe tener entre 3 y 20 caracteres.");
        return;
    }

    if (celular.length < 9 || celular.length > 12) {
        alert("El número de celular debe tener entre 9 y 12 caracteres.");
        return;
    }

    if (rut.length < 9 || rut.length > 12) {
        alert("El rut debe tener entre 9 y 12 caracteres.");
        return;
    }

    if (genero === "") {
        alert("Seleccione un género.");
        return;
    }

    if (contraseña.length < 6 || contraseña.length > 100) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }    

    // Si todas las validaciones pasan, se envía el formulario
    document.getElementById("postulacionForm").submit();
}

/*Inicio sesion*/
function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    if (usuario == "" || password == "") {
        alert("Por favor completa todos los campos.");
        return false;
    }

    // Puedes agregar validaciones adicionales aquí, como verificar la longitud de la contraseña, etc.

    return true;
}

function mostrarPassword() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}