const {getAllData,getTheDataById,deleteProd,addData} = require('../controllers/controllers')
const express = require('express')

const router = express.Router()

router.get('/',getAllData)
router.get('/:id',getTheDataById)
router.delete('/:id',deleteProd)
router.post('/',addData)


module.exports = router