import React from "react";

function Add({ className }) {
  return (
    <svg
      className={className}
      width={40}
      height={40}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M33.3334 20H6.66675'
        stroke='#FFFFFF'
        strokeWidth={5}
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
      <path
        d='M20 33.3334V6.66675'
        stroke='#FFFFFF'
        strokeWidth={5}
        strokeinecap='round'
        strokewinejoin='bevel'
      />
    </svg>
  );
}

export default Add;
