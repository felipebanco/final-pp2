// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const equipoRotativoController = require('../controllers/equipoRotativoController');




/*** GET ALL PRODUCTS ***/
router.get('/', equipoRotativoController.index);
router.get('/:id', equipoRotativoController.detail);

// /*** CREATE ONE PRODUCT ***/ 
router.get('/add-equipo', equipoRotativoController.create);
router.post('/', equipoRotativoController.store);



// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit', equipoRotativoController.edit);
router.patch('/edit/:id', equipoRotativoController.update);


// /*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', equipoRotativoController.destroy);


module.exports = router;
