// MostrarTareas.ts
// Importaciones
import { preguntarVolverAlMenu } from "../Menu/Menu";
import { listaTareas } from "./ListaTareas";

export function mostrarTareas(): void {
  if (listaTareas.length === 0) {
    console.log("No hay tareas para mostrar.");
  } else {
    console.log("\nTareas:");

    // Utilizamos forEach para iterar sobre las tareas en el Array
    listaTareas.forEach((tarea, indice) => {
      console.log(`${indice + 1}. ${tarea.titulo} - ${tarea.estado}`);
    });
  }

  preguntarVolverAlMenu();
}
