"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarTarea = void 0;
// EditarTarea.ts
const Menu_1 = require("../Menu/Menu");
const utilidades_1 = require("../utilidades");
const validaciones_1 = require("../validaciones");
const ListaTareas_1 = require("./ListaTareas");
const utilidades_2 = require("../utilidades");
// Función para encontrar una tarea por título en el array
function encontrarTareaPorTitulo(titulo) {
    return ListaTareas_1.listaTareas.find((tarea) => (0, utilidades_1.normalizarOpcion)(tarea.titulo) === (0, utilidades_1.normalizarOpcion)(titulo));
}
// Función para editar una tarea
function editarTarea() {
    // Preguntar al usuario el título de la tarea a editar
    utilidades_2.rl.question("Introduzca el título de la tarea a editar: ", (titulo) => {
        // Buscar la tarea en el array
        const tareaEncontrada = encontrarTareaPorTitulo(titulo);
        if (tareaEncontrada) {
            // Pregunta al usuario el nuevo estado de la tarea
            utilidades_2.rl.question("Introduzca el nuevo estado de la tarea (Pendiente/En curso/Terminada/Cancelada): ", (estado) => {
                estado = (0, utilidades_1.normalizarOpcion)(estado); // Normaliza el nuevo estado
                if ((0, validaciones_1.esEstadoValido)(estado, validaciones_1.estadosValidos)) {
                    // Valida el nuevo estado
                    // Actualizar las propiedades de la tarea correspondiente
                    tareaEncontrada.estado = estado;
                    tareaEncontrada.fechaUltimaEdicion =
                        new Date().toLocaleDateString();
                    console.log("\nTarea editada correctamente.");
                }
                else {
                    console.log("Estado no válido. Debe ser 'Pendiente', 'En curso', 'Terminada' o 'Cancelada'.");
                }
                (0, Menu_1.preguntarVolverAlMenu)();
            });
        }
        else {
            // Si la tarea no se encuentra, mostrar un mensaje
            console.log("Tarea no encontrada.");
            (0, Menu_1.preguntarVolverAlMenu)();
        }
    });
}
exports.editarTarea = editarTarea;
