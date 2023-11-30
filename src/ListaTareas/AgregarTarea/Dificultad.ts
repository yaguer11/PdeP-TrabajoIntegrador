import { inputPregunta, normalizarOpcion } from "../../utilidades";
import { esDificultadValida, dificultadesValidas } from "../../validaciones";
import { Tarea } from "../../Tarea/Tarea";

export const ingresoDificultad = (
  titulo: string,
  descripcion: string,
  estado: string,
  fechaVencimiento: string,
  callback: (result: { tarea: Tarea | null; mensaje: string }) => void
): void => {
  inputPregunta(
    "Introduzca la dificultad de la tarea (Facil/Medio/Dificil): ",
    (dificultad) => {
      dificultad = normalizarOpcion(dificultad);
      if (esDificultadValida(dificultad, dificultadesValidas)) {
        const currentDate = new Date().toLocaleDateString();
        const tarea = new Tarea(
          titulo,
          descripcion,
          estado,
          currentDate,
          currentDate,
          fechaVencimiento,
          dificultad
        );
        callback({
          tarea,
          mensaje: "Tarea agregada correctamente.",
        });
      } else {
        callback({
          tarea: null,
          mensaje:
            "Dificultad no válida. Debe ser 'Facil', 'Medio' o 'Dificil'.",
        });
      }
    }
  );
};
