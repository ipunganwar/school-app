const express = require('express')
const router = express.Router()
const model = require('../models')

router.use(function (req, res, next) {
  if(req.session.role == 'academic'){
  	res.redirect('/index')}
  	else{
  		next()
  	}
 	
})

router.get('/', function (req, res) {
  model.Student.findAll({order: [['id', 'ASC']]}).then(dataStudents => {
  	console.log(dataStudents)
  res.render('student/students', {dataStudents: dataStudents})
  })
})

router.get('/add', (req, res)=>{
	res.render('student/addStudent', {errors:null})
})

router.post('/add', (req, res)=>{
		model.Student.create({firstName:req.body.firstName, lastName:req.body.lastName, email:req.body.email}).then(teacher=>{
			res.redirect('../student')
		}).catch((err)=>{
			res.send(err.errors)
			res.render('student/addStudent', {errors:err.errors})
		})
	})


router.get('/edit/:id', (req, res)=>{
	model.Student.find({
		where:{ id : req.params.id }
	}).then(student =>{
		// res.send(student)
		res.render('student/editStudent', {dataStudents:student})
	})
})

router.post('/edit/:id', (req, res)=>{
	model.Student.update(req.body, {where:{id:req.params.id}}).then(()=>{
		res.redirect('/students')
	})
})

router.get('/delete/:id', (req, res)=>{
	model.Student.findById(req.params.id).then(student =>{
		return student.destroy();
	}).then(()=>{
		res.redirect('/students')
	})
})

router.get('/addsubject/:id', function (req, res) {
  model.Student.findById(req.params.id).then(dataStudent => {
    model.Subject.findAll().then(dataSubjects => {
      res.render('student/addSubject', {dataStudents: dataStudent, dataSubjects: dataSubjects})
      // res.send(dataSubjects)
    })
  })
})


module.exports = router