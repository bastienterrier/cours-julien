const express = require('express')
const { v4: generateId } = require('uuid')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const users = []

function addUser(user) {
  users.push(user)
}

function getUserById(userId) {
  const user = users.find((user) => user.id === userId)

  if (user !== undefined) {
    return user
  }

  return {}
}

// Configuration du server Express
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/users/:id', (req, res) => {
  const userId = req.params.id

  res.send(getUserById(userId))
})

app.post('/users', (req, res) => {
  const user = req.body
  user.id = generateId()

  addUser(user)

  res.status(202).send(user)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
