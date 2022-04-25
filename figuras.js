// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}  

function areaCuadrado(lado) {
    return lado * lado;
}  

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;    
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;   
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo +"cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
 
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
    
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputBaseTriangulo");
    const value3 = Number(input3.value);
    
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input4 = document.getElementById("InputBaseTriangulo");
    const valuebase = Number(input4.value);

    const input5 = document.getElementById("InputAlturaTriangulo");
    const valuealtura = Number(input5.value);
    
    const area = areaTriangulo(valuebase, valuealtura)
    alert(area);
    
}

function calcularPerimetroCirculo() {
    const input6 = document.getElementById("InputCirculo");
    const valueradio = Number(input6.value);
       
    const perimetro = perimetroCirculo(valueradio);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input7 = document.getElementById("InputCirculo");
    const valueradio = Number(input7.value);

    const area = areaCirculo(valueradio)
    alert(area);
    
}