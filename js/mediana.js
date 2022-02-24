// Taller #3: Calculando la Mediana 

// Declaro mi array
const lista1 = [
    200,
    600,
    400000000,
    100,
    500,
];

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {

    let mediana;

    //Primero ordenamos la lista
    const lista1 = lista.sort(function(a, b) {
        return a - b;
    });

    const mitadLista1 = parseInt(lista1.length / 2);
    
    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
    } else {
        mediana = lista1[mitadLista1];
    }

    return mediana;
}


