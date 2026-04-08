// Proyecto: To Do List
// Autor: Dagoberto17
// Descripción: Función de agregar nuevas notas
// Fecha: Marzo 2026

// ============ Clase para agregar ==============

class Nota {
    static contadorNotas = 0;
    constructor(descripción) {
        this._descripción = descripción;
        this._id = ++Nota.contadorNotas;
    }
    get descripción() {
        return this._descripción;
    }
    get id() {
        return this._id;
    }
    set descripción(descripción) {
        this._descripción = descripción;
    }
}


