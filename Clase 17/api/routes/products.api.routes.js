import { Router } from 'express'
import * as controller from '../controllers/products.api.controllers.js'
import ReviewsRoute from './products.reviews.routes.js'

const route = Router()

// route.[VERBO]('[IDENTIFICADOR DEL RECURSO]', [CONTROLADOR])
// /products es la lista de productos

route.get('/products', controller.getProducts)
route.post('/products', controller.createProduct)

route.get('/products/:idProduct', controller.getProductById)
route.put('/products/:idProduct', controller.replaceProduct)
route.patch('/products/:idProduct', controller.updateProduct)
route.delete('/products/:idProduct', controller.deleteProduct)

route.use(ReviewsRoute)


export default route