// Funciones utilitarias

import * as readline from "readline"; // Importación de la librería readline para manejas la entrada desde la consola

// Creación de la intrefaz de lectura de línea para entrada/salida
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para limpiar la consola, es una función impura ya que modifica el entorno
export function limpiarPantalla(): void {
  console.clear();
}

/* normalizarOpcion es una Función pura
    - Devuelve el mismo resultado para los mismos argumentos de entrada.
    - No tiene efectos secundarios, ya que no modifica variables fuera de 
    su alcance local, ni tampoco realiza operaciones de entrada/salida
*/

export function normalizarOpcion(opcion: string): string {
  return opcion
    .toLowerCase() // Convierte todos los caracteres de la cadena a minúscula
    .normalize("NFD") // Método para tratar los caracteres con ascentos y especiales
    .replace(/[\u0300-\u036f]/g, ""); // Elimina los caracteres con ascentos y especiales que quedaron despues de la normalización
}

// Manejar el cierre del programa
rl.on("close", () => {
  console.log("\n¡Adiós!"); // Salir del programa con código de éxito 0
  process.exit(0);
});

// Función de orden superior. Callbacks para manejar el flujo de ejecución de manera más funcional
export function inputPregunta(
  pregunta: string, // Parámetro tipo string que representa la pregunta que se hace al usuario
  callback: (respuesta: string) => void // Párametro tipo función que toma un argumento de tipo string y devuelve un void
): void {
  // Retorno de la función pregunta, que no devuelve ningún valor
  rl.question(pregunta, callback);
} // Se utiliza el método question que toma dos argumentos, pregunta que se muestra al usuario y callback que se ejecuta con la respuesta del usuario
