import { Link, } from 'react-router-dom';

function Navbar(props) {

  const { auth, setAuth } = props;

  return (
    <div className="nav-bar">
     <Link to="/" style={{textDecoration : 'none',}}><h1>Fashonista</h1></Link> 
      <form id="search-form" role="search">
        <input
          id="search-bar"
          placeholder="Search"
          type="search"

        />

      </form>
      <div id="nav-right">

        <Link to={auth ? "/cart" : "/login"}>
          {' '}
          <button type="submit">{auth ? "cart" : "Sign In"}</button>
        </Link>

        {!auth ?
          <Link to="/signup" >
            <button type="submit">Sign Up</button>
          </Link>
          :
          <button
            type='submit'
            onClick={() => {
              setAuth(false)
            }}
          >Log out</button>
        }



      </div>

    </div>

  );
}

export default Navbar;
