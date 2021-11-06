import React from "react";

function Arrow({ className }) {
  return (
    <svg
      className={className}
      width={10}
      height={5}
      viewBox='0 0 10 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.41492 0.849609L4.49742 3.93211C4.63794 4.0718 4.82803 4.1502 5.02617 4.1502C5.22431 4.1502 5.41439 4.0718 5.55492 3.93211L8.55492 0.932109'
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
    </svg>
  );
}

export default Arrow;
