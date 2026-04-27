/**
 * ==========================================
 * CLASE 3: OBJETOS, JSON Y DESESTRUCTURACIÓN
 * ==========================================
 */

// --- 1. DEFINICIÓN DE OBJETOS ---
// Un objeto es una representación de algo del mundo real con:
// - Atributos (Características: marca, color, precio)
// - Métodos (Acciones: vender, arrancar, caminar)

const producto = {
    nombre: "Coca-Cola",
    tamanio: 1000,
    precio: 7,
    cantidad: 15,
    ingredientes: ["Agua", "Azúcar", "Toque secreto"], // Un atributo puede ser una lista
    distribuidor: { // O incluso otro objeto (objetos anidados)
        nombre: "Distribuciones Guatemala",
        telefono: "2131241234",
        direccion: "Calle 1 con avenida 123"
    },
    
    // MÉTODO: Es una función dentro de un objeto
    vender: function(unidades) {
        if (unidades <= 0) {
            console.log("Valor no válido...");
            return;
        }
        // "this" se refiere a "este objeto". Es obligatorio para acceder a sus propios atributos.
        if (this.cantidad >= unidades) {
            this.cantidad -= unidades;
            console.log(`Vendiendo ${unidades} unidades de ${this.nombre}...`);
        } else {
            console.log("No existe esa cantidad disponible!");
        }
    }
};

// --- 2. ACCESO Y MODIFICACIÓN ---
console.log(producto.precio);        // Notación de punto (La más usada)
console.log(producto["nombre"]);     // Notación de corchetes (Como en los diccionarios de Python)

producto.tamanio = 1200;             // Modificar un atributo existente
producto.tipo = "Light";             // Agregar un atributo nuevo (JS es muy flexible)
delete producto.ingredientes;        // Eliminar un atributo por completo

// --- 3. RECORRIDO DE OBJETOS ---
// Los objetos no tienen .length directamente. Usamos Object.keys para eso.
console.log("Cantidad de llaves:", Object.keys(producto).length);

// For...in: Sirve para recorrer las LLAVES de un objeto.
console.log("=== Recorrido con For...in ===");
for (let llave in producto) {
    // Usamos corchetes para acceder al valor de forma dinámica
    console.log(`${llave}: ${producto[llave]}`); 
}



// --- 4. JSON (JavaScript Object Notation) ---
// Es un formato de texto plano para enviar datos. 
// ¡OJO!: JSON NO guarda funciones/métodos, solo datos.

// Stringify: De Objeto a Texto (Para enviar a un servidor)
let productoJson = JSON.stringify(producto, (llave, valor) => {
    if (llave === "precio") return valor * 1.13; // Podemos modificar datos al serializar
    return valor;
});
console.log("JSON como texto:", productoJson);

// Parse: De Texto a Objeto (Para leer lo que recibimos)
let productoLeido = JSON.parse(productoJson);
console.log("Vuelto a objeto:", productoLeido.nombre);


// --- 5. DESESTRUCTURACIÓN (Destructuring) ---
// Es "sacar" piezas del objeto y guardarlas en variables propias.

// A) Básica y con Alias
// cantidad: stock -> Saca 'cantidad' pero llámale 'stock'
// tipo = "Original" -> Si no existe 'tipo', dale este valor por defecto
let { nombre, precio, cantidad: stock, tipo = "Original" } = producto;

// B) Anidada
// Sacamos 'telefono' que está dentro de 'distribuidor'
let { distribuidor: { telefono } } = producto;

// C) En funciones (Muy potente)
// En lugar de pasar todo el objeto, pedimos solo lo que necesitamos
function conocerProducto({ nombre, precio }) {
    console.log(`El producto ${nombre} vale ${precio} Quetzales.`);
}
conocerProducto(producto);


// --- 6. OPERADOR SPREAD Y REST (...) ---

// REST: "Guarda el resto de cosas aquí"
let { nombre: n, ...elResto } = producto; 
// 'elResto' ahora es un nuevo objeto con todo menos el nombre.

// SPREAD: "Esparcir" o Clonar
const usuarioUno = { nombre: "Antonio", edad: 76 };
// Creamos una copia real, no una referencia (si cambio uno, no cambia el otro)
const usuarioDos = { ...usuarioUno, telefono: "5555-5555" };

// Unir objetos
const usuarioCompleto = { ...usuarioUno, ...usuarioDos, altura: 1.7 };