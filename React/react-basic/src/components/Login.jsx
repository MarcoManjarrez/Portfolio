import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  //const [user, setUser] = useState("");
  //const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState({ user: "", password: "" });
  const [message, setMessage] = useState("");

  function fieldListener(event) {
    //setUser(event.target.value);
    const { value, name } = event.target;
    setUserProfile((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  /*function passwordListener(event) {
    //setPassword(event.target.value);
    setUserProfile((prevValue) => {
      return {
        ...prevValue,
        password: event.target.value,
      };
    });
  } */ //this needs a function userlistener to work
  function submitForm(event) {
    axios
      .post("/login", {
        user: userProfile.user,
        password: userProfile.password,
      })
      .then((res) => {
        if (res.data.authorization === 1) {
          console.log(
            "Yoou are an idiot. I mean, you logged in with the easiest password ever"
          );
          props.listener();
        } else {
          console.log("Lol wrong");
          setMessage(
            "You will be executed for attempting to fake your identity"
          );
        }
      })
      .catch((err) => {
        console.error(err.error);
      });
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          name="user"
          type="text"
          placeholder="Username"
          onChange={fieldListener}
          value={userProfile.user}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={fieldListener}
          value={userProfile.password}
        />
        <button type="submit">Login</button>
      </form>
      <div style={{ color: "#00FFFF" }}>{message}</div>
    </div>
  );
}

export default Login;
