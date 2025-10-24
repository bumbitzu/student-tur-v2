import React from 'react';

export const PhoneIcon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 5a2 2 0 012-2h2a1 1 0 011 1v3a1 1 0 01-.7.95l-1.8.6a12.05 12.05 0 006.8 6.8l.6-1.8A1 1 0 0115 13h3a1 1 0 011 1v2a2 2 0 01-2 2h-1C9.373 18 6 14.627 6 10V9a2 2 0 012-2H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LogoMark = ({ className = 'h-6 w-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 6h18l-1.5 9H4.5L3 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 6l2-3h6l2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8" cy="18" r="1.5" fill="currentColor" />
    <circle cx="16" cy="18" r="1.5" fill="currentColor" />
  </svg>
);
