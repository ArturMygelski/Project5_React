const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-left">moja firma</div>
        <div className="nav-right">
          <a className="nav-right" href="#our">
            {" "}
            o nas
          </a>
          <a className="nav-right" href="#service">
            oferta{" "}
          </a>
          <a className="nav-right-end">kontakt </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
