// Taller #3: Calculando la Moda 
// const lista = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

// realiza el calculo de la moda
function calcularModa(lista) {
    const lista1Count = {}; //Creamos el objeto

    // Se comparan los valores del array y se guardadn dentro del objeto
    lista.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    
    // Convertimos nuestro objeto neuvamente a un array de [llave:valor], y lo ordenamos de menor a mayor
    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = lista1Array[lista1Array.length - 1];

    return moda;
}

// Obtiene la lista de inputs y los convierte a una array
function calcularModaLista(){

    const listaElementos = document.getElementsByName("campo");
    let lista = [];

    for (let i = 0; i < listaElementos.length; i++) {

        if (listaElementos[i].value>0) {
            const valor = parseFloat(listaElementos[i].value);
            lista.push(valor);
        }
    }

    if (lista.length>0) {
        return calcularModa(lista);
    }else{
        return 'La lista esta vacia o no tiene valores';
    }
    
}

// Función Principal
function ejecutarModa() {
    const respuesta = calcularModaLista();

    if (respuesta.length > 0) {
        // Respuesta en HTML
        const RpsPromedio = document.getElementById("RpsPromedio");
        RpsPromedio.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
            'El número que mas se repite en la lista ingresada es el : <strong> ' + respuesta[0] + '</strong> con <strong> ' + respuesta[1] + '</strong> Coincidencias' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    } else {
        // Respuesta en HTML
        const RpsPromedio = document.getElementById("RpsPromedio");
        RpsPromedio.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert">' +
            '<strong>' + respuesta + '</strong>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    }
}
