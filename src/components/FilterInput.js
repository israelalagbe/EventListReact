import React from "react";

/**
 * Generic filter input component
 * @param {object} props
 */
export function Filter({ setFilterValue, filter, index }) {
  return (
    <label>
      {filter.inputType === "checkbox" ? filter.label : null}
      <input
        type={filter.inputType}
        onChange={(e) =>
          setFilterValue(
            index,
            filter.inputType === "checkbox" ? e.target.checked : e.target.value
          )
        }
        value={filter.value}
        placeholder={`filter by ${filter.label}`}
      />
    </label>
  );
}
