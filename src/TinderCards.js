import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import { db } from "./firebase";
import TinderCard from "react-tinder-card";
import { useStateValue } from "./StateProvider";

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    // this is where code runs...
    //   this will run ONCE when the component loads
    const unsubscribe = db.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
    return () => {
      //this is the cleanup...
      unsubscribe();
    };
  }, []);
  const [{ user }] = useStateValue();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{user?.displayName}</h1>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            preventSwipe={["up", "down"]}
            key={person.name}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
