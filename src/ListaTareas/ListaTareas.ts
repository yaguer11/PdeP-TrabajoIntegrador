// ListaTareas.ts
import { Tarea } from "../Tarea/Tarea";

// Exportación de la variable listaTareas que es un array de objetos 'Tarea'
export let listaTareas: Tarea[] = [];

// Función para agregar nuevas tareas al array
export function agregarTareaALista(nuevaTarea: Tarea): void {
  listaTareas.push(nuevaTarea); // Agrega un elemento al final del array
}
