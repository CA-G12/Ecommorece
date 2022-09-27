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

        <button type="submit">Sign In</button>
        <button type="submit">Sign Up</button>

      </div>

    </div>

  );
}

export default Navbar;
