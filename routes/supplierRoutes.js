const SupplierController = require('../controllers/supplierController');
const express =require('express');
const router = express.Router();

router.post('/create', SupplierController.createSupplier);
router.get('/all', SupplierController.getAllSuppliers);
router.get('/find/:id', SupplierController.getSupplierById)

module.exports = router;