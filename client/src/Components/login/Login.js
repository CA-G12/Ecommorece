import image from './cartIcon.png';
import Button from '../button/Button';
import '../../style/login.css';

function Login() {
  return (
    <div className="container">
      <div className="container-content">
        <form>
          <img alt="tset" src={image} />
          <br />
          <br />
          <input placeholder="EMAIL" />
          <br />
          <br />
          <input placeholder="PASSWORD" />
          <br />
          <br />
          <Button text="login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
