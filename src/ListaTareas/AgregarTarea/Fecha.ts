import { inputPregunta } from "../../utilidades";
import { preguntarVolverAlMenu } from "../../Menu/Menu";
import { esFechaValida, dateRegex } from "../../validaciones";

export const ingresoFechaVencimiento = (
  titulo: string,
  descripcion: string,
  estado: string,
  callback: (fechaVencimiento: string) => void
): void => {
  inputPregunta(
    "Introduzca la fecha de vencimiento (AAAA-MM-DD): ",
    (fechaVencimiento) => {
      if (esFechaValida(fechaVencimiento, dateRegex)) {
        callback(fechaVencimiento);
      } else {
        console.log(
          "Fecha de vencimiento no válida. Debe estar en formato 'AAAA-MM-DD'."
        );
        preguntarVolverAlMenu();
      }
    }
  );
};
