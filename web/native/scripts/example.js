const AXIOS_CONFIG = {
  headers: {
    'x-api-key': 'ma-cle',
  },
}

function showUsers() {
  axios
    .get('http://localhost:3000/users', AXIOS_CONFIG)
    .then(({ data }) => {
      const rawResult = JSON.stringify(data)

      displayResult(rawResult)
    })
    .catch((err) => displayResult(err.message, true))
}

function displayResult(data, isError = false) {
  const resultElement = document.getElementById('result')
  resultElement.innerText = data

  if (isError) {
    resultElement.classList.add('error')
    resultElement.classList.remove('info')
  } else {
    resultElement.classList.remove('error')
    resultElement.classList.add('info')
  }
}

const signinFormElement = document.getElementById('signin-form')
const inputNameElement = document.getElementById('username')
const inputLastNameElement = document.getElementById('lastname')

signinFormElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const username = inputNameElement.value

  axios
    .post(
      'http://localhost:3000/users',
      {
        name: username,
      },
      AXIOS_CONFIG
    )
    .then(({ data }) => {
      const rawResult = JSON.stringify(data)

      displayResult(rawResult)

      inputNameElement.value = ''
      inputNameElement.focus()
    })
    .catch((err) => displayResult(err.message, true))
})

inputNameElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()

    inputLastNameElement.focus()
  }
})
