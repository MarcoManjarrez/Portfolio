import React, { useState } from "react";
import "./App.css";
import pi, { squarePi, doublePi, square } from "./modules/math";
import contacts from "./data";
import Header from "./components/Header";
import Login from "./components/Login";
import Directory from "./components/Directory";
import { Routes, Route } from "react-router-dom";
import Agenda from "./components/Agenda";
import Phonebook from "./components/Phonebook";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  var rand = Math.floor(Math.random() * 100);
  //date.setHours(20);
  var result = contacts.reduce(
    (result, { age, name }) => {
      result.concatName = result.concatName + "-" + name;
      result.totalAge = result.totalAge + age;
      return result;
    },
    { concatName: "", totalAge: 0 }
  );
  function changeLoggedState() {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login listener={changeLoggedState} />} />
        <Route
          path="/directory"
          element={<Directory listener={changeLoggedState} />}
        />
        <Route path="/phone" element={<Phonebook />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
      <p>The value of pi is this one right hhere: {pi}</p>
      <p>The doubel value of pi is gonan be {doublePi()}</p>
      <p>A pi that is squared {squarePi()}</p>
      <p>
        Also check this out, the square of {rand} is {square(rand)}
      </p>
      <p>
        The total added age of the contact book is {result.totalAge} and the
        names on the list are {result.concatName}
      </p>
      {/*
      {isLoggedIn ? (
        <Directory listener={changeLoggedState} />
      ) : (
        <Login listener={changeLoggedState} />
      )}*/}
    </div>
  );
}

export default App;
