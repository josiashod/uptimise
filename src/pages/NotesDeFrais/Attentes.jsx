import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Arrow from "../../components/icons/Arrow";
import Button from "../../components/Button";
import Search from "../../components/icons/Search";
import Notification from "../../components/icons/Notification";
import SplitBox from "../../components/SplitBox/SplitBox";
import Input from "../../components/Input";
import Badge from "../../components/Badge";
import MdiEyeOutlineIcon from "../../components/icons/MdiEyeOutlineIcon";
import SecondActionDownload from "../../components/icons/SecondActionDownload";

function Attentes({ status }) {
  return (
    <>
      {/* Title  */}
      <div className='flex items-center mb-3 justify-between space-x-2'>
        <div className='flex items-center space-x-2 px-2 pt-2 '>
          <h2 className='text-lg text-gray-900 font-semibold'>Essence</h2>
          <Badge status={status} />
        </div>
        {status === "pending" && (
          <button className='px-4 py-3 border-2 border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-red-100 rounded-md'>
            Annuler la note
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
            Justificatif
          </a>
          <a class='tab  text-lg'>Commentaires</a>
        </div>
        {/* Table  */}
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead className='w-full !bg-custom-l3 z-50'>
              <tr className=' w-full'>
                <th className='!bg-transparent'>Nom de le pièce</th>
                <th className='!bg-transparent w-max '>
                  <div className='flex'>
                    <span> Date d’ajouts</span>
                    <span className='inline pl-2 space-y-0.5'>
                      <Arrow className=' rotate-180 text-gray-700 !stroke-current' />
                      <Arrow className='text-gray-700 !stroke-current' />
                    </span>
                  </div>
                </th>
                <th className='!bg-transparent w-max'>
                  <div className='flex'>
                    <span>Actions</span>
                    <span className='pl-2 space-y-0.5'>
                      <Arrow className='rotate-180 text-gray-700 !stroke-current' />
                      <Arrow className='text-gray-700 !stroke-current' />
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y-2 divide-gray-300'>
              <tr>
                <td>Aadi Kapoor</td>
                <td>24/09/2021</td>
                <td>
                  <div className='flex gap-x-2'>
                    <SecondActionDownload className='p-1 border-2 border-custom-l3 w-8 h-8 rounded-md' />
                    <MdiEyeOutlineIcon className='p-1 border-2 border-custom-l3 w-8 h-8 rounded-md' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Attentes;
