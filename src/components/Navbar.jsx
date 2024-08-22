/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbars = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#121212" ,height: "70px"}}
    >
      <div className="container-fluid" style={{padding: "50px"}}>
        <a className="navbar-brand text-white" href="#" style={{marginRight: "50px"}}>
          Movies
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Movies{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Actors{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                series{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Tv Shows{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white position-relative" href="#">
                Favourite{" "}
                <span className="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-danger d-none d-lg-inline">
                  1
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbars;
