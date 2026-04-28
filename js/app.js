// Proyecto: To Do List
// Autor: Dagoberto17
// Descripción: Funcionamiento principal de la app
// Fecha: Marzo 2026

// ========== Constante para guardar todas las notas ==========
const listaNotas = [

];

//Prueba de que el array funcione correctamente
console.log(listaNotas);
//Prueba de que los id funcionan bien
console.log(listaNotas[0].id); //Devuelve "1"
console.log(listaNotas[0].nuevaNota); //Devuelve "Hacer ejercicio"


// ========== Función para cargar notas ==========
function cargarNotas() {
    cargarAlmacenamiento();
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
    let completadaClass;
    let iconClass;

    // Decidimos las clases según el estado con if...else
    if (nota.estado === "completado") {
        completadaClass = "completada";       // activa estilos CSS de tarea completada
        iconClass = "fa-circle-check";        // ícono verde con check
    } else {
        completadaClass = "";                 // no aplica estilos extra
        iconClass = "fa-circle";              // ícono vacío
    }

    let elemento = `
        <!-- ################### Elemento de la lista ################### -->
        <div class="elemento ${completadaClass}">
            <!-- Ícono circular: marcar tarea como completada -->
            <i
                class="fa-regular ${iconClass} circulo"
                aria-label="Marcar tarea como completada"
                onclick="marcarCompletada(this,${nota.id})"
            ></i>
            <!-- Texto de la tarea -->
            <p class="tarea">${nota.descripción}</p>
            <!-- Ícono de eliminar tarea -->
            <i
                class="fa-solid fa-delete-left eliminar"
                aria-label="Eliminar tarea"
                onclick="eliminarNotas(${nota.id})"
            ></i>
            <!-- Ícono de editar tarea -->
            <i
                class="fa-solid fa-pen-to-square editar"
                aria-label="Editar tarea"
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

    guardarAlmacenamiento();
    cargarNotas(); // Recargamos la lista para mostrar las notas actualizadas
    input.value = ""; // Limpiamos el campo de texto después de enviar
}

// ========== Prueba en consola ==========
console.log(listaNotas); // Verificamos que el nuevo objeto se guarde correctamente en el array

// ========== Función eliminar notas ==========
function eliminarNotas(id) {
    let indice = listaNotas.findIndex(nota => nota.id === id); //Obtenemos la posición
    listaNotas.splice(indice, 1); //Indicamos que debe de borrar del array la nota 
    guardarAlmacenamiento();
    cargarNotas(); //Recargamos las notas

}

// ========== Función completar notas ==========
function marcarCompletada(icono, id) {
    let indice = listaNotas.findIndex(nota => nota.id === id);
    const objeto = listaNotas[indice];

    if (objeto.estado === "pendiente") {
        objeto.estado = "completado";
    } else {
        objeto.estado = "pendiente";
    }

    // Regeneramos la lista para que se refleje el estado en el DOM
    guardarAlmacenamiento();
    cargarNotas();
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
            guardarAlmacenamiento();
        }
    });

    // Guardar cambios al perder foco
    input.addEventListener("blur", () => { //Cuando se de click afuera hago lo mismo que al presionar enter
        objeto.descripción = input.value;
        p.textContent = objeto.descripción;
        input.replaceWith(p);
        guardarAlmacenamiento();
    });


}

// ========== Local Storage ==========
// Guardamos en el cache del navegador
function guardarAlmacenamiento() {
    localStorage.setItem("lista_notas", JSON.stringify(listaNotas)); //Guardamos en el localStorage el array listaNotas convertido en cadena
}
//Obtenemos los datos y convertimos de cadena a array de nuevo
function cargarAlmacenamiento() {
    const data = localStorage.getItem("lista_notas"); //Mandamos llama al archivo del localStorage
    if (data) { //Forma abreviada de decir que queremos que data sea un valor valido
        const notasConvertidas = JSON.parse(data); //Convertimos de cadena a Array la data

        // Vaciar el array manteniendo referencia para evitar duplicarlo
        listaNotas.length = 0;

        // Reconstruir cada objeto como instancia de Nota
        for (let nota of notasConvertidas) {
            let nuevaNota = new Nota(nota._descripción); //Creamos una nueva instancia (entrada) en el array con la descripción guardada en el JSON
            nuevaNota.estado = nota._estado;   // Usamos el método set del objeto para asignarle el estado que corresponde en el JSON
            nuevaNota._id = nota._id;          // Asignamos "a la brava" (porque solo hay método get) el id que corresponde en el JSON
            listaNotas.push(nuevaNota); //Damos la orden de que agregue este objeto al array
        }

        // Actualizar contador para que no se repitan IDs
        if (listaNotas.length > 0) { //Verifica que el array no este vació
            Nota.contadorNotas = Math.max(...listaNotas.map(n => n.id));
            // |"..." Indica que sean números "sueltos"  en vez de array   | "listaNotas.map" Recorre el array y va creando sus id dependiendo del objeto
        }
    }
}


// ========== Próximos pasos ==========
// Agregar localStorage para que se guarden las notas de manera local y no se pierdan



