import React from 'react';

export default function BottleSizeOptions({ options, selected, onSelect }) {
  if (!options || options.length === 0) return null;
  return (
    <div className="bottle-size-options">
      <h4>Size</h4>
      <div className="size-buttons">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={selected === option ? 'active' : ''}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
