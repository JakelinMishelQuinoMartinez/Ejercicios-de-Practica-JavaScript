/**
 * =========================================================
 *    CLASE 2
 * =========================================================
 */

// --- 1. CONCEPTOS FUNDAMENTALES (Refuerzo) ---

/**
 * ¿QUÉ ES EL HOISTING?
 * Es un comportamiento de JS que "eleva" las declaraciones de variables (con var) 
 * y funciones (declarativas) al principio de su contexto antes de ejecutar el código.
 * * Ejemplo con VAR:
 * console.log(nombre); // No da error, da 'undefined' porque JS sabe que existe pero no su valor aún.
 * var nombre = "Jakelin";
 * * Ejemplo con LET/CONST:
 * console.log(apellido); // DA ERROR (ReferenceError). No tienen hoisting. ¡Es más seguro!
 * let apellido = "López";
 */

/**
 * EL MISTERIO DE LOS SIGNOS DE IGUALDAD:
 * =   : ASIGNACIÓN (Guarda un valor en una variable). let x = 5;
 * ==  : COMPARACIÓN DÉBIL (Compara solo el valor, no el tipo). 5 == "5" es TRUE.
 * === : COMPARACIÓN ESTRICTA (Compara valor Y tipo de dato). 5 === "5" es FALSE. (¡Úsalo siempre!)
 * !=  : DIFERENTE DÉBIL. 5 != "5" es FALSE (porque para JS son lo mismo).
 * !== : DIFERENTE ESTRICTO. 5 !== "5" es TRUE (porque uno es número y otro es texto).
 */



// --- 2. ESTRUCTURA SWITCH COMPLETA (Los 12 Meses) ---
let numeroMes = Number(prompt("Ingrese un número del 1 al 12:"));

switch (numeroMes) {
    case 1:  console.log("Enero"); break;
    case 2:  console.log("Febrero"); break;
    case 3:  console.log("Marzo"); break;
    case 4:  console.log("Abril"); break;
    case 5:  console.log("Mayo"); break;
    case 6:  console.log("Junio"); break;
    case 7:  console.log("Julio"); break;
    case 8:  console.log("Agosto"); break;
    case 9:  console.log("Septiembre"); break;
    case 10: console.log("Octubre"); break;
    case 11: console.log("Noviembre"); break;
    case 12: console.log("Diciembre"); break;
    default:
        console.log("Error: El número debe estar entre 1 y 12.");
        // El 'default' actúa como el 'else' en Python cuando nada coincide.
}


// --- 3. CICLOS Y REPETICIONES (Loops) ---

// DO-WHILE: "Hazlo y luego pregunta". 
// Útil para menús donde quieres que el usuario vea las opciones al menos una vez.
let opcion;
do {
    opcion = Number(prompt("1. Saludar\n2. Salir"));
    if (opcion === 1) alert("¡Hola, programadora!");
} while (opcion !== 2); // Se repite MIENTRAS la opción NO sea 2.

// FOR: Ideal cuando sabes cuántas veces repetir algo (como el range de Python).
let flores = ["Girasol", "Rosa", "Loto"];
for (let i = 0; i < flores.length; i++) {
    // i++ es el "paso", va sumando de 1 en 1.
    console.log("Flor " + (i + 1) + ": " + flores[i]);
}

// FOR...OF: La forma simplificada de recorrer listas (arrays).
for (let flor of flores) {
    console.log("Viendo la flor:", flor);
}


// --- 4. FUNCIONES: DECLARATIVAS VS EXPRESIÓN ---

// FUNCION DECLARATIVA (Tiene Hoisting: puedes llamarla antes de escribirla)
function saludar(nombre) {
    return "Hola " + nombre;
}

// FUNCIONES DE EXPRESIÓN (No tienen hoisting, son más modernas)
// 1. Con la palabra 'function':
const calcularDoble = function(n) { return n * 2; };

// 2. Función de Flecha (Arrow Function):
// Si solo tiene una línea de código, el 'return' es automático (implícito).
const triple = n => n * 3; 

console.log(triple(10)); // Resultado: 30

/**
 * RESUMEN DE NOTAS CLAVE PARA TU EXAMEN:
 * 1. JavaScript lee de arriba a abajo, pero el Hoisting puede mover cosas.
 * 2. 'NaN' (Not a Number) ocurre cuando haces mates con algo que no es número (ej: "hola" * 2).
 * 3. Las variables en JS se recomiendan declarar siempre con 'let' o 'const', evita usar 'var'.
 * 4. CamelCase: Siempre escribe nombresAsiParaTusVariables.
 */

// --- 5. FUNCIONES AUTO-EJECUTABLES (IIFE) ---
// Se ejecutan solas nada más cargar el script. Se encierran en paréntesis.
(function() {
    console.log("¡Guía de JS cargada correctamente! Lista para estudiar.");
})();