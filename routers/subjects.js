const express = require('express')
const router = express.Router()
const model = require('../models')

router.get('/', (req, res)=>{
	model.Subject.findAll().then(data_subject=>{
		res.render('subjects', {dataSubject:data_subject})
	})
})



module.exports = router