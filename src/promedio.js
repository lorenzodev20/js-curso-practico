// Taller #3: Calculando la Media Aritmetica 

/**
 * Suma los elementos de una lista y devuelve el promedio o media
 */

function calcularMediaAritmetica1() {
    const listaElementos = document.getElementsByName("campo");
    let lista = [];

    for (let i = 0; i < listaElementos.length; i++) {

        if (listaElementos[i].value>0) {
            const valor = parseFloat(listaElementos[i].value);
            lista.push(valor);
        }
    }

    if (lista.length>0) {
        // Usando metodo reduce
         const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );

        const promedioLista1 = sumaLista / lista.length;
        return promedioLista1;
    }else{
        return 'La lista esta vacia o no tiene valores';
    }
}

function ejecutarPromedio() {
    const respuesta = calcularMediaAritmetica1();

    if (respuesta>0) {
        // Respuesta en HTML
        const RpsPromedio = document.getElementById("RpsPromedio");
        RpsPromedio.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
        'EL PROMEDIO DE LA LISTA ES: <strong> '+respuesta+'</strong>'+
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    }else{
        // Respuesta en HTML
        const RpsPromedio = document.getElementById("RpsPromedio");
        RpsPromedio.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
        '<strong>'+respuesta+'</strong>'+
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    }
}
// Agregar los campos adicionales
function AddCampo() {
    const campos = 100;   //max de 10 campos
    const listaElementos = document.getElementsByName("campo");
    let x = listaElementos.length;
    
    if (x<campos) {
        // Creamos los elementos HTML que necesitamos
        const div = document.createElement("div");
        div.className  = "input-group mb-3";
        
        const span = document.createElement("span");
        span.className  = "input-group-text";
        span.textContent = 'Elemento '+parseInt(x+1)+': ';
        
        const input = document.createElement("input");
        input.setAttribute("type","number");
        input.setAttribute("name","campo");
        input.className = "form-control campo";
        
        // Obtenemos el id donde queremos agregar el input
        const listaElementos = document.getElementById("listaElementos");

        // Empezamos a asignar los elemenos en el orden deseado.
        div.appendChild(span);
        div.appendChild(input);

        listaElementos.appendChild(div);
        x++;
    }
}