"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresoFechaVencimiento = void 0;
const utilidades_1 = require("../../utilidades");
const Menu_1 = require("../../Menu/Menu");
const validaciones_1 = require("../../validaciones");
const ingresoFechaVencimiento = (titulo, descripcion, estado, callback) => {
    (0, utilidades_1.inputPregunta)("Introduzca la fecha de vencimiento (AAAA-MM-DD): ", (fechaVencimiento) => {
        if ((0, validaciones_1.esFechaValida)(fechaVencimiento, validaciones_1.dateRegex)) {
            callback(fechaVencimiento);
        }
        else {
            console.log("Fecha de vencimiento no válida. Debe estar en formato 'AAAA-MM-DD'.");
            (0, Menu_1.preguntarVolverAlMenu)();
        }
    });
};
exports.ingresoFechaVencimiento = ingresoFechaVencimiento;
