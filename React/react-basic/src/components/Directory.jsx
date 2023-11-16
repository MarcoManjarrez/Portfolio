import React, { useState } from "react";
import contacts from "../data";
import Card from "./Card";
function Directory(props) {
  function mapContacts(cardsToMap) {
    return cardsToMap.map((contact) => (
      <Card name={contact.name} img={contact.picture} phone={contact.phone} />
    ));
  }
  const [filterString, setFilterString] = useState("");
  var filteredContacts = contacts.filter((contact) => {
    /* .filter buscara todos los elementos de la condicional, y .find solo encontrara la primera*/
    return contact.name.toLowerCase().includes(filterString.toLowerCase());
  });

  var cards =
    filteredContacts.length > 0
      ? mapContacts(filteredContacts)
      : mapContacts(contacts);
  function filterListener(event) {
    /*console.log("Balls in yo face");*/
    /*console.log(event.target.value);*/
    setFilterString(event.target.value);
  }
  function localListener() {
    props.listener();
  }
  return (
    <div>
      <div>
        <button onClick={localListener}>Log out</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={filterListener}
          value={filterString}
        />
      </div>
      {cards}
    </div>
  );
}

export default Directory;
