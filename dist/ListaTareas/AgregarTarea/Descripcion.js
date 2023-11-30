"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresoDescripcion = void 0;
// Importa la función externa inputPregunta
const utilidades_1 = require("../../utilidades");
const ingresoDescripcion = (titulo, callback) => {
    (0, utilidades_1.inputPregunta)("Introduzca la descripción de la tarea: ", (respuesta) => {
        const descripcion = respuesta.trim(); // Elimina estacios en blanco al principio y al final
        callback(titulo, descripcion);
    });
};
exports.ingresoDescripcion = ingresoDescripcion;
