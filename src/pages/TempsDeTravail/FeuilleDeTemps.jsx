import React from "react";

function FeuilleDeTemps() {
  returns(
    <table className='table w-full'>
      <thead className='!bg-custom-l3 z-50'>
        <tr className=''>
          <th className='!bg-transparent !normal-case !font-medium'>Ref</th>
          <th className='!bg-transparent !normal-case !font-medium'>
            Projet / Type d’activité
          </th>
          <th className='!bg-transparent !normal-case !font-medium'>
            Début et fin
          </th>
          <th className='!bg-transparent !normal-case !font-medium'>
            Jour alloué (jr)
          </th>
          <th className='!bg-transparent !normal-case !font-medium'>
            Jour consommé (jr)
          </th>
          <th className='!bg-transparent !normal-case !font-medium'>
            Jour restants ( jr)
          </th>
        </tr>
      </thead>
      <tbody className=''>
        <tr className=''>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>RT128F</td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>
            Managemnet de projet
          </td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>
            12/09/2021 - 12/11/2021
          </td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>8</td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>4.5</td>
          <td>3.5</td>
        </tr>
        <tr className=''>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>RT128F</td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>
            Managemnet de projet
          </td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>
            12/09/2021 - 12/11/2021
          </td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>8</td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>4.5</td>
          <td>3.5</td>
        </tr>
        <tr className=''>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>RT128F</td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>
            Managemnet de projet
          </td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>
            12/09/2021 - 12/11/2021
          </td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>8</td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>4.5</td>
          <td>3.5</td>
        </tr>
        <tr className=''>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>RT128F</td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>
            Managemnet de projet
          </td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>
            12/09/2021 - 12/11/2021
          </td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>8</td>
          <td className='!border-r-2 !border-b-0 !border-gray-300'>4.5</td>
          <td>3.5</td>
        </tr>
      </tbody>
    </table>
  );
}

export default FeuilleDeTemps;
