import React from "react";
import Things from "./Things";
import { Link } from "react-router-dom";

function Header(props) {
  var name = "Balls";
  var lname = "Jones";
  var date = new Date();
  var num2 = Math.floor(Math.random() * 100);
  let greeting;
  const customStyle = {
    color: "#00FFFF",
    fontSize: "20px",
    border: "1px solid black",
  };
  var currentTime = date.getHours();
  if (currentTime < 12) {
    greeting = "Good morning Dr. Freeman";
  } else if (currentTime < 18) {
    greeting =
      "Good evening Dr. Freeman, do you know who ate all the doughnuts?";
    customStyle.background = "#00FFFF";
    customStyle.color = "White";
  } else {
    greeting = "Freeman you fool! My god, we're doomed!";
    customStyle.background = "Red";
  }
  if (num2 % 2 === 0) {
    customStyle.background = "#03F4D0";
  } else {
    customStyle.background = "#3F4D00";
  }

  function logOut() {
    props.listener();
  }

  return (
    <div>
      <h1 style={customStyle}>Hi hello hi, you must be {name + " " + lname}</h1>
      <h1 style={customStyle}>{greeting}</h1>
      <Things />
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <ul className="navbar-nav  mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/directory" className="nav-link">
                Directory
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/agenda" className="nav-link">
                Agenda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/phone" className="nav-link">
                Phone
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={logOut}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
