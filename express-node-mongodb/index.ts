import express from 'express'
import mongoose from 'mongoose'

const app = express()

const PORT = 3000

mongoose
  .connect('mongodb+srv://admin:CGk4CCavdzg2YeG4@cluster.zai7xrw.mongodb.net/')
  .then(() => {
    console.log('You is connected with MongoBD!')

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))
  })
  .catch(() => console.log('Error!'))

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.post('/api/v1/products', (req, res) => {
  const { body } = req

  return res.json(body)
})
