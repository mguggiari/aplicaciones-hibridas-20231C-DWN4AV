import { Router } from 'express'
import * as controller from '../controllers/products.api.controllers.js'
import ReviewsRoute from './products.reviews.routes.js'
import { validateProduct, validateProductUpdate } from '../../middlewares/products.validate.middleware.js'
import { tokenVerify } from '../../middlewares/token.validate.middleware.js'

const route = Router()

route.use('/products', tokenVerify)

route.get('/products', controller.getProducts)
route.post('/products', [validateProduct], controller.createProduct)

route.get('/products/:idProduct', controller.getProductById)
route.put('/products/:idProduct', [validateProduct], controller.replaceProduct)
route.patch('/products/:idProduct', [validateProductUpdate], controller.updateProduct)
route.delete('/products/:idProduct', controller.deleteProduct)

route.use(ReviewsRoute)


export default route