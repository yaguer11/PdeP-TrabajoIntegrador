"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarTarea = void 0;
const Titulo_1 = require("./AgregarTarea/Titulo");
const Descripcion_1 = require("./AgregarTarea/Descripcion");
const Estado_1 = require("./AgregarTarea/Estado");
const Fecha_1 = require("./AgregarTarea/Fecha");
const Dificultad_1 = require("./AgregarTarea/Dificultad");
const ListaTareas_1 = require("./ListaTareas");
const Menu_1 = require("../Menu/Menu");
// Funciones para obtener cada parte de la tarea
const obtenerTitulo = (callback) => (0, Titulo_1.ingresoTitulo)(callback); // Se llama a la función ingreso títtulo y se le pasa el argumento callback
const obtenerDescripcion = (titulo, callback) => (0, Descripcion_1.ingresoDescripcion)(titulo, (descripcion) => callback(titulo, descripcion));
const obtenerEstado = (titulo, descripcion, callback) => (0, Estado_1.ingresoEstado)(titulo, descripcion, (estado) => callback(titulo, descripcion, estado));
const obtenerFechaVencimiento = (titulo, descripcion, estado, callback) => (0, Fecha_1.ingresoFechaVencimiento)(titulo, descripcion, estado, (fechaVencimiento) => callback(titulo, descripcion, estado, fechaVencimiento));
const obtenerDificultad = (titulo, descripcion, estado, fechaVencimiento, callback) => (0, Dificultad_1.ingresoDificultad)(titulo, descripcion, estado, fechaVencimiento, (resultado) => callback(resultado));
// Flujo principal para agregar una tarea
const agregarTarea = () => {
    obtenerTitulo((titulo) => obtenerDescripcion(titulo, (titulo, descripcion) => obtenerEstado(titulo, descripcion, (titulo, descripcion, estado) => obtenerFechaVencimiento(titulo, descripcion, estado, (titulo, descripcion, estado, fechaVencimiento) => obtenerDificultad(titulo, descripcion, estado, fechaVencimiento, (resultado) => {
        //  Destructuración de objeto resultado, se extrae las propiedades tarea y mensaje y las asigna a las variables independientes
        const { tarea, mensaje } = resultado;
        if (tarea) {
            (0, ListaTareas_1.agregarTareaALista)(tarea);
        }
        console.log(`\n${mensaje}`);
        (0, Menu_1.preguntarVolverAlMenu)();
    })))));
};
exports.agregarTarea = agregarTarea;
