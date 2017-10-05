const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Teacher
const teachers = require('./routers/teachers.js')
app.use('/teachers', teachers)

//Subject
const subjects = require('./routers/subjects.js')
app.use('/subjects', subjects)

//
const students = require('./routers/students.js')
app.use('/students', students)


app.listen(3000)