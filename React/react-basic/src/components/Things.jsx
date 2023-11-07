import React from "react";

function Things() {
  var num2 = Math.floor(Math.random() * 100);
  var num = 7;
  var img_url = "https://picsum.photos/200";
  var date = new Date();
  return (
    <div>
      <img alt="Random" src={img_url}></img>
      <p>Thats a lame ass picture that i got off a random page</p>
      <p>
        This is something im cooking up ya feel <br />
        This is a nuber {num}
      </p>
      <p>
        Today is {date.getFullYear()} and as of this day it is copyrighted (this
        page)
      </p>
      <p>Here is another nuber that is randomized {num2}</p>
    </div>
  );
}

export default Things;
