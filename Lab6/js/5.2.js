let articulos = document.getElementsByClassName("articulos");
let cantidades = document.getElementsByClassName("cantidades");
let precios = [15,16,10];

function calcularSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < cantidades.length; i++) {
        subtotal += Number(cantidades[i].value)*precios[i];
    }
    return subtotal;
}

function calcularTotal() {
    let subtotal = calcularSubtotal();
    return subtotal + calcularIVA(subtotal);
}

function calcularIVA(subtotal) {
    return subtotal*0.16;
}

function resumen( ) {
    let resumen = document.getElementById("checkout");
    resumen.innerHTML = "<h2>Checkout</h2>";
    for (let i = 0; i < articulos.length; i++) {
        if (cantidades[i].value > 0) {
            resumen.innerHTML += "<p onmouseover='highlight(this)' onmouseout='eraseHighlight(this)'>" + cantidades[i].value +" x "+ articulos[i].innerHTML + " ... $" + precios[i] + " </p>";
        }
    }
    resumen.innerHTML += "<h4>Subtotal: $" + calcularSubtotal() + "</h4>";
    resumen.innerHTML += "<h3 onmouseover='changeText(this)'>Total: $" + calcularTotal() + "</h3>";
}

// Eventos
function highlight(element) {
    element.style.backgroundColor = "#f3e6b2";
}

function eraseHighlight(element) {
    element.style.backgroundColor = "transparent";
}

function changeText(element) {
    element.style.fontFamily = "'Montserrat', sans-serif";
    element.style.fontWeight = '600';
    element.style.fontSize = "2em";
    element.style.color = "#4a919e";
}