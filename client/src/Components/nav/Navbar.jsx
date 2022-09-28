import { Link } from 'react-router-dom';

function Navbar(props) {
  const { auth } = props;
  
  return (
    <div className="nav-bar">
      <h1>Fashonista</h1>
      <form id="search-form" role="search">
        <input
          id="search-bar"
          placeholder="Search"
          type="search"

        />

      </form>
      <div id="nav-right">

        <Link to={auth?"/cart":"/login"}>
          {' '}
          <button type="submit">{auth?"cart":"Sign In"}</button>
        </Link>

        <Link to={auth?"/logout":"/signup"}>
          <button type="submit">{auth?"log out":"Sign Up"}</button>
        </Link>

      </div>

    </div>

  );
}

export default Navbar;
