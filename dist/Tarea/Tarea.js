"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
/* Clase Tarea sigue los principios del Paradigma de Programación Orientado a
   Objetos basado en clases
    - La encapsulación se logra utilizando propiedades privadas y proporcionando
      métodos get y set para acceder y modificar el estado.
*/
class Tarea {
    constructor(titulo, descripcion, estado, fechaCreacion, fechaUltimaEdicion, fechaVencimiento, dificultad) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this._estado = estado;
        this.fechaCreacion = fechaCreacion;
        this.fechaUltimaEdicion = fechaUltimaEdicion;
        this.fechaVencimiento = fechaVencimiento;
        this.dificultad = dificultad;
    }
    get estado() {
        // Getter para obtener el estado
        return this._estado;
    }
    set estado(value) {
        // Setter para asignar el estado
        this._estado = value;
    }
}
exports.Tarea = Tarea;
