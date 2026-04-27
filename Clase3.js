/**01 CREAR UN OBJETO ESTUDIANTE
 * Crear un objeto con nombre, edad y curso. Mostrar un mensaje usando desestructuración*/
console.log("Ejercicio 1");
const estudiante = {
    nombre: "Jorge",
    edad: 25,
    curso: "Inglés",
};
const { nombre, curso } = estudiante;
console.log(`${nombre} está inscrita en el curso de ${curso}.`);

/**02 LISTA DE ESTUDIANTES
 * Crear un arreglo con 5 objetos estudiante. Recorrelo e imprimir los nombres*/
console.log("Ejercicio 2");
const estudiantes = [
    { nombre: "Luis", edad: 22, notas: [4.5, 3.0, 4.0] },
    { nombre: "María", edad: 15, notas: [2.5, 2.8, 3.2] },
    { nombre: "Carlos", edad: 35, notas: [4.0, 5.0, 4.8] },
    { nombre: "Lucía", edad: 21, notas: [3.5, 4.0, 3.8] },
    { nombre: "Jorge", edad: 23, notas: [2.0, 3.5, 1.5] }
];
estudiantes.forEach(est => console.log(est.nombre));

/**03 PROMEDIO DE NOTAS POR ESTUDIANTE
 * Cada estudiante tiene un arreglo de notas. Calcular el promedio de cada uno*/
console.log("Ejercicio 3");
estudiantes.forEach(est => {
    const suma = est.notas.reduce((acc, nota) => acc + nota, 0);
    est.promedio = (suma / est.notas.length).toFixed(1);
    console.log(`Promedio de ${est.nombre}: ${est.promedio}`);
});

/**04 BUSCAR EL ESTUDIANTE MAYOR
 * Recorrer el arreglo y mostrar el estudiante con mayor edad*/
console.log("Ejercicio 4");
const mayor = estudiantes.reduce((prev, curr) => (prev.edad > curr.edad) ? prev : curr);
console.log(`El estudiante mayor es: ${mayor.nombre} con ${mayor.edad} años.`);

/**05 FILTRAR ESTUDIANTES APROBADOS 
 * Mostrar solo los que tengan promedio mayor o igual a 3.0.*/
console.log("Ejercicio 5");
const aprobados = estudiantes.filter(est => est.promedio >= 3.0);
console.log("Estudiantes aprobados:", aprobados);

/**06 DESESTRUCTURAR DENTRO DE UN CICLO
 * Recorrer el arreglo y desestructurar nombre y edad directamente en el for*/
console.log("Ejercicio 6");
for (const { nombre, edad } of estudiantes) {
    console.log(`${nombre} tiene ${edad} años.`);
}

/**07 CREAR UN SET DE MATERIAS
 * Agrergar varias materias, algunas repetidas, Mostrar el contenido final del Set*/
console.log("Ejercicio 7");
// 07. Crear un Set
const materias = new Set(["JavaScript", "Python", "JavaScript", "HTML", "CSS", "HTML"]);
console.log(materias); 

/**08 CONVERTIR UN ARREGLO A SET 
 * Dado un arreglo con números repetidos, convertirlo convertirlo a set para eliminar duplicados*/
console.log("Ejercicio 8");
const numeros = [1, 2, 2, 3, 4, 4, 5];
const numerosUnicos = [...new Set(numeros)];
console.log(numerosUnicos)

/**09 CREAR UN MAP DE PRODUCTOS 
 * Clave: nombre del producto.
 * Valor: precio.
 * Mostrar todos los productos con su precio
*/
console.log("Ejercicio 9");
const carrito = new Map([
    ["Teclado", 50],
    ["Mouse", 25],
    ["Monitor", 200]
]);
carrito.forEach((precio, producto) => console.log(`${producto}: Q${precio}`));

/**10 CALCULAR EL TOTAL DEL CARRITO USANDO MAP
 * Recorrer el Map y sumar todos los precios*/
console.log("Ejercicio 10");
let esTotal = 0;
carrito.forEach(precio => esTotal += precio);
console.log(`Total del carrito: Q${esTotal}`);

/**11 VERIFICAR EXCISTENCIA EN MAP
 * Pedir un producto y validar si existe en el Map*/
console.log("Ejercicio 11");
const search = "Mouse";
console.log(`¿Existe ${search}?: ${carrito.has(search)}`);

/**12 OBJETO CON MÉTODO
 * Crear un objeto cuentaBancaria con propiedades y un método para depositar dinero*/
console.log("Ejercicio 12");const cuentaBancaria = {
    titular: "Alex",
    saldo: 1000,
    depositar(cantidad) {
        this.saldo += cantidad;
        console.log(`Depósito exitoso. Nuevo saldo: Q${this.saldo}`);
    }
};
cuentaBancaria.depositar(500);

/**13 LISTA DE OBJETOS PRODUCTOS
 * Cada producto tiene nombre, precio y categoría. Mostrar solo los de una categoría específica*/
console.log("Ejercicio 13");
const productos = [
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Silla", precio: 150, categoria: "Hogar" },
    { nombre: "Audífonos", precio: 100, categoria: "Electrónica" }
];
const electronica = productos.filter(p => p.categoria === "Electrónica");
console.log("Productos de Electrónica:", electronica);

/**14 ORDENAR PRODUCTOS POR PRECIO
 * Ordenar el arreglo de productos de menor a mayo precio*/
console.log("Ejercicio 14");
productos.sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados por precio:", productos);

/**15 DESTRUCTURACIÓN ANIDADA
 * Crear un objeto que tenga otro objeto dentro (dirección) y extraer los datos con desestructuración*/
console.log("Ejercicio 15");
const usuario = {
    id: 1,
    direccion: { ciudad: "Guatemala", zona: 10 }
};
const { direccion: { ciudad } } = usuario;
console.log(ciudad);

/**16 CONTAR ELEMENTOS ÚNICOS CON SET
 * Dado un arreglo de nombres repetidos, contar cuántos nombre únicos hay*/
console.log("Ejercicio 16");
const nombres = ["Ana", "Juan", "Ana", "Pedro", "Juan"];
console.log(`Nombres únicos: ${new Set(nombres).size}`);

/**17 CREAR UN MAP A PARTIR DE UN ARREGLO
 * Dado un arreglo de objetos productos, pasarlo a un Map */
console.log("Ejercicio 17");
const productosMap = new Map(productos.map(p => [p.nombre, p.precio]));
console.log("Contenido del nuevo Map:", productosMap);

/**18 ELIMINAR ELEMENTOS DE UN SET
 * Eliminar un elemento y mostrar el resultado*/
console.log("Ejercicio 18");
materias.delete("Python");
console.log("Materias restantes en el Set:", materias);

/**19 RECORRER UN MKAP CON DESESTRUCTURACIÓN
 * MOstrar clave y valor usando desestructuración en el for */
console.log("Ejercicio 19");
for (const [producto, precio] of productosMap) {
    console.log(`El precio de ${producto} es ${precio}`);
}

/**20 MINI SISTEMA DE BIBLIOTECA
 * Crear un arreglo de libors (objeto de título, autor y estado: prestado/disponible). Mostrar solo los disponibles */
 console.log("Ejercicio 20");
 const biblioteca = [
    { titulo: "Cien años de soledad", autor: "García Márquez", disponible: true },
    { titulo: "El resplandor", autor: "Stephen King", disponible: false },
    { titulo: "Don Quijote", autor: "Cervantes", disponible: true }
];
const disponibles = biblioteca.filter(libro => libro.disponible);
console.log("Libros listos para préstamo:", disponibles);