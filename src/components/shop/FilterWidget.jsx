import React from 'react';

export default function FilterWidget({ icon, title, children }) {
  return (
    <div className="filter-widget">
      <div className="filter-widget-header">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="filter-widget-content">
        {children}
      </div>
    </div>
  );
}
