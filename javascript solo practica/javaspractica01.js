//1 VARIABLES
let nombre = "juan";//variablre que puede cambiar
const PI = 3.1416;//CONSTANTE QUE NO CAMBIA
var edad = 30;// forma antiqgua



// 2 TIPOS DE DATOS
// Números
let numero = 10;
let decimal = 10.5;

//strings (cadenas de texto)
let texto = "hola Mundo";

//booleanos
let verdadero = true;
let falso = false;

//Arrays (listas)
let frutas = [ "Manzana", "Banana", "naranja"];

//Objetos
let personas = {
    nombre: "carlos",
    edad: 25,
    ciudad: "Bolivia"
}



// 3 OPERADORES
// aritméticos
let suma = 5 + 3;//8
let resta = 5 - 3;//2
let multiplicación = 5 * 3;//15
let división = 6/3;//2
let modulo = 5 % 2;//1

// Comparacíon
let igual = 5 =="5";// true (solo valor)
let estrictamenteIgual = 5 ==="5";//false (valor y tipo)
let mayorQue 10 > 5; //true


// 4 FUNCIONES
//Declaración de función
function saludar(nombre) {
    return "Hola" + nombre;
}

//Llamada a función
let  saludo = saludar("Ana");//"hola Ana"

// Función flecha (ES6+)
const sumar = (a, b)=> a + b;


// 5 ESTRUCTURAS DE CONTROL
// Condicional if
let hora = 14;
if (hora < 12) {
    console.log("Buenos días");
} else if (horas < 20) {
    console.log(" Buenas tardes");
} else {
    console.log("Buenas noches");
}

//Bucle for
for (let i = 0; i < 5; i++) {
    console.log("Interación: " +i);
}

//Bucle While
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
