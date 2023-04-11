import { readFile, writeFile } from 'node:fs/promises'

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
async function createProduct(product) {
    const products = await getProducts()

    const newProduct = {
        ...product, // spread operator
        id: products.length + 1
    }

    products.push(newProduct)

    await writeFile('./data/products.json', JSON.stringify(products))

    return newProduct
}

/*
async function createProduct(product) {
    let newProduct 
    return getProducts()
        .then(function (products) {
            newProduct = {
                ...product,
                id: products.length + 1
            }

            products.push(newProduct)

            return writeFile('./data/products.json', JSON.stringify(products))
        })
        .then(function () {
            return newProduct
        })
}
*/
export {
    getProducts,
    getProductById,
    createProduct
}