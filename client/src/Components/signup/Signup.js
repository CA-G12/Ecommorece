import { Link, useNavigate } from 'react-router-dom'
import image from './cartIcon.png'
import '../../style/signup.css'

const fetchReq = (form) => {
  const queryString = new URLSearchParams(new FormData(form))
  const data = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of queryString.entries()) {
    data[key] = value
  }
  return fetch('/signUp', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

function Signup({ setAuth }) {
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
          <div className="username">
            <input type="text" placeholder="FIRST NAME" name="firstName" />
            <input type="text" placeholder="LAST NAME" name="lastName" />
          </div>

          <br />
          <input type="url" placeholder="IMAGE URL" name="imgUrl" />
          <br />
          <input type="email" placeholder="EMAIL" name="email" />
          <br />
          <input type="password" placeholder="PASSWORD" name="password" />
          <br />
          <input
            type="password"
            placeholder="CONFIRM PASSWORD"
            name="confirmedPswd"
          />
          <br />
          <button type="submit">Sign Up</button>
          <Link to="/login">You an account ? login</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
