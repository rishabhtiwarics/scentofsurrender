import React from 'react';

export default function FilterOptions({ options, value, onChange, name }) {
  return (
    <div className="filter-options">
      {options.map((option) => (
        <label key={option} className="filter-option-label">
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
          />
          <span className="filter-radio-custom"></span>
          {option}
        </label>
      ))}
    </div>
  );
}
