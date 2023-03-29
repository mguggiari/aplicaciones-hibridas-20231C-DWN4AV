// CommonJS module
/*
const http = require('node:http')
const pages = require('./pages/utils.js') // importamos el modulo pages (module.exports)
const products = require('./data/products.js')
*/

// ES6 module
import http from 'node:http'
import { readFile } from 'node:fs'


import { createPage, createProductList } from './pages/utils.js' // importamos el modulo pages (export default)
import products from './data/products.js'


// response.write() - escribe en el body del mensaje de respuesta
const server = http.createServer(function (req, res) {

    if (req.url === '/favicon.ico') {
        res.end()
        return
    }

    console.log("Comienza la respuesta")

    if (req.url === '/') {
        res.write(createPage('Home', '<p>Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/materia') {
        res.write(createPage('Materia', '<p>Aplicacines Hibridas</p>'))
        res.end()
    }
    else if (req.url === '/profesor') {
        res.write(createPage('Profesor', '<p>Lic. Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/productos') {
        res.write(createPage('Lista de productos', createProductList(products)))
        res.end()
    }
    else if (req.url === '/hola.html') {

        // leer el archivo hola.html 
        readFile('./public/hola.html', function (err, data) {

            if (err) {
                res.write(createPage('Pagina no encontrada', '<p>No se pudo cargar hola.html</p>'))
            }
            else {
                // enviar el contenido del archivo hola.html como respuesta
                res.write(data)

                console.log("Envie los datos del archivo")
            }

            res.end()
        })
    }
    else if (req.url === '/index.html') {

        // leer el archivo hola.html 
        readFile('./public/index.html', function (err, data) {

            if (err) {
                res.write(createPage('Pagina no encontrada', '<p>No se pudo cargar hola.html</p>'))
            }
            else {
                // enviar el contenido del archivo hola.html como respuesta
                res.write(data)

                console.log("Envie los datos del archivo")
            }

            res.end()
        })
    }
    else if (req.url === '/products.html') {

        // leer el archivo hola.html 
        readFile('./public/products.html', function (err, data) {

            if (err) {
                res.write(createPage('Pagina no encontrada', '<p>No se pudo cargar hola.html</p>'))
            }
            else {
                // enviar el contenido del archivo hola.html como respuesta
                res.write(data)

                console.log("Envie los datos del archivo")
            }

            res.end()
        })
    }
    else if (req.url === '/contact.html') {

        // leer el archivo hola.html 
        readFile('./public/contact.html', function (err, data) {

            if (err) {
                res.write(createPage('Pagina no encontrada', '<p>No se pudo cargar hola.html</p>'))
            }
            else {
                // enviar el contenido del archivo hola.html como respuesta
                res.write(data)

                console.log("Envie los datos del archivo")
            }

            res.end()
        })
    }
    else if (req.url === '/css/style.css') {

        // leer el archivo hola.html 
        readFile('./public/css/style.css', function (err, data) {

            if (err) {
                res.write(createPage('Pagina no encontrada', '<p>No se pudo cargar hola.html</p>'))
            }
            else {
                // enviar el contenido del archivo hola.html como respuesta
                res.write(data)

                console.log("Envie los datos del archivo")
            }

            res.end()
        })
    }
    else {
        res.write(createPage('Pagina no encontrada', '<p>404 Not Found</p>'))
        res.end()
    }



    console.log("Termina la respuesta")
})

server.listen(2022)


