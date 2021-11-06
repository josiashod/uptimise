import React from "react";
import Button from "../../components/Button";

function CRA() {
  return (
    <div className='grid grid-cols-9'>
      <div className='col-span-6 '>
        <table className='table w-full'>
          <thead className='!bg-custom-l3 z-50'>
            <tr className=''>
              <th className='!bg-transparent !normal-case !font-medium'>
                Action
              </th>
              <th className='!bg-transparent !normal-case !font-medium'>Ref</th>
              <th className='!bg-transparent !normal-case !font-medium'>
                Code
              </th>
              <th className='!bg-transparent !normal-case !font-medium'>
                Projet / Type d’activité
              </th>
            </tr>
          </thead>
          <tbody className=''>
            <tr className=''>
              <td className='!border-r-2 !border-b-0 !border-gray-300'>...</td>
              <td className='!border-r-2 !border-b-0 !border-gray-300'>0001</td>
              <td className='!border-r-2 !border-b-0 !border-gray-300'>
                RT02F
              </td>
              <td>Managemnet de projet</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='col-span-3'>
        <div className='w-full border-l-4 border-custom-l2'>
          <div className='w-full text-center bg-custom-l3 py-1 '>
            <h3 className='text-[.6em] 2xl:text-base'>
              Ma feuille de temps du 13/09/2021 au 19/09/2021
            </h3>
            <div className='grid grid-cols-7 py-1.5 2xl:py-0'>
              <span className='text-[.5em] 2xl:text-xs font-semibold'>
                Lun 26
              </span>
              <span className='text-[.5em] 2xl:text-xs font-semibold'>
                Mar 27
              </span>
              <span className='text-[.5em] 2xl:text-xs font-semibold'>
                Mer 28
              </span>
              <span className='text-[.5em] 2xl:text-xs font-semibold'>
                Jeu 29
              </span>
              <span className='text-[.5em] 2xl:text-xs font-semibold'>
                Ven 30
              </span>
              <span className='text-[.5em] 2xl:text-xs font-semibold'>
                Sam 31
              </span>
              <span className='text-[.5em] 2xl:text-xs font-semibold'>
                Dim 01
              </span>
            </div>
          </div>
          <div className='grid grid-cols-7'>
            {/* 1 */}
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 bg-gray-200 '></span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300  bg-gray-200'></span>
            {/* 2 */}
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 bg-gray-200'></span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 bg-gray-200'></span>
            {/* 3 */}
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 bg-gray-200'></span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 bg-gray-200'></span>
            {/* 4 */}
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 '>
              1
            </span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 bg-gray-200'></span>
            <span className='col-span-1 py-4  text-xs text-center border-r border-gray-300 bg-gray-200'></span>
          </div>
        </div>
        <div className='relative border grid grid-cols-7 border-t-4 border-gray-300'>
          <span className='col-span-1 py-1  text-xs text-center border-r border-gray-300 bg-[#F7F8FC]  '>
            1
          </span>
          <span className='col-span-1 py-1  text-xs text-center border-r border-gray-300 bg-[#F7F8FC] '>
            1
          </span>
          <span className='col-span-1 py-1  text-xs text-center border-r border-gray-300 bg-[#F7F8FC] '>
            1
          </span>
          <span className='col-span-1 py-1  text-xs text-center border-r border-gray-300 bg-[#F7F8FC] '>
            1
          </span>
          <span className='col-span-1 py-1  text-xs text-center border-r border-gray-300 bg-[#F7F8FC] '>
            1
          </span>
          <span className='col-span-1 py-1  text-xs text-center border-r border-gray-300 bg-gray-200'></span>
          <span className='col-span-1 py-1  text-xs text-center border-r border-gray-300 bg-gray-200'></span>
          {/* Total  */}
          <span className='absolute -left-12 h-full py-1 px-2 text-xs font-semibold text-center border-b border-gray-300 bg-[#F7F8FC]'>
            Total
          </span>
        </div>
      </div>
      {/* Button  */}
      <div className='col-span-9'>
        <div className='flex justify-end ml-auto space-x-2 mt-12'>
          <Button label='Soumettre la feuille de temps' type='outline' />
          <Button label='Valider' type='fill' />
        </div>
      </div>
    </div>
  );
}

export default CRA;
