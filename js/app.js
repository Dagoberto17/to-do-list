// Proyecto: To Do List
// Autor: Dagoberto17
// Descripción: Funcionamiento principal de la app
// Fecha: Marzo 2026

// ========== Constante para guardar todas las notas ==========
const listaNotas = [
    new Nota("Hacer ejercicio"),
    new Nota("Pagar renta"),
    new Nota("Poner gasolina"),
    new Nota("Agregar modo oscuro a esta app")
];

//Prueba de que el array funcione correctamente
console.log(listaNotas);
//Prueba de que los id funcionan bien
console.log(listaNotas[0].id); //Devuelve "1"
console.log(listaNotas[0].nuevaNota); //Devuelve "Hacer ejercicio"


// ========== Función para cargar notas ==========
function cargarNotas() {
    let notasHTML = "";
    // Recorremos el array listaNotas y generamos el HTML de cada nota
    for (let nota of listaNotas) {
        notasHTML += crearNotasHTML(nota);
    }
    // Insertamos el contenido generado en la sección con id="lista"
    document.getElementById("lista").innerHTML = notasHTML;
}

// ========== Función para crear el elemento HTML de cada nota ==========
function crearNotasHTML(nota) {
    let elemento = `
        <!-- ################### Elemento de la lista ################### -->
        <div class="elemento">
            <!-- Ícono circular: marcar tarea como completada -->
            <i
                class="fa-regular fa-circle circulo"
                aria-label="Marcar tarea como completada"
                id="circulo"
                onclick="marcarCompletada(this)"
            ></i>
            <!-- Texto de la tarea -->
            <p class="tarea" id="tarea">${nota.descripción}</p>
            <!-- Ícono de eliminar tarea -->
            <i
                class="fa-solid fa-delete-left eliminar"
                aria-label="Eliminar tarea"
                id="eliminar"
                onclick="eliminarNotas(${nota.id})"
            ></i>
            <!-- Ícono de editar tarea -->
            <i
                class="fa-solid fa-pen-to-square editar"
                aria-label="Editar tarea"
                id="editar"
                onclick="editarNotas(this,${nota.id})"
            ></i>
        </div>`;
    return elemento;
}

// ========== Función para agregar nuevas notas al array ==========
function agregarNota() {
    const input = document.getElementById("input_texto");
    let valor = input.value.trim(); // Obtenemos el valor del input y eliminamos espacios en blanco

    if (valor !== "") {
        listaNotas.push(new Nota(valor)); // Agregamos la nueva nota al array
    } else {
        alert("⚠️ Agrega una nota válida"); // Si el input está vacío, mostramos alerta
    }

    cargarNotas(); // Recargamos la lista para mostrar las notas actualizadas
    input.value = ""; // Limpiamos el campo de texto después de enviar
}

// ========== Prueba en consola ==========
console.log(listaNotas); // Verificamos que el nuevo objeto se guarde correctamente en el array

// ========== Función eliminar notas ==========
function eliminarNotas(id) {
    let indice = listaNotas.findIndex(nota => nota.id === id); //Obtenemos la posición
    listaNotas.splice(indice, 1); //Indicamos que debe de borrar del array la nota 
    cargarNotas(); //Recargamos las notas
}

// ========== Función completar notas ==========
function marcarCompletada(icono) {
    const tarea = document.querySelector(".tarea");
    tarea.classList.toggle("completada"); // Alterna la clase "completada" en el texto (tachado/normal)

    if (icono.classList.contains("fa-circle")) { // Si el ícono actual es círculo vacío
        icono.classList.add("fa-circle-check"); // Agrega el ícono de círculo con check
        icono.classList.remove("fa-circle");    // Quita el ícono de círculo vacío
    } else {
        icono.classList.add("fa-circle");       // Regresa al ícono de círculo vacío
        icono.classList.remove("fa-circle-check"); // Quita el ícono de círculo con check
    }

    const elemento = icono.parentElement; //Obtenemos el objeto padre (en este caso el div con clase "elemento")
    elemento.classList.toggle("completada"); //Le agregamos la clase "completada"
}

// Diferencia:
// toggle → alterna (agrega o quita según el caso)
// add → siempre agrega la clase (si ya está, no la duplica)

// ========== Función editar notas ==========
function editarNotas(icono, id) {
    let indice = listaNotas.findIndex(nota => nota.id === id); //Obtenemos ID
    const objeto = listaNotas[indice]; //Asignamos el objeto seleccionado a la variable

    // Subir al contenedor y buscar el <p>
    const div = icono.parentElement; //Obtenemos el div principal
    const p = div.querySelector(".tarea"); //Obtenemos el elemento con la clase tarea

    // Crear input dinámico
    let input = document.createElement("input"); //Creamos input
    input.type = "text"; // Le damos tipo texto
    input.value = objeto.descripción; //Asignamos de valor el parámetro descripción del objeto
    input.className = "tarea"; //Le damos la clase de tarea

    // Reemplazar el <p> por el input
    p.replaceWith(input);//Reemplazamos el tag de <p> por el de <input>

    //Hacemos que al momento de dar click al icono se seleccione de manera automática el nuevo input
    setTimeout(() => {
        input.focus();
        input.select();
    }, 0);

    // Guardar cambios al presionar Enter
    input.addEventListener("keydown", (tecla) => { //Cuando demos click a la tecla enter
        if (tecla.key === "Enter") {
            objeto.descripción = input.value; //Hacemos que el valor del input se convierta en la descripción del objeto 
            p.textContent = objeto.descripción; //Hacemos que el contenido de p sea igual a la descripción del objeto
            input.replaceWith(p); //Regresamos de <input> a <p>
        }
    });

    // Guardar cambios al perder foco
    input.addEventListener("blur", () => { //Cuando se de click afuera hago lo mismo que al presionar enter
        objeto.descripción = input.value;
        p.textContent = objeto.descripción;
        input.replaceWith(p);
    });
}
// ========== Próximos pasos ==========
// Corregir de cuando se elimina/agrega una nota se borran los estilos de tarea completada
// Agregar localStorage para que se guarden las notas de manera local y no se pierdan



