import React from "react";

function ActionDownload({ className }) {
  return (
    <svg
      className={className}
      width={25}
      height={24}
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M22.5 11.6602V19.6602C22.5 20.1906 22.2893 20.6993 21.9142 21.0744C21.5391 21.4494 21.0304 21.6602 20.5 21.6602H4.5C3.96957 21.6602 3.46086 21.4494 3.08579 21.0744C2.71071 20.6993 2.5 20.1906 2.5 19.6602V11.6602'
        stroke='#399AB3'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 2.33984V18.0398'
        stroke='#399AB3'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
      <path
        d='M17.2402 6.48047L13.1302 2.38047C12.9429 2.19422 12.6894 2.08968 12.4252 2.08968C12.161 2.08968 11.9076 2.19422 11.7202 2.38047L7.72024 6.38047'
        stroke='#399AB3'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
    </svg>
  );
}

export default ActionDownload;
