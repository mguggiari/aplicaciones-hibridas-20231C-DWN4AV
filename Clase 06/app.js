import express from 'express'
import path from 'node:path'

let contador = 0

const app = express() // el server

app.use(express.urlencoded({ extended: true })) // para poder leer el body de las solicitudes POST

// contendido estatico
app.use('/', express.static('public'))


// solitudes de recursos dinamicos
app.get('/', function (req, res) {
    res.send('Hola Mundo!')
})

app.get('/contador', function (req, res) {
    contador++
    res.send(`Contador: ${contador}`)

})

// GET   - URL (QUERY) - Obtener el recurso      
// POST  - BODY        - Crear un recurso

app.get('/saludo', function (req, res) {
    const nombre = req.query.nombre

    res.send(`Hola ${nombre}!`)
})

app.post('/saludo', function (req, res) {
    const nombre = req.body.nombre

    res.send(`Hola ${nombre}!`)
})




app.listen(2023, function () {
    console.log('Servidor levantado! http://localhost:2023')
})