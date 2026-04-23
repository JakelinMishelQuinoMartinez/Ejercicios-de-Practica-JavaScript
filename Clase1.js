/**01 DATOS PERSONALES
 * Declarar variables para: nombre, edad, ciudad
 * Mostrar un mensaje:
 * Hola, mi nombre es ___, tengo ___ años y vivo en ___ */
console.log("Ejercicio 1: DATOS PERSONALES")
let nombre = "Ericka";
let edad = 25;
let ciudad = "Guatemala";
console.log("Hola, mi nombre es", nombre, "tengo", edad, "años y vivio en", ciudad)

/**02 SUMA DE DOS NÚMEROS
 * Declarar dos números y muestra su suma */
console.log("Ejercicio 2: SUMA DE DOS NÚMEROS")
let x = 5
let y = 10
console.log(x + y)

/**03 RESTA, MULTIPLICACIÓN Y DIVISÓN 
 * Con los mismos númereos, muestra los 4 resultados matemáticos básicos*/
console.log("Ejercicio 3: RESTA, MULTIPLICACIÓN, DIVISÓN y POTENCIA")
console.log(x * y)
console.log(x - y)
console.log(x / y)
console.log(x ** y)

/**04 PROMEDIO DE 3 NOTAS
 * Declara tres notas y calculña el promedio */
console.log("Ejercicio 4: PROMEDIO DE 3 NOTAS")
let promedioUno = 70
let promedioDos = 80
let promedioTres = 100
let sumaPromedios = promedioUno + promedioDos + promedioTres
console.log(sumaPromedios/3)

/**05 CONVERSIÓN DE EDAD A MESES
 * Declara tu edad y calcula cuántos meses has vivido */
console.log("Ejercicio 5: CONVERSIÓN DE EDAD A MESES")
let miEdad = 23
let meses = miEdad * 12
console.log(miEdad, "años son", meses, "meses")

/**06 CONVERSIÓN DE HORAS A MINUTOS Y SEGUNDOS
 * Declara una cantidad de horas y conviértala a minutos y segundos */
console.log("Ejercicio 6: CONVERSIÓN DE HORAS A MINUTOS Y SEGUNDOS")
let horas = 10
let minutos = horas * 60
let segundos = minutos * 60
console.log(horas, "horas son", minutos, "minutos o", segundos, "segundos")

/**07 PRECIO CON IVA
 * Declara el precio de un producto y calcula el valor final con IVA (19%)*/
console.log("Ejercicio 7: PRECIO CON IVA")
let precioProducto = 80
let porcentaje = 19 / 100
let iva = precioProducto * porcentaje
let precioTotal = precioProducto + iva
console.log(precioTotal)

/**08 ÁREA DE UN RECTÁNGULO
 * Declare base y altura y calcula el área */
console.log("Ejercicio 8: ÁREA DE UN RECTÁNGULO")
let base = 9
let altura = 6
let area = base * altura
console.log(altura)

/**09 PERÍMETRO DE UN RECTÁNGULO
 * Con la misma base y altura calcular el perímetro */
console.log("Ejercicio 9: PERÍMETRO DE UN RECTÁNGULO")
console.log(base + base + altura + altura)

/**10 CONCETRACIÓN DE STRINGS
 * Declara nombre y apellido en variables separadas y únerlos en un solo string */
console.log("Ejercicio 10: CONCETRACIÓN DE STRINGS")
let strNombre = "Carla"
let strApellido = "López"
console.log(strNombre, strApellido)

/**11 LONGITUD DE UNA PALABRA 
 * Declara una palabra y muestra cuántos carácteres tiene usando .length*/
console.log("Ejercicio 11: LONGITUD DE UNA PALABRA ")
let palabra = "macarena"
let longitud = palabra.length
console.log(longitud, "carácteres")

/**12 PRIMERA Y ÚLTIMA LETRA
 * Muestra la primera y la última letra de cada palabra */
console.log("Ejercicio 12: PRIMERA Y ÚLTIMA LETRA")
let letras = "Espacio"
let primera = letras[0]
let ultima = letras[letras.length-1]
console.log("La primera letra es", primera)
console.log("La última letra es", ultima)

/**13 CONVERTIR EL TEXTO A MAYÚSCULAS Y MINÚSCULAS
 * Declara una frase y muéstrala en mayúsculas y en minúsculas */
console.log("Ejercicio 13: CONVERTIR EL TEXTO A MAYÚSCULAS Y MINÚSCULAS")
let frase = "Hoy es jueves"
let mayuscula = frase.toUpperCase()
let minuscula = frase.toLowerCase()
console.log(mayuscula)
console.log(minuscula)

/**14 EXTRAER PARTE DE UN TEXTO
 * Declarar una frase y extrae solo una palabra usando .slice */
console.log("Ejercicio 14: EXTRAER PARTE DE UN TEXTO")
let phrase = "Los días son calurosos"
let extraccion = phrase.slice(4, 8)
console.log(extraccion)

/**15 REMPLAZAR PALABRA EN UNA FRASE
 * REMPLAZAR UNA PALABRA POR OTRA USANDO .REPLACE() */
console.log("Ejercicio 15: REMPLAZAR PALABRA EN UNA FRASE")
let strPalabra = "Los días domingos son de descanso"
let remplazar = strPalabra.replace("domingos", "lunes")
console.log(remplazar)

/**16 OPERADORES DE INCREMENTO
 * Declarar un número y aplícale ++ tres veces mostrando el resultado cada vez */
console.log("Ejercicio 16: OPERADORES DE INCREMENTO")
let number = 23
number++
console.log(number++)
console.log(number++)
console.log(number++)

/**17 OPERADORES COMPUESTOS
 * Declara un número y usa +=, -=, *=, /= */
console.log("Ejercicio 17: OPERADORES COMPUESTOS")
let num = 80
console.log(num += 2)
console.log(num -= 2)
console.log(num *= 2)
console.log(num /= 2)

/**18 CONCATENAR NÚMERO Y TEXTO
 * Delcara un número y un texto y concatenarlos en una frase */
console.log("Ejercicio 18: CONCATENAR NÚMERO Y TEXTO")
let nums = 15
let texto = "Aves son libres"
console.log(nums, texto)

/**19 CALCULAR EL RESIDUO
 * Declara dos números y muestra el residuo usando % */
console.log("Ejercicio 19: CALCULAR EL RESIDUO")
let numeroUno = 41
let numeroDos = 20
let residuo = numeroUno % numeroDos
console.log(residuo)

/**20 CONSTRUIR UN MENSAJE COMPLEJO
 * Con varias variables (nombre, edad, hobby, comida favorita), construye un menssaje largo concatenando todo */
console.log("Ejercicio 20: CONSTRUIR UN MENSAJE COMPLEJO")
let nomb = prompt("Ingrese un nombre:")
let age = Number(prompt("Ingrese su edad:"))
let hobby = prompt("Ingrese su hobby principal:")
let favfood = prompt("Ingrese su comida favorita:")
console.log("Hola mundo, mi nombre es", nomb, "tengo", age, "años,", "mi hobby principal es", hobby, "y mi comida favorita es", favfood)