import { inputPregunta } from "../../utilidades";
import { preguntarVolverAlMenu } from "../../Menu/Menu";
import { normalizarOpcion } from "../../utilidades";
import { esEstadoValido, estadosValidos } from "../../validaciones";

export const ingresoEstado = (
  titulo: string,
  descripcion: string,
  callback: (estado: string) => void
): void => {
  inputPregunta(
    "Introduzca el estado de la tarea (Pendiente/En curso/Terminada/Cancelada): ",
    (estado) => {
      estado = normalizarOpcion(estado);
      if (esEstadoValido(estado, estadosValidos)) {
        callback(estado);
      } else {
        console.log(
          "Estado no válido. Debe ser 'Pendiente', 'En curso', 'Terminada' o 'Cancelada'."
        );
        preguntarVolverAlMenu();
      }
    }
  );
};
