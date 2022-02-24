// Taller #3: Calculando la Media Aritmetica 

/**
 * Suma los elementos de una lista y devuelve el promedio o media
 * @param {Array} lista 
 * @returns 
 */
function calcularMediaAritmetica(lista){
    // Usando metodo reduce
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista1 = sumaLista / lista.length;
    return promedioLista1;
}