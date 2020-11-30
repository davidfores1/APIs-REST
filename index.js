const express = require('express')
const body_parser = require('body-parser')

//const cors = require('cors')
const app = express()

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())
    //app.use(cors())

const db_manager = require('./persistence/dbmanager')

app.get('/', (req, res) => {
    res.send('API REST Curso')
})

//CRUD
//C CREATE - POST
app.post('/user', (req, res, next) => {
    db_manager.user_create(req, res, next)
})

app.listen(8080, () => {
    console.log('API REST running in port 8080!')
})