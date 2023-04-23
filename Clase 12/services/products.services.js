import { readFile, writeFile } from 'node:fs/promises'

async function getProducts(filter = {}) {
    return readFile('./data/products.json')
        .then(function (data) {
            return JSON.parse(data) // parse lo que hace es convertir el string en un objeto
        })
        .then(function (products) {
            if (filter.deleted) {
                const productsFilter = []

                for (let i = 0; i < products.length; i++) {
                    if (!products[i].deleted) {
                        productsFilter.push(products[i])
                    }
                }

                return productsFilter
            }
            else {
                return products
            }
        })
        .catch(function (err) {
            return []
        })
}

async function saveProducts(products) {
    return writeFile('./data/products.json', JSON.stringify(products))
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

    await saveProducts(products)

    return newProduct
}

async function editProduct(idProduct, product) {
    const products = await getProducts()
    let editedProduct = null

    for (let i = 0; i < products.length; i++) {
        if (products[i].id == idProduct) {
            products[i] = {
                ...products[i], // spread operator
                ...product,
                id: products[i].id
            }

            console.log(products[i])

            editedProduct = products[i]
            break;
        }
    }

    if (editedProduct) {
        await saveProducts(products)
    }

    return editedProduct

}


async function deleteProduct(idProduct) {
    const products = await getProducts()
    let deletedProduct = null

    for (let i = 0; i < products.length; i++) {
        if (products[i].id == idProduct) {
            products[i].deleted = true

            deletedProduct = products[i]
            break;
        }
    }

    if (deletedProduct) {
        await saveProducts(products)
    }

    return deletedProduct
}

export {
    getProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct
}