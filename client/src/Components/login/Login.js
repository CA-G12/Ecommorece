import image from './cartIcon.png'
import Button from '../button/Button'
import '../../style/login.css'

function Login() {
  return (
    <div className="container">
      <div className="container-content">
        <form>
          <img alt="tset" src={image} />
          <br />
          <br />
          <input type="email" placeholder="EMAIL" />
          <br />
          <br />
          <input type="ppassword" placeholder="PASSWORD" />
          <br />
          <br />
          <Button text="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login
