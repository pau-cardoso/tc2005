// Funcion para regresar a la pagina de inicio
function reload() { 
    location.reload() 
}

/**
 * 1. cuadrados y cubos
 * @input número pedido con un prompt
 * @return Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
 * Utiliza document.write para producir la salida
 */
function cuadradosCubos() {
    let num = Number(prompt("Introduzca un numero: "));
    document.write("<table>","<tr>","<th>Numero</th>","<th>Cuadrado</th>","<th>Cubo</th>","</tr>");
    for (let i = 1; i <= num; i++) {
        document.write("<tr>");
        document.write("<td>",i,"</td>");
        document.write("<td>",i**2,"</td>");
        document.write("<td>",i**3,"</td>");
        document.write("</tr>");
    }
    document.write("</table>")
    document.write("<div><button onclick='reload()'>Volver a la pagina de inicio</button></div>");
}


/**
 * 2. 
 * @input Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.
 * @return  La página debe indicar si el resultado fue correcto o incorrecto, 
 *          y el tiempo que tardó el usuario en escribir la respuesta.
 */


 /**
 * 3. Contador
 * @input Un arreglo de números
 * @return La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo
 */


 /**
 * 4. Promedios
 * @input Un arreglo de arreglos de números.
 * @return Un arreglo con los promedios de cada uno de los renglones de la matriz.
 */


 /**
 * 5. Inverso
 * @input Un número
 * @return El número con sus dígitos en orden inverso.
 */


 /**
 * 6. Crea una solución para un problema de tu elección
 * @input 
 * @return 
 */
