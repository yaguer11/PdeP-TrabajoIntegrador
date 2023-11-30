// BuscarTarea.ts
import { preguntarVolverAlMenu } from "../Menu/Menu";
import { listaTareas } from "./ListaTareas";
import { rl } from "../utilidades";

// Definición de la función buscar tarea
export function buscarTarea(): void {
  // Preguntar al usuario el título de la tarea a buscar
  rl.question("Introduzca el título de la tarea a buscar: ", (titulo) => {
    // Buscar la tarea en la lista de tareas
    const tareaEncontrada = listaTareas.find(
      (tarea) => tarea.titulo === titulo
    );

    if (tareaEncontrada) {
      // Si la tarea se encuentra, mostrar la información
      console.log("\nTarea encontrada:");
      console.log(`Título: ${tareaEncontrada.titulo}`);
      console.log(`Descripción: ${tareaEncontrada.descripcion}`);
      console.log(`Estado: ${tareaEncontrada.estado}`); // Se llama al get estado()
      console.log(`Fecha de creación: ${tareaEncontrada.fechaCreacion}`);
      console.log(
        `Fecha de última edición: ${tareaEncontrada.fechaUltimaEdicion}`
      );
      console.log(`Fecha de vencimiento: ${tareaEncontrada.fechaVencimiento}`);
      console.log(`Dificultad: ${tareaEncontrada.dificultad}`);
    } else {
      // Si la tarea no se encuentra, mostrar un mensaje
      console.log("Tarea no encontrada.");
    }

    // Llamar a la función para volver al menú principal
    preguntarVolverAlMenu();
  });
}
