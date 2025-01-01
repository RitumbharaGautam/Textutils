import { Link } from "react-router-dom";

function Navbar(props) {
    return (
      <>
  <nav className="navbar navbar-expand-lg " style={props.value}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={props.value}>{props.text}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" style={props.value} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  style={props.value} to="/about">About</Link>
        </li>
        <li className="nav-item dropdown " >
          <Link className="nav-link dropdown-toggle"  style={props.value} role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Enable Custom Mode
          </Link>
          <ul className="dropdown-menu">
          <li><form className="d-flex" role="search">
          <div className="form-check form-switch mx-1">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.modechange}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue {(props.textDisplay === 'light') ? "Lightmode" : "Darkmode"}</label>
          </div></form></li>

          <li><form className="d-flex" role="search">
          <div className="form-check form-switch mx-1">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.modechange2}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Pink {(props.textDisplay === 'light') ? "Lightmode" : "Darkmode"}</label>
          </div></form></li>
          </ul>
          
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    );
  }
  export default Navbar;