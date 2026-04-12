# 📑 CHANGELOG

## [0.1.0] – 2026-03-27

### Added

- Se creó el archivo `index.html` con la estructura completa del proyecto:
  - Título principal.
  - Formulario con campo de texto y botón de envío.
  - Sección de lista con elementos de ejemplo.
- Se añadieron comentarios organizados en cada sección para documentación.
- Se incorporaron íconos de Font Awesome para marcar, editar y eliminar tareas.
- Se agregaron atributos `aria-label` en los íconos para mejorar accesibilidad.

### Changed

- Se reemplazó el archivo `index.html` vacío por la versión estructurada y documentada.

## [0.2.0] – 2026-04-03

### Added

- Se creó el archivo `style.css` con estilos modernos en tonos naranjas:
  - Tipografía Roboto importada desde Google Fonts.
  - Estilos globales con fondo claro y texto gris.
  - Estilos para título, formulario, campo de texto y botón de envío.
  - Animaciones en hover para botón y elementos de la lista.
  - Estilos diferenciados para íconos de completar, eliminar y editar tareas.
  - Sombra y transición en los elementos de la lista para dar efecto moderno.
- Se añadieron animaciones de interacción en íconos:
  - Completar → color naranja y escala.
  - Eliminar → color rojo y escala.
  - Editar → color azul y escala.
- Comentario en HTML para futura interfaz de edición y confirmación de eliminación de tarea.

### Changed

- `index.html`:
  - Se corrigió el placeholder del input: ahora dice _"Escribe una tarea"_ en lugar de _"Escribe una tarea y presiona enviar"_.
  - Se añadieron `id` a los íconos (`circulo`, `eliminar`, `editar`) para diferenciarlos en futuras funciones.
  - Se mejoró la documentación interna con comentarios más claros en cada sección.

### Notes

- El diseño aún **no es responsive**, está optimizado para escritorio con proporciones adaptadas pero sin media queries.
- Esta versión marca la primera integración de estilos CSS junto con la estructura HTML corregida.
- Próximos pasos: implementar la lógica en JavaScript para añadir, editar, eliminar y marcar tareas como completadas.

## [0.3.0] - 2026-04-04

### Added

- Vinculación de todos los archivos `.js` al `index.html`.
- Creación de la clase `Nota` en el archivo `dato.js` para la generación de nuevas tareas en la lista.
- Constante de almacenamiento `listaNotas` para cada objeto `Nota` en el archivo `app.js`.
  - Pruebas de validación de los atributos `id` y `nuevaNota`, con salida en consola para verificación.

### Changed

- Se renombró el archivo `agregar.js` a `dato.js` para mayor claridad en la lógica de datos.

### Notes

- Esta versión marca el inicio de la lógica en JavaScript dentro del proyecto.
- Se realizaron pruebas iniciales de creación y almacenamiento de notas, aún sin integración completa en la interfaz.
- El cambio de nombre de `agregar.js` a `dato.js` busca mayor claridad en la organización de archivos.
- Próximos pasos: implementar funciones completas para añadir, editar, eliminar y marcar tareas como completadas.

## [0.4.0] – 2026-08-04

### Added

- Creación de la función `cargarNotas` para que, en cuanto cargue la página, se actualicen las notas automáticamente.
- Vinculación de la función `cargarNotas` mediante el atributo `onload="cargarNotas()"` al `body` en `index.html`.
- Creación de la función `crearNotasHTML` para dar formato a las notas nuevas que se vayan agregando.
- Creación de la función `agregarNota` para añadir nuevas notas desde el formulario. En caso de que el input `input_texto` esté vacío, salta la alerta _"⚠️ Agrega una nota válida"_.
  - Vinculación de la función `agregarNota` al botón `enviar` en `index.html` mediante un evento `onclick`.
- Validación de que el array `listaNotas` almacene correctamente las notas nuevas con sus respectivos `id`, con salida en consola.

### Changed

- Se renombró el parámetro de la clase `Nota` de `nuevaNota` a `descripción` en el archivo `dato.js`.
  - Se ajustaron los métodos getter y setter para reflejar el nuevo nombre del parámetro `descripción`.
- Se eliminaron todos los elementos de ejemplo en `index.html`, dejando únicamente uno para mantener la estructura del código HTML.

### Notes

- Próximos pasos: implementar funciones completas para editar, eliminar y marcar tareas como completadas.

## [0.5.0] - 2026-12-04

### Added

- Creación de función `eliminarNotas` para eliminar notas en `app.js`.
  - Vinculación de `eliminarNotas` mediante un evento onclick al botón `eliminar` en `index.html` y en la función `crearNotasHTML` en `app.js`.
- Creación de función `marcarCompletada` para completar las notas.
  - Vinculación de `marcarCompletada` en el botón `circulo` en `index.html` y en la función `crearNotasHTML` en `app.js`.
- Implementación de estilos en `style.css` para tareas completadas:
  - Fondo diferenciado y opacidad reducida.
  - Animación ligera al marcar como completada.
  - Texto tachado e itálico para indicar finalización.
  - Ícono de check con color verde sobrio.

### Changed

### Changed

- Se eliminaron los archivos vacíos `eliminar.js` y `modificar.js` al consolidar toda la lógica en `app.js`, simplificando la estructura del proyecto y evitando archivos innecesarios.

### Notes

- Próximos pasos: implementar funciones completas para editar e interfaz para confirmaciones de borrado y edición.
