const formulario = document.getElementById("formulario");
formulario.onsubmit = function(){validacion()};

function validacion() {
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;
    if (pass1 === "") {
        alert("Ingresa una contraseña");}
    else if (pass1 === pass2) {
        alert("Contraseña validada");
    }
    else {
        alert("No coinciden las contraseñas, inténtelo de nuevo");
    }
}