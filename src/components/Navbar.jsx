/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
const Navbars = ({ favCount }) => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top "
      style={{ backgroundColor: "#121212" }}
    >
      <div className="container-fluid" style={{ paddingLeft: "50px" }}>
        <Link
          to="/"
          className="nav-link active text-white"
          style={{ marginRight: "50px", fontSize: "25px", fontWeight: "bold" }}
        >
          Movies TV
        </Link>
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
              <Link to="/" className="nav-link active text-white">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/actors" className="nav-link active text-white">
                Actors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/series" className="nav-link active text-white">
                series{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tvshows" className="nav-link active text-white">
                Tv Shows{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favourite"
                className="nav-link active text-white position-relative"
              >
                Favourite
                {favCount > 0 && (
                  <span className="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-danger">
                    {favCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
