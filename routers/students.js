const express = require('express')
const router = express.Router()
const model = require('../models')

var validator = require('validator');
validator.isEmail('foo@bar.com'); 

router.get('/', (req, res)=>{
	model.Student.findAll().then(data_student=>{
		// res.send(data_student)
		res.render('students', {dataStudent:data_student})
	})
})

router.get('/add', (req, res)=>{
	res.render('addStudent', {errors:null})
	
})

router.post('/add', (req, res)=>{
		model.Student.create({firstName:req.body.firstName, lastName:req.body.lastName, email:req.body.email}).then(teacher=>{
			res.redirect('../students')
		}).catch((err)=>{
			// res.send(err.errors)
			res.render('addStudent', {errors:err.errors})
		})
	})


router.get('/edit/:id', (req, res)=>{
	model.Student.find({
		where:{ id : req.params.id }
	}).then(student =>{
		// res.send(student)
		res.render('editStudent', {dataStudent:student})
	})
})

router.post('/edit/:id', (req, res)=>{
	// 	model.Student.findById(req.params.id).then(student =>{
	// 			student.firstName = req.body.firstName
	// 			student.lastName = req.body.lastName
	// 			student.email = req.body.email
	// 		student.save().then((hasil)=>{
	// 			res.redirect('../../students')
	// 		})		
	// })
	// res.send(req.params)
	model.Student.update(req.body, {where:{id:req.params.id}}).then(()=>{
		// res.send(result)
		res.redirect('../../students')
	})
})

router.get('/delete/:id', (req, res)=>{
	model.Student.findById(req.params.id).then(student =>{
		return student.destroy();
	}).then(()=>{
		res.redirect('../../students')
	})
})



module.exports = router