/**01 FUNCIÓN QUE DETERMINA SI UN NÚMERO ES POSITIVO, NEGATIVO O CERO
 * Crear una función que reciba un número y muestre el resultado*/
console.log("Ejercicio 1")
function determinarSigno(){
    let num = Number(prompt("Ingrese un número:"));
    if (num > 0) {
        console.log("El número " + num + " es POSITIVO");
    } else if (num < 0) {
        console.log("El número " + num + " es NEGATIVO");
    } else if (num === 0) {
        console.log("El número es CERO");
    } else {
        console.log("Ingrese un número válido");
    }
}
determinarSigno();

/**02 FUNCIÓN QUE DETERMINE SI UN NÚMERO ES PAR O IMPAR */
console.log("Ejercicio 2")
function parImpar (numero){
    let number = Number(numero);
    if (number % 2 == 0){
        console.log("El número", number, "es par");
    } else if (number % 2 != 0){
        console.log("El número", number, "es impar");
    }
}
parImpar(5);

/**03 FUNCIÓN QUE DETEMINA SI UNA PERSONA ES MAYOR DE EDAD */
console.log("Ejercicio 3")
function edad (number){
    let determinar = Number(number);
    if (determinar > 17){
        console.log("Usted es mayor de edad");
    }else if (number < 18){
        console.log("Usted es menor de edad");
    }
}
edad(18);

/**04 MOSTRAR LOS NÚMEROS DEL 1 AL 10 CON FOR*/
console.log("Ejercicio 4")
for (let i = 1; i < 11; i++){
    console.log(i);
}

/**05 MOSTRAR LOS NÚMEROS DEL 10 AL 1 CON WHILE */
console.log("Ejercicio 5")
let i = 10;
while (i >= 1){
    console.log(i);
    i--;
}

/**06 FUNCIÓN QUE MUESTRE LA TABLA DE MULTIPLICAR DE UN NÚMERO*/
console.log("Ejercicio 6")
let number = 5
for (let i = 1; i < 11; i++){
    console.log(number, "X", i, "=", (number * i))
}

/**07 SUMAR LOS NÚMEROS DEL 1 AL 100 USANDO UN CICLO */
console.log("Ejercicio 7")
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);

/**08 FUNCIÓN QUE RECIBA DOS NÚMEROS Y DEVUELVA EL MAYOR */
console.log("Ejercicio 8")
function devolver(numUno, numDos){
    if (numUno < numDos){
        console.log(numUno, "es menor que", numDos);
    }else if (numUno > numDos){
        console.log(numUno, "es mayor que", numDos);
    }
}
devolver(80, 90)

/**09 CONTAR CUNTAS LETRAS TIENE UNA PALABRA USANDO UN CICLO */
console.log("Ejercicio 9")
function contarLetrasConFor(palabra) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        contador++;
    }return contador;
}
const miPalabra = "JavaScript";
console.log(contarLetrasConFor(miPalabra));

/**10 FUNCIÓN QUE CUENTE CUÁNTAS VOCALES TIENE UNA PALABRA */
console.log("Ejercicio 10")
function contarVocales (palabra){
    let contador = 0
    let vocales = "aeiou"
    let palabraMinuscula = palabra.toLowerCase()
    for(let i = 0; i < palabraMinuscula.length; i++){
        if (vocales.includes(palabraMinuscula[i])){
            contador++
        }
    }return contador
}
console.log(contarVocales("Hola Mundo!"))

/**11 FUNCIÓN QUE RECIBA UN NÚMERO Y MUESTRE TODOS LOS PARES HASTA ESE NÚMERO */
console.log("Ejercicio 11")
function pares(numero){
    for (let i = 0; i <= numero; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
}
pares(20);

/**12 FUNCIÓN QUE CALCULE EL FACTORIAL DE UN NÚMERO */
console.log("Ejercicio 12")
function factorial(number) {
    let resultado = 1;
    for (let i = 2; i <= number; i++) {
      resultado *= i;
    }
    return resultado;
  }
console.log(factorial(1))

/**13 FUNCIÓN QUE RECIBA UNA FRASE Y LA IMPRIMA CARÁCTER POR CARÁCTER */
console.log("Ejercicio 13")
function frase (texto){
    for (const caracter of texto){
        console.log(caracter);
    }
}
frase("Hola");

/**14 FUNCIÓN QUE INVIERTA UNA PALABRA (EJ: "HOLA" => "ALOH") */
console.log("Ejercicio 14")
function invertirCadena(texto) {
    return texto.split("").reverse().join("");
  }
console.log(invertirCadena("Javascript"));
  

/**15 FUNCIÓN QUE DETEMINE SI UNA PALABRA ES PALÍNDORMA */
console.log("Ejercicio 15")
function esPalindromo(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false; 
      }
    }return true
  }
console.log(esPalindromo("reconocer"));//true

/**16 FUNCIÓN QUE SUME LOS NÚMEROS PARES DEL 1 AL 50 */
console.log("Ejercicio 16")
function sumarParesHasta50() {
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
      if (i % 2 === 0) {
        suma += i;
      }
    }return suma;
}
console.log("La suma de los números pares del 1 al 50 es:", sumarParesHasta50());

/**17 FUNCIÓN QUE RECIBA UN NÚMERO Y DIGA SI ES PRIMO */
console.log("Ejercicio 17")
function saberSiEsPrimo(num) {
    if (num < 2) {
        return console.log(num, "no es un número primo");
    }for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return console.log(num, "no es un número primo");
        }
    }return console.log(num, "sí es un número primo");
}
saberSiEsPrimo(7);

/**18 FUNCIÓN QUE MUESTRE UN PATRÓN DE ASTERISCOS
 * *
 * **
 * ***
 * ****
 */
console.log("Ejercicio 18")
function patron(filas) {
    for (let i = 1; i <= filas; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) { 
            linea += "*";
        }
        console.log(linea);
    }
}
patron(4);

/**19 FUNCIÓN QUE SIMULE UN CAJERO AUTOMÁTICO 
 * Recibe un saldo y un retiro, valida si puede retirar o no*/
console.log("Ejercicio 19")
function simularCajero(saldoActual, retiro) {
    if (retiro <= 0) {
        return "El monto de retiro debe ser mayor a cero.";
    }if (retiro <= saldoActual) {
        let nuevoSaldo = saldoActual - retiro;
        return "Retiro exitoso:", retiro, "Nuevo saldo:", nuevoSaldo;
    }else {
        return "Error: Saldo insuficiente para realizar el retiro.";
    }
}
console.log(simularCajero(1000, 500)); 
console.log(simularCajero(1000, 1500)); 
console.log(simularCajero(500, 0));     

/**20FUNCIÓN QUE SIMULE UN LOGIN
 * Recibe usuario y contraseña y valida si coinciden con valores defenidos en el programa */
console.log("Ejercicio 20")
function simularLogin(usuarioInput, contrasenaInput) {
    const USUARIO_CORRECTO = "admin";
    const CONTRASENA_CORRECTA = "12345";
    if (usuarioInput === USUARIO_CORRECTO && contrasenaInput === CONTRASENA_CORRECTA) {
        return "Inicio de sesión exitoso. ¡Bienvenido!";
    } else {
        return "Error: Usuario o contraseña incorrectos.";
    }
}
console.log(simularLogin("admin", "12345")); 
console.log(simularLogin("admin", "wrong")); 
console.log(simularLogin("user", "12345"));  