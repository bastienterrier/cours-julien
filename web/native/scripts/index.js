const API_BASE_URL = 'http://localhost:3000'

const showUsersBtn = document.getElementById('show-users')
const form = document.getElementById('signin-form')

form.addEventListener('submit', (event) => {
  // Do not reload page
  event.preventDefault()

  const givenNameInput = document.getElementById('givenName')

  postUser(givenNameInput.value).then((createdUser) => {
    updateResultViewContent([createdUser])

    givenNameInput.value = ''
  })
})

function updateResultViewContent(content) {
  const resultView = document.getElementById('result-view')

  resultView.innerHTML = buildArray(content)
}

function postUser(userName) {
  return axios
    .post(`${API_BASE_URL}/users`, {
      name: userName,
    })
    .then(({ data }) => data)
}

function getUsers() {
  return axios.get(`${API_BASE_URL}/users`).then(({ data }) => data)
}

function showUsers() {
  getUsers().then((users) => {
    updateResultViewContent(users)
  })
}

function buildArray(data) {
  if (!data || !data.length) {
    return 'No data provided'
  }

  let builtArray = '<table><thead><tr>'

  const cols = Object.keys(data[0])

  cols.forEach((col) => {
    builtArray += `<th>${col}</th>`
  })
  builtArray += '</tr></thead><tbody>'

  data.forEach((d) => {
    builtArray += `<tr>`

    cols.forEach((col) => {
      builtArray += `<td>${d[col]}</td>`
    })
    builtArray += `</tr>`
  })

  builtArray += '</tbody></table>'

  return builtArray
}
