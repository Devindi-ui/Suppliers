const db = require('../config/database');

class Supplier{
    static create(supplierData, result){
        const sql = 'INSERT INTO suppliers(name,contact) VALUES(?,?)';
        db.query(sql,
            [supplierData.name, supplierData.contact],
        );
    }

    static getAll(result){
        const sql = 'SELECT * FROM suppliers';
        db.query(sql, result);
    }

    static getById(id, result){
        const sql = 'SELECT * FROM suppliers WHERE id = ?';
        db.query(sql, [id], result);
    }

    static update(id, supplierData, result){
        const sql = 'UPDATE users SET name = ?, contact=? WHERE id = ?';
        db.query(sql, [supplierData.name, supplierData.contact, id], result);
    }
}

module.exports = Supplier;