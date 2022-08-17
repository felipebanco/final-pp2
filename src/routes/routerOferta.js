// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const ofertaController = require('../controllers/ofertaController');




/*** GET ALL PRODUCTS ***/
router.get('/', ofertaController.index);
router.get('/:id', ofertaController.detail);

// /*** CREATE ONE PRODUCT ***/ 
router.get('/add-oferta', ofertaController.create);
console.log('¿fgfgfgfg');
router.post('/', ofertaController.store);



// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit', ofertaController.edit);
router.patch('/edit/:id', ofertaController.update);


// /*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', ofertaController.destroy);


module.exports = router;
