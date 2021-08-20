const express = require('express');
const{getproduct,putproduct,postproduct,deleteproduct,getproductsf}=require('../controller/controller');

const router = express.Router();

router.get('/',getproductsf);
router.get('/',getproduct);
router.put('/:id',putproduct);
router.post('/',postproduct);
router.delete('/:id',deleteproduct);

module.exports=router; 