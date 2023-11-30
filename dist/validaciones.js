"use strict";
// Funciones de validación
Object.defineProperty(exports, "__esModule", { value: true });
exports.esDificultadValida = exports.esFechaValida = exports.esEstadoValido = exports.dateRegex = exports.dificultadesValidas = exports.estadosValidos = void 0;
// Array para determinar lo valores válidos para el estado
exports.estadosValidos = [
    "pendiente",
    "en curso",
    "terminada",
    "cancelada",
];
// Array para determinar lo valores válidos la dificultad
exports.dificultadesValidas = ["facil", "medio", "dificil"];
// Expresión regular por defecto para validar fechas en formato 'AAAA-MM-DD'
exports.dateRegex = /^\d{4}-\d{2}-\d{2}$/;
// Validar estado toma el estado como parámetro y verifica si está incluido en el array
function esEstadoValido(estado, estadosValidos) {
    return estadosValidos.includes(estado);
}
exports.esEstadoValido = esEstadoValido;
// Validar si la fecha, utiliza un expresión regular para verificar si la fecha tiene el formato correcto y llam
function esFechaValida(fecha, expresionRegular = exports.dateRegex) {
    return validarConExpresionRegular(expresionRegular, fecha);
}
exports.esFechaValida = esFechaValida;
function validarConExpresionRegular(expresionRegular, valor) {
    return expresionRegular.test(valor); // .test() verifica si la cadena de texto cumple con el patrón definido por la expresión regular, devuelve true o false
}
// Validar la dificultad
function esDificultadValida(dificultad, dificultadesValidas) {
    return dificultadesValidas.includes(dificultad); // .includes() es método que se utiliza para verificar si el elemento que le pasamos por parámetros esta presente en el array
}
exports.esDificultadValida = esDificultadValida;
