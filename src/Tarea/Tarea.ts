/* Clase Tarea sigue los principios del Paradigma de Programación Orientado a 
   Objetos basado en clases 
    - La encapsulación se logra utilizando propiedades privadas y proporcionando 
      métodos get y set para acceder y modificar el estado. 
*/
export class Tarea {
  public titulo: string;
  public descripcion: string;
  private _estado: string; // propiedad privada
  public fechaCreacion: string;
  public fechaUltimaEdicion: string;
  public fechaVencimiento: string;
  public dificultad: string;

  constructor(
    titulo: string,
    descripcion: string,
    estado: string,
    fechaCreacion: string,
    fechaUltimaEdicion: string,
    fechaVencimiento: string,
    dificultad: string
  ) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this._estado = estado;
    this.fechaCreacion = fechaCreacion;
    this.fechaUltimaEdicion = fechaUltimaEdicion;
    this.fechaVencimiento = fechaVencimiento;
    this.dificultad = dificultad;
  }

  get estado(): string {
    // Getter para obtener el estado
    return this._estado;
  }

  set estado(value: string) {
    // Setter para asignar el estado
    this._estado = value;
  }
}
