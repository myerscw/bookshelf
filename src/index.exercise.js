import React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from 'components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

const LOGIN = 'login'
const REGISTER = 'register'
const ModalStates = {
  LOGIN: 'login',
  REGISTER: 'register',
  CLOSED: null,
}

function LoginForm({onSubmit, button}) {
  function submitForm(event) {
    event.preventDefault()
    const {username, password} = event.target.elements
    onSubmit({username: username.value, password: password.value})
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>
          Username: <input type="text" name="username" />
        </label>
      </div>
      <div>
        <label>
          Password: <input type="password" name="password" />
        </label>
      </div>
      <button>{button}</button>
    </form>
  )
}

function App() {
  const [modal, setModal] = React.useState(ModalStates.CLOSED)

  function closeModal() {
    setModal(ModalStates.CLOSED)
  }

  function logData(data) {
    closeModal()
    console.log(data)
  }

  return (
    <main>
      <h1>Bookshelf</h1>
      <Logo />
      <button onClick={() => setModal(ModalStates.LOGIN)}>Login</button>
      <button onClick={() => setModal(ModalStates.REGISTER)}>Register</button>
      <Dialog
        aria-label="Register"
        isOpen={modal === REGISTER}
        onDismiss={closeModal}
      >
        <button onClick={closeModal}>x</button>
        <LoginForm onSubmit={logData} button="Register" />
      </Dialog>
      <Dialog
        aria-label="Login"
        isOpen={modal === LOGIN}
        onDismiss={closeModal}
      >
        <button onClick={closeModal}>x</button>
        <LoginForm onSubmit={logData} button="Login" />
      </Dialog>
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
