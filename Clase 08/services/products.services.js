import { readFile } from 'node:fs/promises'

async function getProducts() {
    return readFile('./data/products.json')
        .then(function (data) {
            return JSON.parse(data) // parse lo que hace es convertir el string en un objeto
        })
        .catch(function (err) {
            return []
        })
}

async function getProductById(id) {
    return getProducts()
        .then(function (products) {
            for (let i = 0; i < products.length; i++) {
                if (products[i].id == id) {
                    return products[i]
                }
            }
            return null
        })
}


export {
    getProducts,
    getProductById
}