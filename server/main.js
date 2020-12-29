const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mountRoutes = require('./routes')

const app = express()
const port = 3000

// Configuration du server Express
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

mountRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
