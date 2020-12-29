const { Router } = require('express')
const db = require('../database')

const router = new Router()

router.get('/', (_, res) => {
  db.query('SELECT * FROM users;', null, (err, { rows }) => {
    if (err) {
      res.status(400).send(err)
    }

    res.send(rows)
  })
})

router.get('/:id', (req, res) => {
  const userId = req.params.id

  db.query('SELECT * FROM users WHERE id = $1;', [userId], (err, { rows }) => {
    if (err) {
      res.status(400).send(err)
    }

    const user = rows[0]
    if (!user) {
      res.status(404).send('This user does not exist')
    }

    res.send(user)
  })
})

router.post('/', (req, res) => {
  const userName = req.body.name

  if (!userName) {
    res.status(422).send('Field name is required')
    return
  }

  db.query(
    'INSERT INTO users (name) VALUES ($1) RETURNING *;',
    [userName],
    (err, { rows }) => {
      if (err) {
        res.status(400).send(err)
      }

      res.send(rows[0])
    }
  )
})

module.exports = router