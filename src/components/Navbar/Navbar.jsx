const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="navL">moja firma</div>
        <div className="navR">
          <a className="navR" href="#our">
            {" "}
            o nas
          </a>
          <a className="navR" href="#service">
            oferta{" "}
          </a>
          <a className="navRk">kontakt </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
