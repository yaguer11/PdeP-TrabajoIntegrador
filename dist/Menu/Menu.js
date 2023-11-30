"use strict";
/* En el Menú predomina el Paradigma Estructurado ya que es más apropiado por las
 características del menú y por como es la interacción con las tareas.
 Se organiza la lógica en funciones y estructuras de control de flujo
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.preguntarVolverAlMenu = exports.manejarOpcionesMenu = exports.mostrarMenu = void 0;
// Importación de funciones relacionadas con las tareas
const MostrarTareas_1 = require("../ListaTareas/MostrarTareas");
const BuscarTarea_1 = require("../ListaTareas/BuscarTarea");
const AgregarTarea_1 = require("../ListaTareas/AgregarTarea");
const EditarTarea_1 = require("../ListaTareas/EditarTarea");
const utilidades_1 = require("../utilidades"); // Importación de la interfaz de lectura de línea
// Definición de la función que muestra el menú principal en consola
function mostrarMenu() {
    console.log("Menú:");
    console.log("(1) Ver mis tareas");
    console.log("(2) Buscar tarea");
    console.log("(3) Agregar tarea");
    console.log("(4) Editar tarea");
    console.log("(5) Salir");
    utilidades_1.rl.question("Seleccione una opción: ", manejarOpcionesMenu);
}
exports.mostrarMenu = mostrarMenu;
// Definición de la función que maneja las opciones del menú
function manejarOpcionesMenu(opcion) {
    const opcionMinuscula = opcion.toLowerCase(); // Convierte el string que recibe como parámetro a minúsculas
    switch (opcionMinuscula) {
        case "1":
            (0, MostrarTareas_1.mostrarTareas)();
            break;
        case "2":
            (0, BuscarTarea_1.buscarTarea)();
            break;
        case "3":
            (0, AgregarTarea_1.agregarTarea)();
            break;
        case "4":
            (0, EditarTarea_1.editarTarea)();
            break;
        case "5":
            utilidades_1.rl.question("¿Seguro que desea salir? (S/N): ", (respuesta) => {
                if (respuesta.toLowerCase() === "s") {
                    utilidades_1.rl.close();
                }
                else {
                    mostrarMenu();
                }
            });
            break;
        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
            mostrarMenu();
    }
}
exports.manejarOpcionesMenu = manejarOpcionesMenu;
// Función para volver al menú principal
function preguntarVolverAlMenu() {
    utilidades_1.rl.question("\n¿Desea volver al menú principal? (S/N): ", (respuesta) => {
        if (respuesta.toLowerCase() === "s") {
            (0, utilidades_1.limpiarPantalla)();
            mostrarMenu();
        }
        else {
            utilidades_1.rl.close(); // Si la respuesta no es 's' cierra la interfaz de lectura de línea
        }
    });
}
exports.preguntarVolverAlMenu = preguntarVolverAlMenu;
