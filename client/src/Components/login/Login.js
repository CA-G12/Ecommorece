import { useNavigate } from 'react-router-dom'
import image from './cartIcon.png'
import Button from '../button/Button'
import '../../style/login.css'

const fetchReq = (form) => {
  const queryString = new URLSearchParams(new FormData(form))
  const data = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of queryString.entries()) {
    data[key] = value
  }
  return fetch('/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

function Login({ setAuth }) {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="container-content">
        <form
            onSubmit={(event) => {
              event.preventDefault()
              fetchReq(event.target)
                .then((res) => {
                  if (res.status === 200) {
                    setAuth(true)
                    navigate('/')
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
            }}
            >
          <img alt="tset" src={image} />
          <br />
          <br />
          <input type="email" placeholder="EMAIL" name="email" />
          <br />
          <br />
          <input type="password" placeholder="PASSWORD" name="password"/>
          <br />
          <br />
          <Button text="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login
