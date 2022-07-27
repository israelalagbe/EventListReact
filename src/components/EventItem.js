import React from "react";

export function EventItem({ event }) {
  return (
    <div className="event-item">
      <p>{event.name}</p>
      <p>{event.city}</p>
      <p>{event.minPrice}</p>
      <hr />
    </div>
  );
}
