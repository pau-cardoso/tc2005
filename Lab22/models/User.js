const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, username, password) {
        this.nombre = nombre;
        this.username = username;
        this.password = password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
            .then((passwordEncriptado) => {
                return db.execute(
                    'INSERT INTO usuarios (username, nombre, password) VALUES (?, ?, ?)',
                    [this.username, this.nombre, passwordEncriptado]
                );
            }).catch(err => console.log(err));
    }
    
    static fetchOne(username) {
        return db.execute('SELECT * FROM usuarios WHERE username=?', [username]);
    }
    
    // static fetchOne(username, password) {
    //     return db.execute('SELECT * FROM usuarios WHERE username=? AND password=?', [username, password]);
    // }

    // static editName(newName, id) {
    //     return db.execute('UPDATE perros SET nombre = ? WHERE perros.id = ?', [newName, id]);
    // }
}