import { inputPregunta } from "../../utilidades";

export const ingresoTitulo = (callback: (titulo: string) => void): void => {
  inputPregunta("Introduzca el título de la tarea: ", callback);
};
