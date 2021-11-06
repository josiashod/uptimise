import React from "react";

const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function MyCalendarWeek({ datas, currentDays, currentMonth }) {
  return (
    <div className='mt-2 border-2 divide-y-2 h-full w-full'>
      <div className='grid grid-cols-7 h-10 divide-x-2'>
        {DAYS.map((d, key) => (
          <h4
            key={key}
            className='text-right text-[.8em] 2xl:text-base flex items-center justify-end pr-2'>
            {d}
          </h4>
        ))}
      </div>
      <div className='grid grid-cols-7 h-72 divide-x-2'>
        {datas.map(({ date }) => (
          <h4
            className={`text-right text-[.8em] 2xl:text-base mr-2 flex justify-end ${
              date === currentDays ? "text-gray-900" : "text-gray-400"
            } pt-2 pr-21 font-semibold`}>
            {date}
          </h4>
        ))}
      </div>
    </div>
  );
}

export default MyCalendarWeek;
