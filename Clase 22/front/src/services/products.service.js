import API from './api.service'

export async function getAll() {
    return API.call({ uri: 'products' })
}

export async function getById(idProduct) {
    return API.call({ uri: `products/${idProduct}` })
}

export default {
    getAll,
    getById
}