const db = require('../util/database');


module.exports = class Perro {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO perros (nombre, imagen) VALUES (?, ?)',
                        [this.nombre, this.imagen]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM perros');
    }
    
    static fetchOne(id) {
        return db.execute('SELECT * FROM perros WHERE id=?', [id]);
    }

    // static editName(newName, id) {
    //     return db.execute('UPDATE perros SET nombre = ? WHERE perros.id = ?'), [newName, id];
    // }
}