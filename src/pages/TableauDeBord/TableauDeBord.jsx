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
import MyCalendar from "../../components/MyCalendar/MyCalendar";

function TableauDeBord() {
  const [inputRangeValue, setInputRangeValue] = React.useState(0);

  const handleChange = (e) => {
    setInputRangeValue(e.target.value);
  };

  return (
    <main className='bg-custom-light h-screen text-gray-700 font-main  relative'>
      <div className='flex items-start justify-between'>
        <SideBar />
        <div className='mx-8 w-full min-h-screen max-h-screen overflow-auto scrollbar-hide pt-24'>
          <small className='font-medium mb-4'>Lundi 30 Août 2021</small>
          <h2 className='text-2xl font-semibold text-gray-900'>
            Bonjour Jean-Eude
          </h2>

          {/* Content  */}
          <div className='w-full h-full grid grid-cols-8 gap-x-6'>
            {/* Right Side  */}
            <div className='col-span-6 p-6 mt-4 bg-white rounded-md drop-shadow-sm'>
              <div className='flex items-center justify-between'>
                <div>
                  <h4 className='mb-2'>Solde d’absence</h4>
                  <div className='flex items-center space-x-2'>
                    <h2 className='text-2xl text-custom-d font-semibold'>
                      25,24
                    </h2>
                    <span className='text-lg font-light text-gray-500'>
                      jours
                    </span>
                    <Arrow className='w-3 h-3 stroke-current text-custom-d mr-4' />
                  </div>
                </div>
                <Button icon={Add} label='Faire une demande' />
              </div>
              {/* Table  */}
              <div className='w-full grid grid-cols-4 mt-12 mb-6 place-items-center'>
                <span className='col-span-1 w-full space-y-2'>
                  <h2 className='font-semibold text-lg text-gray-600'>
                    Type de contrat
                  </h2>
                  <p className='text-base text-gray-500'>CDI</p>
                </span>
                <span className='col-span-1 w-full space-y-2'>
                  <h2 className='font-semibold text-lg text-gray-600'>
                    Statut
                  </h2>
                  <p className='text-base text-gray-500'>Cadre</p>
                </span>
                <span className='col-span-1 w-full space-y-2'>
                  <h2 className='font-semibold text-lg text-gray-600'>
                    Début du contrat
                  </h2>
                  <p className='text-base text-gray-500'>12/01/2018</p>
                </span>
                <span className='col-span-1 w-full space-y-2'>
                  <h2 className='font-semibold text-lg text-gray-600'>
                    Fin du contrat
                  </h2>
                  <p className='text-base text-gray-500'>--</p>
                </span>
              </div>
            </div>
            {/* Left side  */}
            <div className='col-span-2 mt-4 p-4 bg-white rounded-md drop-shadow-sm'>
              <div className=' w-full flex items-center'>
                <img
                  className='w-14 rounded-lg'
                  src='http://daisyui.com/tailwind-css-component-profile-1@94w.png'
                />
                <div className='ml-2'>
                  <h2 className='text-lg font-medium text-custom-d'>
                    Cokou Jean-Eude
                  </h2>
                  <small className='font-secondary text-gray-500 text-sm'>
                    Developpeur Web
                  </small>
                </div>
              </div>
              <h2 className='text-lg font-medium mt-4'>Onbording</h2>
              <div>
                <input
                  onChange={handleChange}
                  type='range'
                  max='100'
                  name='onboarding'
                  value={inputRangeValue}
                  className=''></input>
              </div>
              <output
                className='bubble'
                htmlFor='onboarding'
                onforminput={inputRangeValue}></output>
              <button className='w-full mt-6 btn btn-outline normal-case border-custom-d text-custom-d hover:bg-custom-d hover:border-custom-d hover:text-custom-l4'>
                Mettre à jours
              </button>
            </div>
            {/* Calendar  */}

            <div className='col-span-8 mt-12 px-8 pb-6 bg-white rounded-md drop-shadow-sm'>
              <MyCalendar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TableauDeBord;
