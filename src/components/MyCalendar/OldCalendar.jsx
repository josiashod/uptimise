import React from "react";
import Arrow from "../icons/Arrow";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import MyCalendarMonth from "./MyCalendarMonth";
import MyCalendarWeek from "./MyCalendarWeek";

import { datesGenerator } from "dates-generator";

const CalendarOptions = [
  {
    title: "Semaine",
  },
  {
    title: "Mois",
  },
  {
    title: "Liste",
  },
];

const MONTHS = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];

function MyCalendar() {
  const [activeShowWeek, setActiveShowWeek] = React.useState(true);
  const [activeShowMonth, setActiveShowMonth] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedMonth, setSelectedMonth] = React.useState(
    selectedDate.getMonth()
  );
  const [selectedWeek, setSelectedWeek] = React.useState(2);
  const [currentDays, setCurrentDays] = React.useState(selectedDate.getDay());
  const [currentWeek, setCurrentWeek] = React.useState([]);
  const [dates, setDates] = React.useState([]);
  const [calendar, setCalendar] = React.useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  });

  React.useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year,
      startingDay: 1,
    };
    const { dates, previousMonth, previousYear } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      previousMonth,
      previousYear,
    });

    // Find the current weeks
    const { month } = body;
    console.log(month);
    // console.log(dates[0]);
    let findedWeek = dates.map((week, index) => {
      if (
        week.find((days) => days.month === month && days.date === currentDays)
      ) {
        setSelectedWeek(index);
        return week;
      }
    });
    console.log(findedWeek);
    setCurrentWeek(
      [...new Set(findedWeek)].find((week) => typeof week === "object")
    );
  }, []);

  React.useEffect(() => {}, [
    activeShowWeek,
    activeShowMonth,
    currentWeek,
    calendar,
  ]);

  const handleChange = (e) => {
    console.log(e.target);
    if (!activeShowWeek && e.target.checked && e.target.id === "Semaine") {
      setActiveShowMonth((prev) => !prev);
      setActiveShowWeek((prev) => !prev);
      console.log(activeShowWeek);
    }

    if (!activeShowMonth && e.target.checked && e.target.id === "Mois") {
      setActiveShowWeek((prev) => !prev);
      setActiveShowMonth((prev) => !prev);
      console.log(activeShowMonth);
    }
  };

  const handleSelectedMonth = (e) => {
    const body = {
      month: parseInt(e.target.value),
      year: calendar.year,
      startingDay: 1,
    };
    const { dates, previousMonth, previousYear } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      previousMonth,
      previousYear,
    });
  };

  const handleSelectedWeek = (e) => {
    setActiveShowWeek(e.target.value);
    setCurrentWeek(dates[e.target.value]);
  };

  const handleNext = () => {
    if (activeShowMonth) {
      const body = { month: calendar.nextMonth, year: calendar.nextYear };
      const {
        dates,
        nextMonth,
        nextYear,
        previousMonth,
        previousYear,
      } = datesGenerator(body);

      setDates([...dates]);
      setCalendar({
        ...calendar,
        month: calendar.nextMonth,
        year: calendar.nextYear,
        nextMonth,
        nextYear,
        previousMonth,
        previousYear,
      });
    } else {
    }
  };

  const handlePrev = () => {
    if (activeShowMonth) {
      const body = {
        month: calendar.previousMonth,
        year: calendar.previousYear,
      };
      const {
        dates,
        nextMonth,
        nextYear,
        previousMonth,
        previousYear,
      } = datesGenerator(body);

      setDates([...dates]);
      setCalendar({
        ...calendar,
        month: calendar.previousMonth,
        year: calendar.previousYear,
        nextMonth,
        nextYear,
        previousMonth,
        previousYear,
      });
    } else {
    }
  };
  console.log(dates);
  return (
    <div className='mt-6 lg:mt-12 w-full '>
      <div className='flex w-full justify-between'>
        <div className='w-full flex space-x-1 2xl:space-x-3'>
          <div className='flex items-center space-x-2 2xl:space-x-4'>
            <ChevronLeft
              onClick={handleNext}
              className=' w-2 h-2 2xl:w-3 2xl:h-3 cursor-pointer'
            />
            <h3 className='text-[.8em] 2xl:text-base'> Aujourd'hui</h3>
            <ChevronRight
              onClick={handlePrev}
              className='w-2 h-2 2xl:w-3 2xl:h-3 cursor-pointer'
            />
          </div>
          <div className='flex items-center space-x-1 2xl:space-x-4'>
            {/* // Select box of the month */}
            {(activeShowWeek && (
              <>
                <label
                  htmlFor='month'
                  className='flex items-center cursor-pointer'>
                  <select
                    onChange={handleSelectedWeek}
                    name='week'
                    className='appearance-none text-[.7em] 2xl:text-base'>
                    {dates.map((week, key) => (
                      <option
                        key={key}
                        value={key}
                        selected={key === parseInt(selectedWeek)}>
                        {`La semaine du ${week[0].date} ${
                          MONTHS[week[0].month]
                        }  au ${week[6].date} ${MONTHS[week[6].month]} `}
                      </option>
                    ))}
                  </select>
                  <Arrow className='text-custom-d stroke-current' />
                </label>
              </>
            )) ||
              // Selecte box of the Month
              (activeShowMonth && (
                <>
                  <label
                    htmlFor='month'
                    className='flex items-center 2xl:space-x-1 cursor-pointer'>
                    <select
                      onChange={handleSelectedMonth}
                      name='month'
                      className='appearance-none  text-[.7em] 2xl:text-base'>
                      {MONTHS.map((value, key) => (
                        <option
                          key={key}
                          value={key}
                          selected={key === parseInt(calendar.month)}>
                          {value + " " + calendar.year}
                        </option>
                      ))}
                    </select>
                    <Arrow className='text-custom-d stroke-current' />
                  </label>
                </>
              ))}
          </div>
        </div>
        <div>
          <div className='btn-group w-max  space-x-1'>
            {CalendarOptions.map(({ title }) => (
              <input
                key={title}
                onChange={handleChange}
                type='radio'
                name='options'
                id={title}
                data-title={title}
                className='btn text-[.7em] 2xl:text-base min-h-[2em] 2xl:min-h-[3em] !h-0 !px-1 2xl:!px-3 text-center checked:!bg-custom-l3 capitalize checked:text-custom-d border  checked:!border-custom-l3 !bg-gray-300 !border-gray-300 !text-gray-900 font-normal'
              />
            ))}
          </div>
        </div>
      </div>
      {(activeShowWeek && (
        <MyCalendarWeek
          datas={currentWeek}
          currentDays={currentDays}
          dates={dates}
        />
      )) ||
        (activeShowMonth && (
          <MyCalendarMonth
            datas={dates}
            currentDays={currentDays}
            currentMonth={calendar.month}
          />
        ))}
    </div>
  );
}

export default MyCalendar;
