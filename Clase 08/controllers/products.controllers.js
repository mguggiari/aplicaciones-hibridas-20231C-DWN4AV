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

export {
    getProducts,
    getProductById
}