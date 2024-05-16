import express from 'express'
import mongoose from 'mongoose'

import { productRouter } from './routes/product.route'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/products', productRouter)

const PORT = 3000

mongoose
  .connect(process.env.MONGO_DB_CONNECTION_URL ?? '')
  .then(() => {
    console.log('MongoBD: connected!')

    app.listen(PORT, () => console.log(`${PORT}: listenning!`))
  })
  .catch(() => console.log('Error!'))
