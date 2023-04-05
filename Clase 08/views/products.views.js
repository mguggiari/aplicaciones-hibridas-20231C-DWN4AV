import { createPage } from '../pages/utils.js'

function createProductListPage(products) {
    let html = '<h1>Productos</h1>'
    html += '<ul>'

    for (let i = 0; i < products.length; i++) {
        html += `<li>${products[i].name} <a href="/products/${products[i].id}">Ver</a></li>`
    }

    html += '</ul>'

    return createPage('Productos', html)
}

function createProductPage(product) {
    let html = `<h1>${product.name}</h1>`
    html += `<p>Precio: $${product.price}</p>`
    html += `<p>${product.description}</p>`

    return createPage(product.name, html)
}

export {
    createProductListPage,
    createProductPage,
    createPage
}