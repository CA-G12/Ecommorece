import { Link } from 'react-router-dom';

function Navbar() {
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

        <Link to="/login">
          {' '}
          <button type="submit">Sign In</button>
        </Link>

        <Link to="/signup">
          <button type="submit">Sign Up</button>
        </Link>

      </div>

    </div>

  );
}

export default Navbar;
