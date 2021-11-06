import React from "react";
import ActionDownload from "./icons/ActionDownload";

function SmallInputFile() {
  return (
    <div className='form-control'>
      <span className='font-semibold text-sm mb-2 text-gray-900'>
        Envoyer un fichier
      </span>
      <label className='w-full  flex flex-row space-x-2 items-center justify-center px-2 py-3 bg-custom-l2 rounded-md tracking-wide border-2 border-custom-d border-solid cursor-pointer hover:bg-custom-l4 hover:text-white ease-linear transition-all duration-150'>
        <ActionDownload />
        <span className=' text-base text-gray-900 font-semibold leading-normal'>
          Charger un fichier
        </span>
        <input
          onChange={(e) => console.log(e.target.value)}
          type='file'
          class='hidden'
        />
      </label>
    </div>
  );
}

export default SmallInputFile;
