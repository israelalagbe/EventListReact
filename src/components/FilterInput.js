import React from "react";

/**
 * Generic filter input component
 * @param {object} props
 */
export function Filter({ setFilterValue, filter }) {
  return (
    <label>
      {filter.inputType === "checkbox" ? filter.label : null}
      <input
        type={filter.inputType}
        onChange={(e) => setFilterValue(filter.key, e.target.value)}
        value={filter.value}
        placeholder={`filter by ${filter.label}`}
      />
    </label>
  );
}
