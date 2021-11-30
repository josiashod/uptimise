import React from "react";

function Category({ className }) {
  return (
    <svg
      className={className}
      width={19}
      height={17}
      viewBox='0 0 19 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.65723 0.166016H5.65436C6.90464 0.166016 7.90663 1.12435 7.90663 2.30018V5.14102C7.90663 6.32435 6.90464 7.27435 5.65436 7.27435H2.65723C1.41582 7.27435 0.404951 6.32435 0.404951 5.14102V2.30018C0.404951 1.12435 1.41582 0.166016 2.65723 0.166016ZM2.65723 9.7241H5.65436C6.90464 9.7241 7.90663 10.6749 7.90663 11.8583V14.6991C7.90663 15.8741 6.90464 16.8324 5.65436 16.8324H2.65723C1.41582 16.8324 0.404951 15.8741 0.404951 14.6991V11.8583C0.404951 10.6749 1.41582 9.7241 2.65723 9.7241ZM15.8872 0.166016H12.8901C11.6398 0.166016 10.6378 1.12435 10.6378 2.30018V5.14102C10.6378 6.32435 11.6398 7.27435 12.8901 7.27435H15.8872C17.1287 7.27435 18.1395 6.32435 18.1395 5.14102V2.30018C18.1395 1.12435 17.1287 0.166016 15.8872 0.166016ZM12.8901 9.7241H15.8872C17.1287 9.7241 18.1395 10.6749 18.1395 11.8583V14.6991C18.1395 15.8741 17.1287 16.8324 15.8872 16.8324H12.8901C11.6398 16.8324 10.6378 15.8741 10.6378 14.6991V11.8583C10.6378 10.6749 11.6398 9.7241 12.8901 9.7241Z'
      />
    </svg>
  );
}

export default Category;
