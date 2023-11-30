"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarTareaALista = exports.listaTareas = void 0;
// Exportación de la variable listaTareas que es un array de objetos 'Tarea'
exports.listaTareas = [];
// Función para agregar nuevas tareas al array
function agregarTareaALista(nuevaTarea) {
    exports.listaTareas.push(nuevaTarea); // Agrega un elemento al final del array
}
exports.agregarTareaALista = agregarTareaALista;
