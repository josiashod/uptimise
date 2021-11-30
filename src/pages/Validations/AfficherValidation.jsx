import React from "react";
import MyCalendar from "../../components/MyCalendar/MyCalendar";

function AfficherValidation({ status, person, image }) {
  return (
    <>
      <div className='flex items-center my-3 mx-4 justify-between space-x-2 h-12'>
        <div className='flex items-center space-x-2 '>
          <img src={image} alt={person} className="w-10 h-10 rounded-full" />
          <h2 className='text-lg text-gray-900 font-semibold'>{ person }</h2>
        </div>
        {status === "pending" && (
          <div className="space-x-4">
            <button className='px-4 py-2 border-2 border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-red-100 rounded-md text-md'>
              Refuser
            </button>
            <button className='px-4 py-2 border-2 border-green-600 bg-green-600 text-white font-medium hover:bg-white hover:text-green-600 rounded-md text-md'>
              Valider
            </button>
          </div>
        )}
      </div>
      <div className='w-full h-full px-8 pt-6 border border-gray-200'>
        <div className='w-full grid grid-cols-4 place-items-center'>
          <span className='col-span-1 w-full space-y-2'>
            <h2 className='font-semibold text-lg text-gray-600'>Date de debut</h2>
            <p className='text-base text-gray-500'>01/04/2021</p>
          </span>
          <span className='col-span-1 w-full space-y-2'>
            <h2 className='font-semibold text-lg text-gray-600'>Date de fin</h2>
            <p className='text-base text-gray-500'>01/04/2021</p>
          </span>
          <span className='col-span-1 w-full space-y-2'>
            <h2 className='font-semibold text-lg text-gray-600'>Nombre de jours</h2>
            <p className='text-base text-gray-500'>4</p>
          </span>
          <span className='col-span-1 w-full space-y-2'>
            <h2 className='font-semibold text-lg text-gray-600'>Solde</h2>
            <p className='text-base text-gray-500'>20 jours</p>
          </span>
        </div>
        <div class='tabs w-full my-10 border-b-2 -pb-6'>
          <a class='tab tab-bordered tab-active -mb-0.5 text-lg !border-custom-d'>
            Calendrier
          </a>
          <a class='tab  text-lg'>Commentaires</a>
        </div>
        {/* Table  */}
        <MyCalendar />
      </div>
    </>
  );
}

export default AfficherValidation;
