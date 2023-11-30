"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarTarea = void 0;
// BuscarTarea.ts
const Menu_1 = require("../Menu/Menu");
const ListaTareas_1 = require("./ListaTareas");
const utilidades_1 = require("../utilidades");
// Definición de la función buscar tarea
function buscarTarea() {
    // Preguntar al usuario el título de la tarea a buscar
    utilidades_1.rl.question("Introduzca el título de la tarea a buscar: ", (titulo) => {
        // Buscar la tarea en la lista de tareas
        const tareaEncontrada = ListaTareas_1.listaTareas.find((tarea) => tarea.titulo === titulo);
        if (tareaEncontrada) {
            // Si la tarea se encuentra, mostrar la información
            console.log("\nTarea encontrada:");
            console.log(`Título: ${tareaEncontrada.titulo}`);
            console.log(`Descripción: ${tareaEncontrada.descripcion}`);
            console.log(`Estado: ${tareaEncontrada.estado}`); // Se llama al get estado()
            console.log(`Fecha de creación: ${tareaEncontrada.fechaCreacion}`);
            console.log(`Fecha de última edición: ${tareaEncontrada.fechaUltimaEdicion}`);
            console.log(`Fecha de vencimiento: ${tareaEncontrada.fechaVencimiento}`);
            console.log(`Dificultad: ${tareaEncontrada.dificultad}`);
        }
        else {
            // Si la tarea no se encuentra, mostrar un mensaje
            console.log("Tarea no encontrada.");
        }
        // Llamar a la función para volver al menú principal
        (0, Menu_1.preguntarVolverAlMenu)();
    });
}
exports.buscarTarea = buscarTarea;
