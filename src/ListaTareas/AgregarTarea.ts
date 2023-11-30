// AgregarTarea.ts
import { Tarea } from "../Tarea/Tarea";
import { ingresoTitulo } from "./AgregarTarea/Titulo";
import { ingresoDescripcion } from "./AgregarTarea/Descripcion";
import { ingresoEstado } from "./AgregarTarea/Estado";
import { ingresoFechaVencimiento } from "./AgregarTarea/Fecha";
import { ingresoDificultad } from "./AgregarTarea/Dificultad";
import { agregarTareaALista } from "./ListaTareas";
import { preguntarVolverAlMenu } from "../Menu/Menu";

// Funciones para obtener cada parte de la tarea
const obtenerTitulo = (callback: (titulo: string) => void) =>
  ingresoTitulo(callback); // Se llama a la función ingreso títtulo y se le pasa el argumento callback

const obtenerDescripcion = (
  titulo: string,
  callback: (titulo: string, descripcion: string) => void
) => ingresoDescripcion(titulo, (descripcion) => callback(titulo, descripcion));

const obtenerEstado = (
  titulo: string,
  descripcion: string,
  callback: (titulo: string, descripcion: string, estado: string) => void
) =>
  ingresoEstado(titulo, descripcion, (estado) =>
    callback(titulo, descripcion, estado)
  );

const obtenerFechaVencimiento = (
  titulo: string,
  descripcion: string,
  estado: string,
  callback: (
    titulo: string,
    descripcion: string,
    estado: string,
    fechaVencimiento: string
  ) => void
) =>
  ingresoFechaVencimiento(titulo, descripcion, estado, (fechaVencimiento) =>
    callback(titulo, descripcion, estado, fechaVencimiento)
  );

const obtenerDificultad = (
  titulo: string,
  descripcion: string,
  estado: string,
  fechaVencimiento: string,
  callback: (result: { tarea: Tarea | null; mensaje: string }) => void
) =>
  ingresoDificultad(
    titulo,
    descripcion,
    estado,
    fechaVencimiento,
    (resultado) => callback(resultado)
  );

// Flujo principal para agregar una tarea
export const agregarTarea = (): void => {
  obtenerTitulo((titulo) =>
    obtenerDescripcion(titulo, (titulo, descripcion) =>
      obtenerEstado(titulo, descripcion, (titulo, descripcion, estado) =>
        obtenerFechaVencimiento(
          titulo,
          descripcion,
          estado,
          (titulo, descripcion, estado, fechaVencimiento) =>
            obtenerDificultad(
              titulo,
              descripcion,
              estado,
              fechaVencimiento,
              (resultado) => {
                //  Destructuración de objeto resultado, se extrae las propiedades tarea y mensaje y las asigna a las variables independientes
                const { tarea, mensaje } = resultado;
                if (tarea) {
                  agregarTareaALista(tarea);
                }
                console.log(`\n${mensaje}`);
                preguntarVolverAlMenu();
              }
            )
        )
      )
    )
  );
};
