import express from 'express'

import { product } from '../controllers/product.controller'

export const productRouter = express.Router()

productRouter.get('/', product.getProducts)
productRouter.get('/:id', product.getProduct)
productRouter.get('/', product.createProduct)
productRouter.get('/:id', product.updateProduct)
productRouter.get('/:id', product.deleteProduct)
