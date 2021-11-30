import React from "react";
import ChevronRight from "../icons/ChevronRight";
import StatusIcons from "../StatusIcons";

function SplitBoxItems({
  setSelectSplitBox,
  id,
  headText = "Transport",
  headValue = "20.000",
  bodyText = "Essence",
  date = "01 Avril 2021",
  startDate = "29 Mars",
  endDate = "01 Avril 2021",
  status,
  componentTitle,
  person,
  image,
  active
}) {
  // const [active, setActive] = React.useState(null);
  const handleClick = () => {
    setSelectSplitBox({ id, headText, startDate, endDate, status, person, image });
    // if (active !== id) {
    //   active = id;
    // }
    // console.log(id);
  };
  // React.useEffect(() => {}, [active]);
  return (
    <div
      onClick={handleClick}
      className={`px-3 py-4 ${active === id && "bg-custom-l1"} cursor-pointer`}>
      {(componentTitle === "NoteDeFrais" && (
        <>
          <span className='flex justify-between pb-1.5'>
            <h2 className='uppercase text-xs 2xl:text-md '>{headText}</h2>
            <small className='text-lg'>{headValue}</small>
          </span>
          <span className='flex justify-between pb-1.5'>
            <h2 className='text-xs 2xl:text-lg  font-medium'>{bodyText}</h2>
          </span>
          <span className='flex items-center justify-between pb-1.5'>
            <h2 className='text-xs 2xl:text-lg  '>{date}</h2>
            <StatusIcons status={status} />
          </span>
        </>
      )) ||
        (componentTitle === "Absences" && (
          <>
            <span className='flex justify-between pb-1.5'>
              <h2 className='uppercase text-xs 2xl:text-md '>{headText}</h2>
              <small className='text-xs 2xl:text-lg '>{headValue}</small>
            </span>
            <span className='flex items-center justify-between pb-1.5'>
              <h2 className='text-xs 2xl:text-lg  '>
                {startDate + " - " + endDate}
              </h2>
              <StatusIcons status={status} />
            </span>
          </>
        )) ||
        (componentTitle === "BulletinDePaie" && (
          <>
            <span className='flex items-center justify-between'>
              <h2 className='text-xs 2xl:text-lg  '>{date}</h2>
              <ChevronRight className='w-3 h-2 2xl:w-6 2xl:h-4 stroke-current text-gray-300' />
            </span>
          </>
        ))||
        (componentTitle === "Validations" && (
          <>
            <span className='flex justify-between pb-1.5'>
              <h2 className='uppercase text-xs 2xl:text-md '>{headText}</h2>
            </span>
            <div className='pb-1.5 relative flex space-x-4'>
              <div className="self-center">
                <img src={image} alt={person} className="w-10 h-10 rounded-full" />
              </div>
              <div className="flex-grow">
                <h2 className='text-xs 2xl:text-lg font-semibold text-black '>
                  {person}
                </h2>
                <h3 className='text-xs 2xl:text-lg  '>
                  {startDate + " - " + endDate}
                </h3>
              </div>
              <div className="absolute right-0 bottom-0">
                <StatusIcons status={status} />
              </div>
            </div>
          </>
        ))
        }
    </div>
  );
}

export default SplitBoxItems;
