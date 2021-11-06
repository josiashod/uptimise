import React from "react";

function MyCalendarDays({ value, active, current }) {
  return (
    <h4
      className={`text-right flex justify-end text-gray-900 pt-2 pr-2 ${
        (active && "bg-custom-l3") || (current && "bg-custom-l1")
      }`}>
      {value}
    </h4>
  );
}

export default MyCalendarDays;
