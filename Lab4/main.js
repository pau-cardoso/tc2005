// Funcion para regresar a la pagina de inicio
function reload() { 
    location.reload() 
}

function buttonRefresh(){
    document.write("<div><button onclick='reload()'>Volver a la pagina de inicio</button></div>");
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
    buttonRefresh();
}


/**
 * 2. 
 * @input Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.
 * @return  La página debe indicar si el resultado fue correcto o incorrecto, 
 *          y el tiempo que tardó el usuario en escribir la respuesta.
 */
function suma() {
    let a = Math.floor(Math.random() * 10), b = Math.floor(Math.random() * 10);
    let startTime = new Date().getSeconds();
    let respuesta = Number(prompt("Cuál es la suma de "+a+"+"+b+"?"));
    let endTime = new Date().getSeconds();
    if ( respuesta === (a+b) ) {
        document.write("<p>Respuesta correcta!</p>");
        document.write("<p>Te tardaste "+(endTime-startTime)+" segundos</p>");
    }
    else {
        document.write("<p>Respuesta incorrecta</p>")
        document.write("<p>Te tardaste "+(endTime-startTime)+" segundos</p>");
    }
    buttonRefresh();
}


 /**
 * 3. Contador
 * @input Un arreglo de números
 * @return La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo
 */
function contador(arreglo) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0 ) {
            negativos++;
        }
        else if (arreglo[i] === 0 ) {
            ceros++;
        }
        else if (arreglo[i] > 0 ) {
            positivos++;
        }
    }
    document.write("<p><strong>Numeros negativos:</strong><span></span>",negativos,"</p>")
    document.write("<p><strong>Ceros:</strong><span></span>",ceros,"</p>")
    document.write("<p><strong>Numeros positivos:</strong><span></span>",positivos,"</p>")
    buttonRefresh();
}


/**
 * [ [3,8,1], [5,2,9], [4,0,2] ]
 * 4. Promedios
 * @input Un arreglo de arreglos de números.
 * @return Un arreglo con los promedios de cada uno de los renglones de la matriz.
 */
function promedios(array) { 
    let average = 0; 
    document.write("<h1>Promedios</h1>","<p>[");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            average += array[i][j];
        }
        if(i < array.length-1) document.write("&nbsp ",average/array.length,",");
        else document.write("&nbsp ",average/array.length);
        average = 0;
    } 
    document.write("]</p>");
    buttonRefresh();
}


/**
 * 5. Inverso
 * @input Un número
 * @return El número con sus dígitos en orden inverso.
 */
function inverso() { 
    let numero = prompt("Ingrese un numero: ");
    let respuesta = "";
    for (let i = numero.length-1; i >= 0; i--) {
        respuesta+=numero[i]; 
    } 
    document.write("<h1>Inverso</h1>");
    document.write("<p>El inverso es: ",respuesta,"</p>");
    buttonRefresh(); 
} 
 /**
 * 6. Selection Sort
 * @input 
 * @return 
 */
function  selectionSort(array) {
    let pos = 0, aux;

    for (let i = array.length-1; i > 0 ; i-- )  {
        pos = 0 ;
        for ( let j = 1 ; j <= i ; j++ ) {
            if ( array[ j ] > array[pos] ) {
                pos = j ;
            }
        }
        if (pos != i) {
            aux = array[pos];
            array[pos] = array[i];
            array[i] = aux;
        }
    }
    document.write("<h1>Selection Sort</h1>");
    document.write( "<p>El arreglo ordenado es: ",array,"</p>");
    buttonRefresh()
}