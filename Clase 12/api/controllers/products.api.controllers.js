import * as service from '../../services/products.services.js'

function getProducts(req, res) {
    service.getProducts({ deleted: true })
        .then(function (products) {
            res.status(200).json(products) // res.send(JSON.stringify(products))
        })
}

function createProduct(req, res) {
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }

    // const product = req.body
    service.createProduct(product)
        .then(function (product) {
            res.status(201).json(product)
        })
}

function getProductById(req, res) {
    const idProduct = req.params.idProduct

    service.getProductById(idProduct)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el producto #${idProduct}` } })
            }
        })
}

function replaceProduct(req, res) {
    const idProduct = req.params.idProduct

    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }

    service.editProduct(idProduct, product)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el producto #${idProduct}` } })
            }
        })

}


function updateProduct(req, res) {
    const idProduct = req.params.idProduct

    const product = {}

    if (req.body.name) {
        product.name = req.body.name
    }

    if (req.body.price) {
        product.price = req.body.price
    }

    if (req.body.description) {
        product.description = req.body.description
    }

    service.editProduct(idProduct, product)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el producto #${idProduct}` } })
            }
        })

}

function deleteProduct(req, res) {
    const idProduct = req.params.idProduct

    service.deleteProduct(idProduct)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el producto #${idProduct}` } })
            }
        })
}


export {
    getProducts,
    createProduct,
    getProductById,
    replaceProduct,
    updateProduct,
    deleteProduct
}