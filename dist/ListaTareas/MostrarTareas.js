"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarTareas = void 0;
// MostrarTareas.ts
// Importaciones
const Menu_1 = require("../Menu/Menu");
const ListaTareas_1 = require("./ListaTareas");
function mostrarTareas() {
    if (ListaTareas_1.listaTareas.length === 0) {
        console.log("No hay tareas para mostrar.");
    }
    else {
        console.log("\nTareas:");
        // Utilizamos forEach para iterar sobre las tareas en el Array
        ListaTareas_1.listaTareas.forEach((tarea, indice) => {
            console.log(`${indice + 1}. ${tarea.titulo} - ${tarea.estado}`);
        });
    }
    (0, Menu_1.preguntarVolverAlMenu)();
}
exports.mostrarTareas = mostrarTareas;
