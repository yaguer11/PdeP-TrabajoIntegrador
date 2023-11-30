/* En el Menú predomina el Paradigma Estructurado ya que es más apropiado por las 
 características del menú y por como es la interacción con las tareas.
 Se organiza la lógica en funciones y estructuras de control de flujo
 */

// Importación de funciones relacionadas con las tareas
import { mostrarTareas } from "../ListaTareas/MostrarTareas";
import { buscarTarea } from "../ListaTareas/BuscarTarea";
import { agregarTarea } from "../ListaTareas/AgregarTarea";
import { editarTarea } from "../ListaTareas/EditarTarea";
import { limpiarPantalla, rl } from "../utilidades"; // Importación de la interfaz de lectura de línea

// Definición de la función que muestra el menú principal en consola
export function mostrarMenu(): void {
  console.log("Menú:");
  console.log("(1) Ver mis tareas");
  console.log("(2) Buscar tarea");
  console.log("(3) Agregar tarea");
  console.log("(4) Editar tarea");
  console.log("(5) Salir");
  rl.question("Seleccione una opción: ", manejarOpcionesMenu);
}

// Definición de la función que maneja las opciones del menú
export function manejarOpcionesMenu(opcion: string): void {
  const opcionMinuscula = opcion.toLowerCase(); // Convierte el string que recibe como parámetro a minúsculas
  switch (opcionMinuscula) {
    case "1":
      mostrarTareas();
      break;
    case "2":
      buscarTarea();
      break;
    case "3":
      agregarTarea();
      break;
    case "4":
      editarTarea();
      break;
    case "5":
      rl.question("¿Seguro que desea salir? (S/N): ", (respuesta) => {
        if (respuesta.toLowerCase() === "s") {
          rl.close();
        } else {
          mostrarMenu();
        }
      });
      break;
    default:
      console.log("Opción no válida. Por favor, seleccione una opción válida.");
      mostrarMenu();
  }
}

// Función para volver al menú principal
export function preguntarVolverAlMenu(): void {
  rl.question("\n¿Desea volver al menú principal? (S/N): ", (respuesta) => {
    if (respuesta.toLowerCase() === "s") {
      limpiarPantalla();
      mostrarMenu();
    } else {
      rl.close(); // Si la respuesta no es 's' cierra la interfaz de lectura de línea
    }
  });
}
