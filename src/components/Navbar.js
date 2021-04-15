import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
          Lost Persons Records
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto " style={{ marginRight: "10%" }}>
            <li className="nav-item active" style={{ marginRight: "10%" }}>
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginRight: "10%" }}>
              <NavLink className="nav-link" to="/adddata">
                Adddata
              </NavLink>
            </li>
            <li class="nav-item" style={{ marginRight: "10%" }}>
              <NavLink className="nav-link" to="/stats">
                Stats
              </NavLink>
            </li>
            <li class="nav-item" style={{ marginRight: "10%" }}>
              <NavLink className="nav-link" to="/complaints">
                Complaints
              </NavLink>
            </li>
            <li class="nav-item" style={{ marginRight: "10%" }}>
              <NavLink className="nav-link" to="/users">
                ViewUser
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
