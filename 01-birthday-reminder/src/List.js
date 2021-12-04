import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [people, setPeople] = useState(data);
  const clearPeople = () => {
    setPeople([]);
  };
  const removePeople = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <button className="remove" onClick={() => removePeople(id)}>
                  remove
                </button>
              </div>
            </article>
          );
        })}
        <button onClick={clearPeople}>clear all</button>
      </section>
    </>
  );
};

export default List;
