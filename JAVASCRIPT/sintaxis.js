// Comentarios - Deshabilitar lineas
/*
    Multi
    Lienas
*/

//Impresiones en consola
console.log("Holiwis");

//Variables y constantes
let variable = "Andrea";
//var variablecita = "VD";

const numero = 3.1416;
numero = 123
console.log(numero)
//Concatenación es la suma de algo a un string
console.log("Hola "+variable);

console.log("5"+5);

//cambiar los tipos de valores o variables
//parse
let cinco = parseInt("5");
console.log(cinco+5);

//operadores matematicos
let suma = 5+5;
let resta = 10-5;
let división = 4/2;
let multiplicacion = 2*2;
let residuo = 10%5;

//operadores logicos
// OR, AND  SIGNO DE Y*2 NOT!

//OPERADORES DE COMPARACIÓN
// IGUALDAD, DESIGUALDAD

let igualdad = "5" ==5;
console.log(igualdad);
let igualdadEstricta ="10" ===5;
console.log(igualdadEstricta);

let desigualdad ="5" !==5;
let desigualdadEstricta = "5" !==5;

//Operadores de comparación matematicas o númericas
//mayor que, menor que, mayor o igual que, menor o igual que

//Estructuras de control o condicionales
if(false){
    console.log("Esto funciona")
}else if (true){
    console.log("Aca no llega")
}

switch(opcion){
    case 1:
        console.log("se comunico con administración");
        break;
        default:
            console.log("No es una opción que manejemos")
}

//ternario
condición ? "caso true" : "caso false"

//estructuras repetitivas o bucles
contador = 0;
while(contador < 5){
    console.log(contador);
    contador++;
}

do{
    console.log(contador);
    contador++;
} while (contador <5);

for(let i = 0; i < 5; i++){
    console.log(i)
} 

//funciones
function saludar(){
    console.log("Holiwis");
}

//funciones  anonimas
const funcioncita = function () { console.log("soy anonimaaa");
}
funcioncita();

//fat arrow functions funciones flechas
const funcionFlecha = () => { console.log("Soy anonima"); };
funcionFlecha();