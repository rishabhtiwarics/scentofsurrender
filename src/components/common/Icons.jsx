import React from 'react';

const svgProps = (size, className) => ({
  width: size || 24,
  height: size || 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className
});

export const SlidersHorizontal = ({ size, className }) => (
  <svg {...svgProps(size, className)}><line x1="21" y1="4" x2="14" y2="4"></line><line x1="10" y1="4" x2="3" y2="4"></line><line x1="21" y1="12" x2="12" y2="12"></line><line x1="8" y1="12" x2="3" y2="12"></line><line x1="21" y1="20" x2="16" y2="20"></line><line x1="12" y1="20" x2="3" y2="20"></line><line x1="14" y1="2" x2="14" y2="6"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="16" y1="18" x2="16" y2="22"></line></svg>
);

export const Search = ({ size, className }) => (
  <svg {...svgProps(size, className)}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

export const WalletCards = ({ size, className }) => (
  <svg {...svgProps(size, className)}><rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

export const CheckCircle2 = ({ size, className }) => (
  <svg {...svgProps(size, className)}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

export const Tag = ({ size, className }) => (
  <svg {...svgProps(size, className)}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
);

export const Grid2X2 = ({ size, className }) => (
  <svg {...svgProps(size, className)}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
);

export const List = ({ size, className }) => (
  <svg {...svgProps(size, className)}><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
);

export const ChevronLeft = ({ size, className }) => (
  <svg {...svgProps(size, className)}><polyline points="15 18 9 12 15 6"></polyline></svg>
);

export const ChevronRight = ({ size, className }) => (
  <svg {...svgProps(size, className)}><polyline points="9 18 15 12 9 6"></polyline></svg>
);

export const Star = ({ size, className, fill }) => (
  <svg {...svgProps(size, className)} fill={fill || 'none'}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

export const Minus = ({ size, className }) => (
  <svg {...svgProps(size, className)}><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

export const Plus = ({ size, className }) => (
  <svg {...svgProps(size, className)}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

export const ShoppingBag = ({ size, className }) => (
  <svg {...svgProps(size, className)}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
);

export const ShieldCheck = ({ size, className }) => (
  <svg {...svgProps(size, className)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
);

export const Banknote = ({ size, className }) => (
  <svg {...svgProps(size, className)}><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
);

export const MapPinned = ({ size, className }) => (
  <svg {...svgProps(size, className)}><path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0z"></path><circle cx="12" cy="8" r="2"></circle><path d="M8.71 15.4C7.03 16.5 5 17 3 17v4c2 0 4-.5 5.71-1.6"></path><path d="M15.29 15.4C16.97 16.5 19 17 21 17v4c-2 0-4-.5-5.71-1.6"></path></svg>
);

export const Truck = ({ size, className }) => (
  <svg {...svgProps(size, className)}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
);
