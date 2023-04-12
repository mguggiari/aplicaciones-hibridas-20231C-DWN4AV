import express from 'express'
import ProductRoute from './routes/products.routes.js'

const app = express() // el server

app.use(express.urlencoded({ extended: true })) // para poder leer el body de las solicitudes POST

app.use('/', express.static('public'))

app.use(ProductRoute)

app.listen(2023, function () {
    console.log('Servidor levantado! http://localhost:2023')
})
