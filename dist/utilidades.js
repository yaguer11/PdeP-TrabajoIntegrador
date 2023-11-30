"use strict";
// Funciones utilitarias
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputPregunta = exports.normalizarOpcion = exports.limpiarPantalla = exports.rl = void 0;
const readline = __importStar(require("readline")); // Importación de la librería readline para manejas la entrada desde la consola
// Creación de la intrefaz de lectura de línea para entrada/salida
exports.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Función para limpiar la consola, es una función impura ya que modifica el entorno
function limpiarPantalla() {
    console.clear();
}
exports.limpiarPantalla = limpiarPantalla;
/* normalizarOpcion es una Función pura
    - Devuelve el mismo resultado para los mismos argumentos de entrada.
    - No tiene efectos secundarios, ya que no modifica variables fuera de
    su alcance local, ni tampoco realiza operaciones de entrada/salida
*/
function normalizarOpcion(opcion) {
    return opcion
        .toLowerCase() // Convierte todos los caracteres de la cadena a minúscula
        .normalize("NFD") // Método para tratar los caracteres con ascentos y especiales
        .replace(/[\u0300-\u036f]/g, ""); // Elimina los caracteres con ascentos y especiales que quedaron despues de la normalización
}
exports.normalizarOpcion = normalizarOpcion;
// Manejar el cierre del programa
exports.rl.on("close", () => {
    console.log("\n¡Adiós!"); // Salir del programa con código de éxito 0
    process.exit(0);
});
// Función de orden superior. Callbacks para manejar el flujo de ejecución de manera más funcional
function inputPregunta(pregunta, // Parámetro tipo string que representa la pregunta que se hace al usuario
callback // Párametro tipo función que toma un argumento de tipo string y devuelve un void
) {
    // Retorno de la función pregunta, que no devuelve ningún valor
    exports.rl.question(pregunta, callback);
} // Se utiliza el método question que toma dos argumentos, pregunta que se muestra al usuario y callback que se ejecuta con la respuesta del usuario
exports.inputPregunta = inputPregunta;
