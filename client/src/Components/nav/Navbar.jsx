import { Link,useLocation,NavLink } from 'react-router-dom';

function Navbar(props) {
  const location = useLocation();
  const { auth, setAuth ,name,setName} = props;
  return (
    <div className="nav-bar">
    <NavLink to='/' className='logo'>
    <h1>Fashonista</h1>
    </NavLink>
      {!(location.pathname==='/signup'||location.pathname==='/login')?(<form id="search-form" role="search">
        <input
          id="search-bar"
          placeholder="Search"
          type="search"
          value={name}
          onChange={
            (e)=>{setName(e.target.value)}
          }
        />

      </form>):(<div>      </div>)}
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
