import express from 'express'

import { Product } from '../models/product.model'

async function getProducts(req: express.Request, res: express.Response) {
  try {
    const products = await Product.find()

    res.status(200).json(products)
  } catch (error) {
    console.log(error)
  }
}

async function getProduct(req: express.Request, res: express.Response) {
  try {
    const { id } = req.params

    const products = await Product.findById(id)

    res.status(200).json(products)
  } catch (error) {
    console.log(error)
  }
}

async function createProduct(req: express.Request, res: express.Response) {
  try {
    const { body } = req

    const product = await Product.create(body)

    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: (error as { message?: string })?.message })
  }
}

async function updateProduct(req: express.Request, res: express.Response) {
  try {
    const { body } = req
    const { id } = req.params

    const product = await Product.findByIdAndUpdate(id, body)

    if (!product) {
      res.status(404).json({ message: 'Product not found!' })
    }

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: (error as { message?: string })?.message })
  }
}

async function deleteProduct(req: express.Request, res: express.Response) {
  try {
    const { id } = req.params

    const product = await Product.findByIdAndDelete(id)

    if (!product) {
      res.status(404).json({ message: 'Product not found!' })
    }

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: (error as { message?: string })?.message })
  }
}

export const product = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
}
