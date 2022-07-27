import React, { useState } from "react";
import { Filter } from "./FilterInput";
import Events from "../events.json";
import { filterEvents } from "../utils/filterEvents";

const initialFilterState = [
  {
    key: "city",
    label: "city",
    operator: "search",
    inputType: "text",
    value: ""
  },
  {
    key: "minPrice",
    label: "price",
    operator: "gt-eq",
    inputType: "number",
    value: ""
  },
  {
    key: "minPrice",
    label: "lowest price",
    operator: "min",
    inputType: "checkbox",
    value: ""
  }
];

export function FilterComponent({ events, setEvents }) {
  const [filters, setFilters] = useState(initialFilterState);

  /**
   * @param {number} index
   * @param {string} value
   */
  const setFilterValue = (index, value) => {
    const updatedFilter = filters.map((item, filterIndex) =>
      index === filterIndex
        ? {
            ...item,
            value: value
          }
        : item
    );

    setFilters(updatedFilter);
  };

  const reset = () => {
    setFilters(initialFilterState);
    setEvents(Events);
  };

  const applyFilter = (e) => {
    e.preventDefault();
    let filteredEvents = Events;

    filters
      .filter((item) => item.value)
      .forEach((filter) => {
        filteredEvents = filterEvents(filteredEvents, filter);
      });

    setEvents(filteredEvents);
  };

  return (
    <section className="filter">
      <form onSubmit={applyFilter}>
        <div className="pb-1_5">
          <button type="reset" onClick={reset}>
            Reset Form
          </button>
        </div>
        <div className="pb-1_5">
          <button>Apply filter</button>
        </div>

        {filters.map((filter, index) => (
          <Filter
            key={index}
            index={index}
            setFilterValue={setFilterValue}
            filter={filter}
          />
        ))}
      </form>
    </section>
  );
}
