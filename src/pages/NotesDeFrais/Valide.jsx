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

function Valide() {
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
            {/* <div>
              <div className="flex items-center gap-x-2">
                <h2 className="text-2xl text-custom-d font-semibold">25,24</h2>
                <span className="text-lg font-light text-gray-500">solde</span>
                <Arrow />
                <Button text="Nouvelle une note" />
              </div>
            </div> */}
          </div>
          {/* Content  */}
          <div className='w-full h-full bg-white grid grid-cols-7'>
            {/* Right Side  */}
            <div className='col-span-2 pt-4'>
              {/* Search Bar  */}
              <Input
                className='px-4'
                icon={Search}
                iconPosition='left'
                placeholder='Rechercher un bulletins ...'
              />
              <div>
                <SplitBox title='En attente' status='pending' />
                <SplitBox title='Validé' status='validated' />
                <SplitBox title='Refusé' status='refused' />
              </div>
            </div>

            {/* Left Side  */}
            <div className='col-span-5 w-full mt-4'>
              {/* Title  */}
              <div className='flex items-center mb-3 justify-between space-x-2'>
                <div className='flex items-center space-x-2 '>
                  <h2 className='text-lg text-gray-900 font-semibold'>
                    Essence
                  </h2>
                  <Badge status='validated' />
                </div>
                <button className='px-4 py-3 border-2 border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-red-100 rounded-md'>
                  Annuler la note
                </button>
              </div>
              <div className='w-full h-full px-8 pt-6 border border-gray-200'>
                <div className='w-full grid grid-cols-3 place-items-center'>
                  <span className='col-span-1 w-full space-y-2'>
                    <h2 className='font-semibold text-lg text-gray-600'>
                      Date
                    </h2>
                    <p className='text-base text-gray-500'>01/04/2021</p>
                  </span>
                  <span className='col-span-1 w-full space-y-2'>
                    <h2 className='font-semibold text-lg text-gray-600'>
                      Type
                    </h2>
                    <p className='text-base text-gray-500'>Transport</p>
                  </span>
                  <span className='col-span-1 w-full space-y-2'>
                    <h2 className='font-semibold text-lg text-gray-600'>
                      Montant
                    </h2>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Valide;
