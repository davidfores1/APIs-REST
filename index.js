const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.listen(8080, () => {
    console.log('API REST RUNNING IN PORT 8080!')
})