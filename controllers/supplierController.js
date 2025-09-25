const Supplier = require('../model/supplierModel');

const SupplierController = {
    createSupplier: (req, res) => {
        const {name, contact} = req.body;
        Supplier.create(
            {name, contact},
            (err, result) => {
                if(err){
                    return res.status(500).json({error: 'Database error'});
                }
                res.status(201).json({message: 'Supplier created', data: result});
            }
        );
    }
}

module.exports = SupplierController;