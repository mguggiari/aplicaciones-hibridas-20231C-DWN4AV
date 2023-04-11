import * as service from '../services/products.services.js'
import * as view from '../views/products.views.js'


function getProducts(req, res) {
    service.getProducts()
        .then(function (products) {
            res.send(view.createProductListPage(products))
        })
}

function getProductById(req, res) {
    let idProduct = req.params.idProduct // 1

    service.getProductById(idProduct)
        .then(function (product) {
            if (product) {
                res.send(view.createProductPage(product))
            }
            else {
                res.send(view.createPage('Error', '<p>Producto no encontrado</p>'))
            }
        })
}

function createProductFormPage(req, res) {
    res.send(view.createProductFormPage())
}

function createProduct(req, res) {
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }

    service.createProduct(product)
        .then(function (newProduct) {
            res.send(view.createPage('Producto creado', `<p>Producto ${newProduct.name} creado con el id ${newProduct.id}</p>`))
        })
        .catch(function (error) {
            res.send(view.createPage('Error', `<p>Ocurrio un error</p>`))
        })

}

// Modificar y el Eliminar

export {
    getProducts,
    getProductById,
    createProductFormPage,
    createProduct
}
