const express = require('express')
const router = express.Router()
const model = require('../models')


router.use(function(req, res, next){
	if(req.session.role != 'headmaster'){
		res.redirect('/index')
	}
	next()
})

router.get('/', (req, res)=>{
	model.Teacher.findAll({include:model.Subject}).then(teacher=>{
		// res.send(teacher)
		res.render('teachers/teachers', {dataTeacher:teacher})
	})
		
	
})

router.get('/add', (req, res)=>{
	res.render('teachers/addTeacher', {errors:null})
	
})

router.post('/add', (req, res)=>{
		model.Teacher.create({first_name:req.body.firstName, last_name:req.body.lastName, email:req.body.email}).then(teacher=>{
			res.redirect('../teachers')
		}).catch((err)=>{
			res.render('teachers/addTeacher', {errors:err.errors})
		})
	})


router.get('/edit/:id', (req, res)=>{
	model.Teacher.find({where:{ id : req.params.id }}).then(teacher =>{
		model.Subject.findAll().then(subject=>{
			// res.send(subject[0].subject_name)
			res.render('teachers/editTeacher', {dataTeacher:teacher, dataSubject:subject})
		})
		
	})
})

router.post('/edit/:id', (req, res)=>{
	model.Teacher.update(req.body, {where:{id:req.params.id}}).then(()=>{
		// res.send(req.body)
		res.redirect('../../teachers')
	})
})

router.get('/delete/:id', (req, res)=>{
	model.Teacher.findById(req.params.id).then(teacher =>{
		return teacher.destroy();
	}).then(()=>{
		res.redirect('../../teachers')
	})
})

module.exports = router