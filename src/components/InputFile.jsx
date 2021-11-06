import React from "react";
import File from "./icons/File";

function InputFile() {
  return (
    <label className='w-full h-[90%] flex flex-col items-center justify-center px-4 py-6 bg-custom-light rounded-md tracking-wide border-2 border-custom-l2 border-dashed cursor-pointer hover:bg-custom-l4 hover:text-white ease-linear transition-all duration-150'>
      <File />
      <span className='mt-2 text-base text-gray-800 leading-normal'>
        Uplaoder vos pièces justificatives
      </span>
      <input
        onChange={(e) => console.log(e.target.value)}
        type='file'
        className='hidden'
      />
    </label>
  );
}

export default InputFile;
