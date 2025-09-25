const db = require('../config/database');

class Supplier{
    static create(supplierData, result){
        const sql = 'INSERT INTO suppliers(name,contact) VALUES(?,?)';
        db.query(sql,
            [supplierData.name, supplierData.contact],
        );
    }
}

module.exports = Supplier