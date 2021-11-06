import React from "react";
import PropTypes from "prop-types";
import Search from "./icons/Search";

function SearchBarWithSelectBox() {
  return (
    <div className={"form-control w-[28em]"}>
      <div className='flex items-centers  rounded-md bg-gray-50 border-custom-l3 focus-within:ring-custom-l2 focus-within:ring-2 border-2'>
        <select className='ml-2' name='' id=''>
          <option>En cours</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <div className='h-[60%] my-auto mx-2 w-1 bg-gray-300 z-10'></div>
        <input
          type='search'
          name='search-bar'
          className=' appearance-none text-gray-800 group-focus:ring-base-300 w-full bg-transparent outline-none rounded-md pl-2 py-2.5'
          placeholder='Recherche...'
        />
        <Search className='w-8 !mr-3' />
      </div>

      <label className='label'>
        <small href='#' className='label-text-alt text-error'>
          {""}
        </small>
      </label>
    </div>
  );
}

export default SearchBarWithSelectBox;
