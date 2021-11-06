import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Arrow from "../../components/icons/Arrow";
import Button from "../../components/Button";
import Search from "../../components/icons/Search";
import Pending from "../../components/icons/Pending";
import MiArrow from "../../components/icons/MiArrow";
import Success from "../../components/icons/Success";
import Notification from "../../components/icons/Notification";
import MyCalendar from "../../components/MyCalendar/MyCalendar";
import Input from "../../components/Input";
import SplitBox from "../../components/SplitBox/SplitBox";
import Add from "../../components/icons/Add";
import Badge from "../../components/Badge";

function AbsencesEnAttentes({ status }) {
  console.log(status);
  return (
    <>
      <div className='flex items-center mb-3 justify-between space-x-2'>
        <div className='flex items-center space-x-2 '>
          <h2 className='text-lg text-gray-900 font-semibold'>Congés payés</h2>
          <Badge status={status} />
        </div>
        {status === "pending" && (
          <button className='px-4 py-3 border-2 border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-red-100 rounded-md'>
            Annuler l’absence
          </button>
        )}
      </div>
      <div className='w-full h-full px-8 pt-6 border border-gray-200'>
        <div className='w-full grid grid-cols-3 place-items-center'>
          <span className='col-span-1 w-full space-y-2'>
            <h2 className='font-semibold text-lg text-gray-600'>Date</h2>
            <p className='text-base text-gray-500'>01/04/2021</p>
          </span>
          <span className='col-span-1 w-full space-y-2'>
            <h2 className='font-semibold text-lg text-gray-600'>Type</h2>
            <p className='text-base text-gray-500'>Transport</p>
          </span>
          <span className='col-span-1 w-full space-y-2'>
            <h2 className='font-semibold text-lg text-gray-600'>Montant</h2>
            <p className='text-base text-gray-500'>20.000</p>
          </span>
        </div>
        <div class='tabs w-full my-10 border-b-2 -pb-6'>
          <a class='tab tab-bordered tab-active -mb-0.5 text-lg !border-custom-d'>
            Calendrier
          </a>
          <a class='tab  text-lg'>Justificatif</a>
          <a class='tab  text-lg'>Commentaires</a>
        </div>
        {/* Table  */}
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead className='!bg-custom-l3 z-50'>
              <tr className=''>
                <th className='!bg-transparent'>Début des congés</th>
                <th className='!bg-transparent'>Fin des congés</th>
                <th className='!bg-transparent '>Durée</th>
              </tr>
            </thead>
            <tbody className='divide-y-2 divide-gray-300'>
              <tr>
                <td>24/09/2021</td>
                <td>24/09/2021</td>
                <td>4 jours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <MyCalendar />
      </div>
    </>
  );
}

export default AbsencesEnAttentes;
