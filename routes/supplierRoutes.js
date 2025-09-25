const SupplierController = require('../controllers/supplierController');
const express =require('express');
const router = express.Router();

router.post('/create', SupplierController.createSupplier);

module.exports = router;