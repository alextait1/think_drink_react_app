import React from 'react';

export const Dropdown = ({
  options,
  onChange
}) => (
  <select onChange={onChange}>
    {options.map(option => (
      <option value={option.value} key={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);

