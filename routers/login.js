const express = require('express')
const router = express.Router()
const Model = require('../models')

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',



router.get('/', (req, res)=>{
	// res.send(req.body)
	res.render('login', {err:null})
})


function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

router.post('/login', (req, res) =>{
	Model.User.findAll().then(cekUser=>{
		cekUser.forEach((user, i) =>{
			if(req.body.username == user.username){
				req.session.username = req.body.username
				req.session.role = user.role
				res.redirect('/index')
			}
			else if(i >= cekUser.length-1){
				res.render('login', {err:'username tidak terdaftar'})
			}
		})
	})
})


module.exports = router