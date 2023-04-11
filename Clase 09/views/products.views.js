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

function createProductFormPage() {
    let html = '<h1>Crear Producto</h1>'
    html += '<form action="/products/nuevo" method="POST">'
    html += '<input type="text" name="name" placeholder="Nombre">'
    html += '<input type="text" name="price" placeholder="Precio">'
    html += '<input type="text" name="description" placeholder="Descripción">'
    html += '<button type="submit">Crear</button>'
    html += '</form>'

    return createPage('Crear Producto', html)
}

export {
    createProductListPage,
    createProductPage,
    createPage,
    createProductFormPage
}