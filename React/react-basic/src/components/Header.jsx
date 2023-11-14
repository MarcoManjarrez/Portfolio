import React from "react";
import Things from "./Things";
function Header() {
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

  return (
    <div>
      <h1 style={customStyle}>Hi hello hi, you must be {name + " " + lname}</h1>
      <h1 style={customStyle}>{greeting}</h1>
      <Things />
    </div>
  );
}
export default Header;
