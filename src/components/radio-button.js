import React from 'react';

export const RadioButton = ({ label, name, onChange, value }) => (
  <label htmlFor={name}>
    <input
      onChange={onChange}
      type="radio"
      id={name}
      name={name}
      value={value}
    />
    {label}
  </label>
);
