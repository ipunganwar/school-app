const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

var session = require('express-session')
app.use(session({
	secret:'Tes', 
	resave:false,
	saveUninitialized: true
}))

//Crypto
const crypto = require('crypto');
const hash = crypto.createHash('sha256');

//LOGIN
const login = require('./routers/login.js')
app.use('/', login)

//INDEX
const index = require('./routers/index.js')
app.use('/index', index)

//Teacher
const teachers = require('./routers/teachers.js')
app.use('/teacher', teachers)

//Subject
const subjects = require('./routers/subjects.js')
app.use('/subject', subjects)

//
const students = require('./routers/students.js')
app.use('/student', students)

//user
const user = require('./routers/user.js')
app.use('/user', user)


app.listen(3000)