import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Arrow from "../../components/icons/Arrow";
import Button from "../../components/Button";
import Search from "../../components/icons/Search";
import Pending from "../../components/icons/Pending";
import MiArrow from "../../components/icons/MiArrow";
import Success from "../../components/icons/Success";
import Notification from "../../components/icons/Notification";
import Add from "../../components/icons/Add";
import SplitBox from "../../components/SplitBox/SplitBox";
import { Link } from "react-router-dom";
import SplitBoxItems from "../../components/SplitBox/SplitBoxItems";
import Attentes from "./Attentes";

const FAKE_DATA = [
  {
    id: 1,
    headText: "Transport",
    headValue: "20.000",
    bodyText: "Essence",
    date: "01 Avril 1960",
    status: "pending",
  },
  {
    id: 2,
    headText: "Autre ",
    headValue: "20.000",
    bodyText: "Petit dejeuner",
    date: "01 Avril 1960",
    status: "pending",
  },
  {
    id: 3,
    headText: "Transport",
    headValue: "20.000",
    bodyText: "Essence",
    date: "01 Avril 1960",
    status: "validated",
  },
  {
    id: 4,
    headText: "Autre ",
    headValue: "20.000",
    bodyText: "Petit dejeuner",
    date: "01 Avril 1960",
    status: "validated",
  },
  {
    id: 5,
    headText: "Transport",
    headValue: "20.000",
    bodyText: "Essence",
    date: "01 Avril 1960",
    status: "refused",
  },
  {
    id: 6,
    headText: "Autre ",
    headValue: "20.000",
    bodyText: "Petit dejeuner",
    date: "01 Avril 1960",
    status: "refused",
  },
];

function NoteDeFrais() {
  const [selectPlitBox, setSelectSplitBox] = React.useState(null);

  return (
    <main className='bg-custom-light h-screen text-gray-700 font-main  relative'>
      <div className='flex items-start justify-between'>
        <SideBar />
        <div className='mx-8 w-full min-h-screen max-h-screen overflow-auto scrollbar-hide'>
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
              Mes notes de frais
            </h2>
            <div>
              <div className='flex items-center gap-x-2'>
                {/* <h2 className="text-2xl text-custom-d font-semibold">25,24</h2>
                <span className="text-lg font-light text-gray-500">solde</span>
                <Arrow /> */}
                <Link to='/notes-de-frais/ajout'>
                  <Button label='Nouvelle une note' icon={Add} type='fill' />
                </Link>
              </div>
            </div>
          </div>
          {/* Content  */}
          <div className='w-full h-full bg-white grid grid-cols-7 '>
            {/* Right Side  */}
            <div className='col-span-2'>
              {/* Search Bar  */}
              <div className='flex items-center lg:mx-4 mx-8 mb-5 rounded-md bg-gray-100 border-custom-l3 border-2'>
                <Search className='w-6 ml-2' />
                <input
                  type='text'
                  className='w-full bg-transparent outline-none rounded-md pl-2 py-3'
                  placeholder='Rechercher un bulletins ...'
                />
              </div>
              <div>
                <SplitBox
                  title='En attente'
                  datas={FAKE_DATA}
                  status='pending'
                  renderItem={({
                    headText,
                    headValue,
                    bodyText,
                    date,
                    status,
                  }) => (
                    <SplitBoxItems
                      setSelectSplitBox={setSelectSplitBox}
                      componentTitle='NoteDeFrais'
                      headText={headText}
                      headValue={headValue}
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
                    headText,
                    headValue,
                    bodyText,
                    date,
                    status,
                  }) => (
                    <SplitBoxItems
                      setSelectSplitBox={setSelectSplitBox}
                      componentTitle='NoteDeFrais'
                      headText={headText}
                      headValue={headValue}
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
                    headValue,
                    bodyText,
                    date,
                    status,
                  }) => (
                    <SplitBoxItems
                      key={id}
                      id={id}
                      setSelectSplitBox={setSelectSplitBox}
                      componentTitle='NoteDeFrais'
                      headText={headText}
                      headValue={headValue}
                      bodyText={bodyText}
                      date={date}
                      status={status}
                    />
                  )}
                />
              </div>
            </div>
            {/* Left Side  */}
            <div className='col-span-5 w-full border-gray-200 border'>
              {selectPlitBox?.status && (
                <Attentes status={selectPlitBox?.status} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NoteDeFrais;
