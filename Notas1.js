/**
 * ==========================================
 * INTRODUCCIÓN A JAVASCRIPT (JS)
 * ==========================================
 * - Alto nivel: Fácil de leer para humanos.
 * - No Tipado: Las variables pueden cambiar de tipo (de número a texto) sin avisar.
 * - Interpretado: El navegador (Chrome, Firefox) lee el código línea por línea.
 */

// --- 1. INTERACCIÓN Y CONSOLA ---

// Similar al print() de Python
console.log("Bienvenidos a JS"); 

// Crea una ventana emergente para pedir datos (como input() en Python)
// Nota: Todo lo que entra por prompt es un STRING (texto)
var nombre = prompt("Ingrese su nombre"); 

// Mensajes visuales en la consola para depurar
console.warn("Esto es una advertencia"); // Aparece en amarillo con un triángulo
console.error("Esto es un error");       // Aparece en rojo con una X
console.clear();                         // Limpia todo el historial de la consola

// Mensaje de alerta en una ventana emergente sobre la página
alert("Esto es un mensaje tipo popup"); 

/**
 * SOBRE LA ETIQUETA <script>:
 * - HEAD: Se ejecuta antes de cargar el HTML. Puede ralentizar la vista inicial.
 * - BODY (al final): Es la mejor práctica. Permite que el HTML se dibuje primero 
 * y luego se ejecute la lógica de JS.
 */


// --- 2. VARIABLES: VAR, LET Y CONST ---

// VAR: Forma antigua. Tiene "Hoisting" (puedes llamarla antes de declararla y 
// te dará 'undefined', lo cual causa errores lógicos difíciles de encontrar).
var x = 34;
var x = 30; // Permite re-declarar la misma variable (¡Peligroso!)

// LET: Forma moderna (ES6). No permite re-declarar en el mismo ámbito.
let ciudad = "Guatemala";
// let ciudad = "México"; // Esto daría ERROR de sintaxis
ciudad = "España";        // Esto sí funciona (re-asignación)

// CONST: Para valores que NO deben cambiar.
const PI = 3.1416;
// PI = 3.15; // Esto daría ERROR: no se puede re-asignar una constante.

/**
 * REGLA DE ORO (CamelCase): 
 * En JS las variables se escriben como: nombreUsuario, miPrimeraVariable.
 * (Empieza en minúscula, la siguiente palabra en MAYÚSCULA).
 */


// --- 3. TIPOS DE DATOS ---

let variableNumerica = 75.6;          // Number (enteros y decimales son el mismo tipo)
let variableCadena = "Hola Mundo";    // String
let variableBooleana = true;          // Boolean
let variableNula = null;              // Null (ausencia intencional de valor)
let variableIndefinida;               // Undefined (variable declarada pero sin valor)
let lista = [1, 2, 3, 4];             // Array (Como las listas de Python)
let objeto = {edad: 20, nombre: "MJ"}; // Object (Como los diccionarios de Python)

// typeof() nos sirve para saber qué tipo de dato es una variable
console.log("Es de tipo: ", typeof(variableNumerica));


// --- 4. OPERADORES ---

// ASIGNACIÓN
let n = 10;
n += 5; // n = n + 5 (Resultado: 15)

// ARITMÉTICOS
console.log(10 % 3); // Módulo (Residuo de la división): 1

// INCREMENTO / DECREMENTO
let y = 5;
y++; // Incrementa después: entrega 5 y luego se vuelve 6
++y; // Incrementa antes: se vuelve 7 y luego entrega el 7

// COMPARACIÓN
console.log(5 == "5");  // true (Compara solo valor, JS es muy flexible)
console.log(5 === "5"); // false (Compara valor Y tipo de dato. ¡Usa este siempre!)

// LÓGICOS
// && es el "and" de Python
// || es el "or" de Python
console.log(true && false); // false


// --- 5. MANEJO DE NÚMEROS ---

let num = 57.6789;
console.log(num.toFixed(2));      // "57.68" - Redondea a 2 decimales y lo vuelve STRING
console.log(num.toLocaleString()); // Agrega separadores de miles según el país

// CASOS ESPECIALES
console.log(5 / 0);           // Infinity
console.log(Math.sqrt(-5));   // NaN (Not a Number) - Resultado de operaciones imposibles
console.log(isNaN(num));      // Retorna true si NO es un número

// COERCIÓN DE TIPOS (JS intentando ser inteligente)
console.log("6" * 3); // 18 (JS convierte el texto a número para multiplicar)
console.log("6" + 3); // "63" (¡CUIDADO! El + concatena si hay un string)


// --- 6. MANEJO DE CADENAS (STRINGS) ---

let texto = "JavaScript es genial";

console.log(texto.toUpperCase());       // TODO A MAYÚSCULAS
console.log(texto.toLowerCase());       // todo a minúsculas
console.log(texto.replace("genial", "pro")); // Cambia una palabra por otra
console.log(texto[0]);                  // "J" (Acceso por índice)
console.log(texto.length);              // 20 (Largo de la cadena)
console.log(texto.slice(0, 10));        // "JavaScript" (Corta desde - hasta)