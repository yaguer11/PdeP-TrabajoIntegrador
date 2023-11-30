// Importa la función externa inputPregunta
import { inputPregunta } from "../../utilidades";

export const ingresoDescripcion = (
  titulo: string,
  callback: (titulo: string, descripcion: string) => void
): void => {
  inputPregunta("Introduzca la descripción de la tarea: ", (respuesta) => {
    const descripcion = respuesta.trim(); // Elimina estacios en blanco al principio y al final
    callback(titulo, descripcion);
  });
};
