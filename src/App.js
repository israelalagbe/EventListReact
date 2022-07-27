import React, { useState } from "react";
import "./styles.css";
import Events from "./events.json";
import { EventItem } from "./components/EventItem";
import { Header } from "./components/Header";
import { FilterComponent } from "./components/FilterComponent";

export default function App() {
  const [events, setEvents] = useState(Events);

  return (
    <main className="App">
      <Header />
      <FilterComponent events={events} setEvents={setEvents} />
      <section className="event-list">
        <h1>Event Results</h1>
        {events.map((event) => (
          <EventItem event={event} key={event.id} />
        ))}
      </section>
    </main>
  );
}
