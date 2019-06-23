import { NavLink} from "react-router-dom";
import React from "react";


class NavBar extends React.Component {

  render() {
    return(
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <NavLink className="nav-link navbar-brand" to="/">Brand here</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="GuardianSearch">Search</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="PythonContent">Python</NavLink></li>
        </ul>
      </div>
    </nav>
    )}
}

export default NavBar;