import React from "react";
import PropTypes from "prop-types";
import MiArrow from "../icons/MiArrow";
import SplitBoxItems from "./SplitBoxItems";
import { data } from "autoprefixer";

const FAKE_DATA = [{}];

function SplitBox({
  datas,
  renderItem,
  title,
  status,
  componentTitle = "",
  date,
  startDate = "29 Mars",
  endDate = "01 Avril 2021",
  setSelectSplitBox,
}) {
  const [activeSplitBox, setActiveSplitBox] = React.useState(true);

  const handleClick = () => {
    setActiveSplitBox((prev) => !prev);
  };
  return (
    <div>
      <span
        onClick={handleClick}
        className='flex items-center bg-custom-l3 pl-4 py-1 space-x-2 cursor-pointer'>
        <MiArrow />
        <h2 className='w-full  text-sm 2xl:text-lg  text-gray-900 font-medium'>
          {title}
        </h2>
      </span>
      {activeSplitBox && (
        <div className='divide-y-2 divide-gray-200 transition-all'>
          {datas.filter((data) => data.status === status).map(renderItem)}
        </div>
      )}
    </div>
  );
}

export default SplitBox;

{
  /* <SplitBoxItems
  setSelectSplitBox={setSelectSplitBox}
  headText='Autre'
  headValue='20.000'
  bodyText='Petit déjeuner'
  date={date || "01 Avril 2021"}
  status={status}
  componentTitle={componentTitle}
/>; */
}
