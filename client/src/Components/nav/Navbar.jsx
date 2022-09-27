function Navbar() {
  const auth = false;
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

        <Navright auth={auth} />

      </div>

    </div>
  );
}
function Navright({ auth }) {
  return (
    <>
      <button type="submit">{auth ? 'User name' : 'Sign in'}</button>
      <button type="submit">{auth ? 'Cart' : 'Sign Up' }</button>
    </>
  );
}

export default Navbar;
