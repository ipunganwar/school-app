const express = require('express')
const router = express.Router()
const model = require('../models')


router.get('/', (req, res)=>{
	// console.log(model.teacher)
	model.Teacher.findAll().then(data_of_teacher=>{
		// res.send(data_of_teacher)
		res.render('teachers', {dataTeacher:data_of_teacher})
	})
})



module.exports = router