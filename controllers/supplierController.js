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
    },

    getAllSuppliers:(req, res) => {
        Supplier.getAll(
            (err, result) => {
                if(err){
                    return res.status(500).json({error: 'Database error'+ err});
                }
                if(result.length === 0){
                    return res.status(404).json({message: 'No Supplier found'});
                }
                res.status(200).json({data:result});
            }
        );
    },

    getSupplierById:(req, res) => {
        const {id} = req.params;
        Supplier.getById(id,
            (err, result) => {
                if(err){
                    return res.status(500).json({error: 'Database error' + err})
                }
                if(result.length === 0){
                    return res.status(404).json({message: 'Supplier not found'});
                }
                res.status(200).json({data:result});
            }
        );
    },

    updateSupplier
}

module.exports = SupplierController;