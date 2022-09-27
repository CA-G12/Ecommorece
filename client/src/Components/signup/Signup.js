import image from './cartIcon.png'
import Button from '../button/Button'
import '../../style/signup.css'

function Signup() {
  return (
    <div className="container">
      <div className="container-content">
        <form>
          <img alt="tset" src={image} />
          <br />
          <br />
          <div className="username">
            <input type="text" placeholder="FIRST NAME" />
            <input type="text" placeholder="LAST NAME" />
          </div>

          <br />
          <input type="url" placeholder="IMAGE URL" />
          <br />
          <input type="email" placeholder="EMAIL" />
          <br />
          <input type="password" placeholder="PASSWORD" />
          <br />
          <input type="password" placeholder="CONFIRM PASSWORD" />
          <br />
          <Button text="Signup" />
        </form>
      </div>
    </div>
  )
}

export default Signup
