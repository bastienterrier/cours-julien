const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'julien',
  password: 'postgres',
  port: 5432,
})
client.connect()

module.exports = {
  query: (text, params, callback) => client.query(text, params, callback),
  end: () => client.end(),
}
