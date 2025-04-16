import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="col-xxl-2">
            <div className="container-fluid ">
              <span className="navbar-brand">React</span>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="col-xxl-10 collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <div className="col-xxl-9 d-flex justify-content-start">
              <ul className="navbar-nav">
                <li className="nav-item text-decoration-none text-reset">
                  <Link to="/" className="nav-link" aria-current="page">
                    Accounts
                  </Link>
                </li>
                <li className="nav-item text-decoration-none text-reset">
                  <Link
                    to="/transaction"
                    className="nav-link"
                    aria-current="page"
                    data-testid="transaction-link"
                  >
                    Transactions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Benificery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
