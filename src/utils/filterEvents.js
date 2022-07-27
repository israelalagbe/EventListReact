export const filterEvents = (events, filter) => {
  switch (filter.operator) {
    case "gt-eq":
      return events.filter((event) => {
        const eventValue = Number(event[filter.key]);
        const filterValue = Number(filter.value);
        return filterValue >= eventValue;
      });
    case "min":
      const minEvent = events.reduce((prev, next) => {
        if (!prev) {
          return next;
        }

        return prev[filter.key] < next[filter.key] ? prev : next;
      });
      return minEvent ? [minEvent] : [];

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
