import React from 'react';

export default function ProductBenefit({ icon: Icon, text }) {
  return (
    <div className="product-benefit">
      <div className="benefit-icon-wrapper">
        <Icon size={20} />
      </div>
      <span>{text}</span>
    </div>
  );
}
