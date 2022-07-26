import React from "react";
import "./styles.css";
import Events from "./events.json";

export default function App() {
  return (
    <main className="App">
      <header>
        <h1>React App</h1>
        <h2>Filter events by city and price</h2>
      </header>
      <section className="filter">
        <div className="pb-1_5">
          <button>Reset Form</button>
        </div>
        <div>
          <button>Apply filter</button>
        </div>
      </section>
      <section className="event-list">
        <h1>Event Results</h1>
        {Events.map((event) => (
          <EventItem event={event} key={event.id} />
        ))}
      </section>
    </main>
  );
}

function EventItem({ event }) {
  return (
    <div className="event-item">
      <p>{event.name}</p>
      <p>{event.city}</p>
      <p>{event.minPrice}</p>
      <hr />
    </div>
  );
}
