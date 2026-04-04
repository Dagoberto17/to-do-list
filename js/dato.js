// Proyecto: To Do List
// Autor: Dagoberto17
// Descripción: Función de agregar nuevas notas
// Fecha: Marzo 2026

// ============ Clase para agregar ==============

class Nota {
    static contadorNotas = 0; //Sirve para contabilizar el número de notas (indexar)
    constructor(nuevaNota) {
        this._nuevaNota = nuevaNota;
        this._id = ++Nota.contadorNotas;
    }
    //Método get para visualizar las notas y el id
    get nuevaNota() {
        return this._nuevaNota;
    }
    get id() {
        return this._id;
    }
    //Método set para editar las notas
    set nuevaNota(nuevaNota) {
        this._nuevaNota = nuevaNota;
    }
};


