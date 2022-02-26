// Funciones para el cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Funciones para Triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
  // console.log(trianguloGrandeLadoA +" - "+ trianguloGrandeLadoB);
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
      // console.error("Los lados a y b no son iguales");
      return "Los lados a y b no son iguales";
  } else {
      const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
      const trianguloPequenoLadoBase = trianguloGrandeLadoA;

      const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
      const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

      const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

      const trianguloGrandeAltura = trianguloPequenoLadoA;
      return trianguloGrandeAltura;
  }
}
// Funciones para el circulo

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}


// Acciones HTML CUADRADO
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);

  // Respuesta en HTML
  const RpsCuadrado = document.getElementById("RpsCuadrado");
  RpsCuadrado.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
  'EL PERIMETRO DEL CUADRADO ES: <strong> '+perimetro+'</strong>'+
  '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  // alert("EL AREA DEL CUADRADO ES: "+area);

  // Respuesta en HTML
  const RpsCuadrado = document.getElementById("RpsCuadrado");
  RpsCuadrado.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
  'EL AREA DEL CUADRADO ES: <strong> '+area+'</strong>'+
  '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
}

// Acciones HTML TRIANGULO

function calcularPerimetroTriangulo(){

  const lado1 = document.getElementById("InputLadoUnoTriangulo");
  const lado1Value = parseInt(lado1.value);

  const lado2 = document.getElementById("InputLadoDosTriangulo");
  const lado2Value = parseInt(lado2.value);

  const base = document.getElementById("InputBaseTriangulo");
  const baseValue = parseInt(base.value);

  const perimetro = perimetroTriangulo(lado1Value,lado2Value,baseValue);

  alert("EL PERIMETRO DEL TRIANGULO ES: "+ perimetro);
}

function calcularAreaTriangulo(){

  const lado1 = document.getElementById("InputLadoUnoTriangulo");
  const lado1Value = parseInt(lado1.value);

  const lado2 = document.getElementById("InputLadoDosTriangulo");
  const lado2Value = parseInt(lado2.value);

  const base = document.getElementById("InputBaseTriangulo");
  const baseValue = parseInt(base.value);

  const altura = lado1Value+lado2Value;

  const area = areaTriangulo(baseValue,altura);

  alert("EL AREA DEL TRIANGULO ES: "+ area);
}

function calcularAlturaTrianguloIsoceles(){

  const lado1 = document.getElementById("InputLadoUnoTriangulo");
  const lado1Value = parseInt(lado1.value);

  const lado2 = document.getElementById("InputLadoDosTriangulo");
  const lado2Value = parseInt(lado2.value);

  const base = document.getElementById("InputBaseTriangulo");
  const baseValue = parseInt(base.value);

  const altura = alturaTrianguloIsosceles(lado1Value, lado2Value, baseValue);

  if (altura>0) {
    alert("LA ALTURA DEL TRIANGULO ISOCELES ES: "+ altura);
  }else{
    alert(altura);
  }

}

// Acciones HTML CIRCULO
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCiruculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
    // Respuesta en HTML
  const RpsCirculo = document.getElementById("RpsCirculo");
  RpsCirculo.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
  'EL PERIMETRO DEL CIRCULO ES: <strong> '+perimetro+'</strong>'+
  '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCiruculo");
  const value = input.value;

  const area = areaCirculo(value);
  // Respuesta en HTML
  const RpsCirculo = document.getElementById("RpsCirculo");
  RpsCirculo.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
  'EL AREA DEL CIRCULO ES: <strong> '+area+'</strong>'+
  '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
}
