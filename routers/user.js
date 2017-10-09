const express = require('express')
const router = express.Router()
const model = require('../models')


router.get('/', (req, res)=>{
	res.redirect('/')
})


module.exports = router