import logo from "./logo.svg";
import "./App.css";
import Things from "./components/Things";
import Card from "./components/Card";
import pi, { squarePi, doublePi, square } from "./modules/math";
import contacts from "./data";

function App() {
  var num2 = Math.floor(Math.random() * 100);
  var name = "Balls";
  var lname = "Jones";
  var date = new Date();
  //date.setHours(20);
  let greeting;

  const customStyle = {
    color: "#00FFFF",
    fontSize: "20px",
    border: "1px solid black",
  };

  if (num2 % 2 === 0) {
    customStyle.background = "#03F4D0";
  } else {
    customStyle.background = "#3F4D00";
  }
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

  var filteredContacts = contacts.filter((contact) => {
    return contact.name === "Jake";
  });
  let mainAccum = 0;
  var result = contacts.reduce((accum, current) => {
    return mainAccum + current.age;
  });
  var filteredContactsByFind = contacts.filter((contact) => {
    return contact.phone.includes("7");
  });
  var cards = filteredContactsByFind.map((contact) => (
    <Card name={contact.name} img={contact.picture} phone={contact.phone} />
  ));

  return (
    <div className="App">
      <h1 style={customStyle}>Hi hello hi, you must be {name + " " + lname}</h1>
      <h1 style={customStyle}>{greeting}</h1>
      <Things />
      <p>The value of pi is this one right hhere: {pi}</p>
      <p>The doubel value of pi is gonan be {doublePi()}</p>
      <p>A pi that is squared {squarePi()}</p>
      <p>Also check this out, the square of 42 is {square(42)}</p>
      <p>The total added age of the contact book is {result}</p>
      {cards}
    </div>
  );
}

export default App;
