import React, { useState } from "react";
import { Filter } from "./FilterInput";
import Events from "../events.json";

const initialFilterState = [
  {
    inputType: "text",
    operator: "search",
    value: "",
    label: "city",
    key: "city"
  },
  {
    inputType: "number",
    operator: "gt-eq",
    value: "",
    label: "price",
    key: "minPrice"
  },
  {
    inputType: "checkbox",
    operator: "min",
    value: "",
    label: "lowest price",
    key: "minPrice"
  }
];

const filterEvents = (events, filter) => {
  switch (filter.operator) {
    case "gt-eq":
      return events.filter((event) => {
        const eventValue = Number(event[filter.key]);
        const filterValue = Number(filter.value);
        return filterValue >= eventValue;
      });

    case "search":
      return events.filter((event) => {
        const eventValue = String(event[filter.key]).toLowerCase();
        const keyword = filter.value.toLowerCase();
        return eventValue.includes(keyword);
      });
    default:
      throw new Error("Invalid operator");
  }
};

const operators = {
  search: (needle, haystack) =>
    haystack.toLowerCase().includes(needle.toLowerCase()),
  gt_eq: (needle, haystack) => Number(needle) >= Number(haystack)
};

export function FilterComponent({ events, setEvents }) {
  const [filters, setFilters] = useState(initialFilterState);

  /**
   * @param {'city'|'price'} key
   * @param {string} value
   */
  const setFilterValue = (key, value) => {
    const updatedFilter = filters.map((item) =>
      item.key === key
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
    // const filteredEvents = Events.filter((event) => {
    //   // Check if all filter matches the event
    //   return filters.every((filter) => {
    //     //Is filter input empty?
    //     if (!filter.value) {
    //       return true;
    //     }

    //     const operator = filter.operator;
    //     const keyword = filter.value;
    //     const eventValue = String(event[filter.key]);

    //     const isMatched = operators[operator](keyword, eventValue);
    //     if (isMatched) {
    //       return true;
    //     }
    //   });
    // });

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
          <Filter key={index} setFilterValue={setFilterValue} filter={filter} />
        ))}
      </form>
    </section>
  );
}
