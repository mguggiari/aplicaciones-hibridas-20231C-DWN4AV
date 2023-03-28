const http = require('node:http')

const PRODUCTOS = [
    { id: 1, name: 'Café Expreso', price: 200 },
    { id: 2, name: 'Café Americano', price: 250 },
    { id: 3, name: 'Café Cortado', price: 200 },
    { id: 4, name: 'Café Doble', price: 250 },
    { id: 5, name: 'Café Lagrima', price: 200 },
]

// response.write() - escribe en el body del mensaje de respuesta
const server = http.createServer(function (req, res) {

    res.write('<!DOCTYPE html><html><head><meta charset="UTF-8">')

    if (req.url === '/') {
        res.write('<title>Home</title></head><body>')

        res.write('<h1>Mi espectacular pagina web!</h1>')

        res.write('<p>Brian Lara</p>')
    }
    else if (req.url === '/materia') {
        res.write('<title>Materia</title></head><body>')

        res.write('<h1>Mi espectacular pagina web!</h1>')

        res.write('<p>Aplicacines Hibridas</p>')
    }
    else if (req.url === '/profesor') {
        res.write('<title>Profesor</title></head><body>')

        res.write('<h1>Mi espectacular pagina web!</h1>')

        res.write('<p>Lic. Brian Lara</p>')
    }
    else if (req.url === '/productos') {
        res.write('<title>Lista de productos</title></head><body>')

        res.write('<h1>Mi espectacular pagina web!</h1>')

        res.write('<ul>')
        for (let i = 0; i < PRODUCTOS.length; i++) {
            res.write('<li>' + PRODUCTOS[i].name + '</li>')
        }
        res.write('</ul>')
    }
    else {
        res.write('<title>Pagina no encontrada</title></head><body>')

        res.write('<h1>Mi espectacular pagina web!</h1>')

        res.write('<p>404 Not Found</p>')
    }

    res.write('</body> </html>')

    res.end()
})

server.listen(2022)


