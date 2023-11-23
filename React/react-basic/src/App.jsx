import React, { useState } from "react";
import "./App.css";
import pi, { squarePi, doublePi, square } from "./modules/math";
import contacts from "./data";
import Header from "./components/Header";
import Login from "./components/Login";
import Directory from "./components/Directory";
import { Routes, Route, Navigate } from "react-router-dom";
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
  function CheckLogStatus(props) {
    return isLoggedIn ? (
      <props.component listener={changeLoggedState} />
    ) : (
      <Navigate to="/" />
    );
  }
  return (
    <div className="App">
      <CheckLogStatus component={Header} />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/directory" />
            ) : (
              <Login listener={changeLoggedState} />
            )
          }
        />
        <Route
          path="/directory"
          element={<CheckLogStatus component={Directory} />}
        />
        <Route
          path="/phone"
          element={<CheckLogStatus component={Phonebook} />}
        />
        <Route path="/agenda" element={<CheckLogStatus component={Agenda} />} />
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
    </div>
  );
}

export default App;
