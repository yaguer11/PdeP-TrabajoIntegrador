// EditarTarea.ts
import { preguntarVolverAlMenu } from "../Menu/Menu";
import { normalizarOpcion } from "../utilidades";
import { esEstadoValido, estadosValidos } from "../validaciones";
import { Tarea } from "../Tarea/Tarea";
import { listaTareas } from "./ListaTareas";
import { rl } from "../utilidades";

// Función para encontrar una tarea por título en el array
function encontrarTareaPorTitulo(titulo: string): Tarea | undefined {
  return listaTareas.find(
    (tarea) => normalizarOpcion(tarea.titulo) === normalizarOpcion(titulo)
  );
}

// Función para editar una tarea
export function editarTarea(): void {
  // Preguntar al usuario el título de la tarea a editar
  rl.question("Introduzca el título de la tarea a editar: ", (titulo) => {
    // Buscar la tarea en el array
    const tareaEncontrada = encontrarTareaPorTitulo(titulo);

    if (tareaEncontrada) {
      // Pregunta al usuario el nuevo estado de la tarea
      rl.question(
        "Introduzca el nuevo estado de la tarea (Pendiente/En curso/Terminada/Cancelada): ",
        (estado) => {
          estado = normalizarOpcion(estado); // Normaliza el nuevo estado
          if (esEstadoValido(estado, estadosValidos)) {
            // Valida el nuevo estado
            // Actualizar las propiedades de la tarea correspondiente
            tareaEncontrada.estado = estado;
            tareaEncontrada.fechaUltimaEdicion =
              new Date().toLocaleDateString();
            console.log("\nTarea editada correctamente.");
          } else {
            console.log(
              "Estado no válido. Debe ser 'Pendiente', 'En curso', 'Terminada' o 'Cancelada'."
            );
          }
          preguntarVolverAlMenu();
        }
      );
    } else {
      // Si la tarea no se encuentra, mostrar un mensaje
      console.log("Tarea no encontrada.");
      preguntarVolverAlMenu();
    }
  });
}
