"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresoTitulo = void 0;
const utilidades_1 = require("../../utilidades");
const ingresoTitulo = (callback) => {
    (0, utilidades_1.inputPregunta)("Introduzca el título de la tarea: ", callback);
};
exports.ingresoTitulo = ingresoTitulo;
