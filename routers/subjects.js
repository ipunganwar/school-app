const express = require('express')
const router = express.Router()

const Model = require('../models')

router.use(function(req, res, next){
  if(req.session.user != 'academic' || req.session.user != 'headmaster'){
    res.redirect('/index')
  }
  next()
})

let filter = {
  include: [{model: Model.Teacher}]
}

router.get('/', function (req, res) {
  Model.Subject.findAll(filter, {order: [['id', 'ASC']]}).then(dataSubjects => {
  res.render('subject', {dataSubjects: dataSubjects})
  })
})

router.get('/add', function (req, res) {
  	res.render('subject/add')
})

router.post('/add', function (req, res) {
  Model.Subject.create(req.body).then(() => {
  res.redirect('/subjects')
  })
})

router.get('/edit/:id', function (req, res) {
  Model.Subject.findById(req.params.id).then(dataSubject => {
  res.render('subject/edit', {dataSubjects: dataSubject})
  })
})

router.post('/edit/:id', function (req, res) {
  Model.Subject.update(req.body, {where: req.params}).then(() => {
  res.redirect('/subjects')
  })
})

router.get('/delete/:id', function (req, res) {
  Model.Subject.destroy({where: req.params}).then(() => {
  res.redirect('/subject')
  })
})
module.exports = router