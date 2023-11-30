// Funciones de validación

// Array para determinar lo valores válidos para el estado
export const estadosValidos = [
  "pendiente",
  "en curso",
  "terminada",
  "cancelada",
];

// Array para determinar lo valores válidos la dificultad
export const dificultadesValidas = ["facil", "medio", "dificil"];

// Expresión regular por defecto para validar fechas en formato 'AAAA-MM-DD'
export const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// Validar estado toma el estado como parámetro y verifica si está incluido en el array
export function esEstadoValido(
  estado: string,
  estadosValidos: string[]
): boolean {
  return estadosValidos.includes(estado);
}

// Validar si la fecha, utiliza un expresión regular para verificar si la fecha tiene el formato correcto y llam
export function esFechaValida(
  fecha: string,
  expresionRegular: RegExp = dateRegex
): boolean {
  return validarConExpresionRegular(expresionRegular, fecha);
}

function validarConExpresionRegular(
  expresionRegular: RegExp,
  valor: string
): boolean {
  return expresionRegular.test(valor); // .test() verifica si la cadena de texto cumple con el patrón definido por la expresión regular, devuelve true o false
}

// Validar la dificultad
export function esDificultadValida(
  dificultad: string,
  dificultadesValidas: string[]
): boolean {
  return dificultadesValidas.includes(dificultad); // .includes() es método que se utiliza para verificar si el elemento que le pasamos por parámetros esta presente en el array
}
