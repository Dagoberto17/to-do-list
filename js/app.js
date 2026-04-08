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
            ></i>
            <!-- Texto de la tarea -->
            <p class="tarea">${nota.descripción}</p>
            <!-- Ícono de eliminar tarea -->
            <i
                class="fa-solid fa-delete-left eliminar"
                aria-label="Eliminar tarea"
                id="eliminar"
            ></i>
            <!-- Ícono de editar tarea -->
            <i
                class="fa-solid fa-pen-to-square editar"
                aria-label="Editar tarea"
                id="editar"
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



