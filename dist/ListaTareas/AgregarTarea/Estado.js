"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresoEstado = void 0;
const utilidades_1 = require("../../utilidades");
const Menu_1 = require("../../Menu/Menu");
const utilidades_2 = require("../../utilidades");
const validaciones_1 = require("../../validaciones");
const ingresoEstado = (titulo, descripcion, callback) => {
    (0, utilidades_1.inputPregunta)("Introduzca el estado de la tarea (Pendiente/En curso/Terminada/Cancelada): ", (estado) => {
        estado = (0, utilidades_2.normalizarOpcion)(estado);
        if ((0, validaciones_1.esEstadoValido)(estado, validaciones_1.estadosValidos)) {
            callback(estado);
        }
        else {
            console.log("Estado no válido. Debe ser 'Pendiente', 'En curso', 'Terminada' o 'Cancelada'.");
            (0, Menu_1.preguntarVolverAlMenu)();
        }
    });
};
exports.ingresoEstado = ingresoEstado;
