import React from "react";
import PropTypes from "prop-types";

const DONNEES = [
  {
    id: "H3",
    fullName: "John Doe",
    competence: "Web developper",
  },
  {
    id: "H4",
    fullName: "Taric Show",
    competence: "Designer",
  },
  {
    id: "H5",
    fullName: "Sarah Show",
    competence: "CEO",
  },
];

function Select({ label, name, placeholder = "", error, datas, renderItem }) {
  console.log(typeof renderItem);
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text  text-[.8em] 2xl:text-base text-gray-900 font-medium'>
          {label}
        </span>
      </label>
      <select
        name={name}
        className='select select-bordered  text-[.8em] 2xl:text-base rounded-md text-gray-700 w-full bg-gray-50 border-2 border-custom-l3  focus:shadow-none focus:ring-custom-l3 focus:ring-2'>
        <option disabled='disabled' selected='selected'>
          {placeholder}
        </option>
        {datas.map(renderItem)}
      </select>

      <label className='label'>
        <small href='#' className='label-text-alt text-error'>
          {error}
        </small>
      </label>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  datas: PropTypes.array,
};

export default Select;
