"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresoDificultad = void 0;
const utilidades_1 = require("../../utilidades");
const validaciones_1 = require("../../validaciones");
const Tarea_1 = require("../../Tarea/Tarea");
const ingresoDificultad = (titulo, descripcion, estado, fechaVencimiento, callback) => {
    (0, utilidades_1.inputPregunta)("Introduzca la dificultad de la tarea (Facil/Medio/Dificil): ", (dificultad) => {
        dificultad = (0, utilidades_1.normalizarOpcion)(dificultad);
        if ((0, validaciones_1.esDificultadValida)(dificultad, validaciones_1.dificultadesValidas)) {
            const currentDate = new Date().toLocaleDateString();
            const tarea = new Tarea_1.Tarea(titulo, descripcion, estado, currentDate, currentDate, fechaVencimiento, dificultad);
            callback({
                tarea,
                mensaje: "Tarea agregada correctamente.",
            });
        }
        else {
            callback({
                tarea: null,
                mensaje: "Dificultad no válida. Debe ser 'Facil', 'Medio' o 'Dificil'.",
            });
        }
    });
};
exports.ingresoDificultad = ingresoDificultad;
