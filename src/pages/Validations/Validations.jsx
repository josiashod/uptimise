import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Search from "../../components/icons/Search";
import Notification from "../../components/icons/Notification";
import SplitBox from "../../components/SplitBox/SplitBox";
import Input from "../../components/Input";
import SearchBarWithSelectBox from "../../components/SearchBarWithSelectBox";

import SplitBoxItems from "../../components/SplitBox/SplitBoxItems";
import AfficherValidation from "./AfficherValidation";

const FAKE_DATA = [
  {
    id: 1,
    headText: "Congé payé",
    name: "Eric Bertrant",
    image: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
    date: "01 Avril 1960",
    status: "pending",
  },
  {
    id: 2,
    headText: "Congé payé ",
    name: "Eric Bertrant",
    image: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
    date: "01 Avril 1960",
    status: "pending",
  },
  {
    id: 3,
    headText: "Congé payé",
    name: "Eric Bertrant",
    image: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
    date: "01 Avril 1960",
    status: "validated",
  },
  {
    id: 4,
    headText: "Congé payé ",
    name: "Eric Bertrant",
    image: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
    date: "01 Avril 1960",
    status: "validated",
  },
  {
    id: 5,
    headText: "Congé payé",
    name: "Eric Bertrant",
    image: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
    date: "01 Avril 1960",
    status: "refused",
  },
  {
    id: 6,
    headText: "Congé payé ",
    name: "Eric Bertrant",
    image: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
    date: "01 Avril 1960",
    status: "refused",
  },
];

const DONNEES = [
  {
    id: "H3",
    name: "type 1",
  },
  {
    id: "H4",
    name: "type 2",
  },
  {
    id: "H5",
    name: "type 3",
  },
];

function Validations() {
  const [selectPlitBox, setSelectSplitBox] = React.useState(null);

  React.useEffect(() => {
    // console.log(selectPlitBox)
  }, [selectPlitBox]);
    // console.log("Re-render all items");
    // console.log(selectPlitBox);
  return (
    <main className='bg-custom-light h-screen text-gray-700 font-main  relative'>
      <div className='flex items-start justify-between'>
        <SideBar />
        <div className='mx-8 w-full h-full min-h-screen max-h-screen overflow-auto scrollbar-hide'>
          <div className='lg:mb-10 mb-20 w-full mt-2 flex justify-end items-center'>
            <div className='m-6 indicator'>
              <div className='w-1.5 h-1.5 p-0 bg-blue-600 border-blue-600 indicator-item badge badge-secondary'></div>
              <Notification className=' fill-current text-gray-400' />
            </div>
            <img
              className='w-12 rounded-xl'
              src='http://daisyui.com/tailwind-css-component-profile-1@94w.png'
            />
            <div className='ml-2'>
              <h2 className='text-base text-custom-d'>Cokou Jean-Eude</h2>
              <small className='font-secondary text-gray-500 text-sm'>
                Developpeur Web
              </small>
            </div>
          </div>
          <div className='flex justify-between mb-2'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Validations
            </h2>
          </div>
          {/* Content  */}
          <div className='w-full h-full bg-white grid grid-cols-7 '>
            {/* Right Side  */}
            <div className='col-span-2'>
              {/* Search Bar  */}
              <div className='mx-4 mt-2'>
                <SearchBarWithSelectBox name="type"/>
              </div>

              <div>
                <SplitBox
                  title='En attente'
                  datas={FAKE_DATA}
                  status='pending'
                  renderItem={({
                    id,
                    headText,
                    name,
                    image,
                    bodyText,
                    date,
                    status,
                  }) => (
                    <SplitBoxItems
                      key={id}
                      id={id}
                      active={selectPlitBox ? selectPlitBox.id : null}
                      setSelectSplitBox={setSelectSplitBox}
                      componentTitle='Validations'
                      headText={headText}
                      person={name}
                      image={image}
                      bodyText={bodyText}
                      date={date}
                      status={status}
                    />
                  )}
                />
                <SplitBox
                  title='Validé'
                  datas={FAKE_DATA}
                  status='validated'
                  renderItem={({
                    id,
                    headText,
                    name,
                    image,
                    bodyText,
                    date,
                    status,
                  }) => (
                    <SplitBoxItems
                      key={id}
                      id={id}
                      active={selectPlitBox ? selectPlitBox.id : null}
                      setSelectSplitBox={setSelectSplitBox}
                      componentTitle='Validations'
                      headText={headText}
                      person={name}
                      image={image}
                      bodyText={bodyText}
                      date={date}
                      status={status}
                    />
                  )}
                />
                <SplitBox
                  title='Refusé'
                  datas={FAKE_DATA}
                  status='refused'
                  renderItem={({
                    id,
                    headText,
                    name,
                    image,
                    bodyText,
                    date,
                    status,
                  }) => (
                    <SplitBoxItems
                      key={id}
                      id={id}
                      active={selectPlitBox ? selectPlitBox.id : null}
                      setSelectSplitBox={setSelectSplitBox}
                      componentTitle='Validations'
                      headText={headText}
                      person={name}
                      image={image}
                      bodyText={bodyText}
                      date={date}
                      status={status}
                    />
                  )}
                />
              </div>
            </div>

            {/* Left Side  */}
            <div className='col-span-5 w-full'>
              {selectPlitBox?.status && (
                <AfficherValidation status={selectPlitBox?.status} person={selectPlitBox.person} image={selectPlitBox.image} />
                // {selectPlitBox}
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Validations;
