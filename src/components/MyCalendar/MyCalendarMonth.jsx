import React from "react";
import Days from "./MyCalendarDays";
// import { datesGenerator } from "dates-generator";

const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function MyCalendarMonth({ datas, currentDays, currentMonth }) {
  console.log(currentMonth);
  return (
    <div className='mt-2 border-2 divide-y-2 h-full w-full'>
      <div className='grid grid-cols-7 h-10 divide-x-2'>
        {DAYS.map((d, key) => (
          <h4
            key={key}
            className='text-right  text-[.8em] 2xl:text-base flex items-center justify-end pr-2'>
            {d}
          </h4>
        ))}
      </div>
      <div className='grid grid-cols-7 h-80  text-[.8em] 2xl:text-base divide-x-2 divide-y'>
        {datas.length > 0 &&
          datas.map((week) =>
            week.map((each) => (
              <Days
                value={each.date}
                active={
                  currentDays === each.date && currentMonth === each.month
                }
              />
            ))
          )}
      </div>
    </div>
  );
}

export default MyCalendarMonth;
