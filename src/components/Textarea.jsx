import React from "react";
import PropTypes from "prop-types";

function Textarea({ label, name, placeholder }) {
  return (
    <div class='form-control'>
      <label class='label'>
        <span class='label-text  text-[.8em] 2xl:text-base text-gray-900 font-semibold'>
          {label}
        </span>
      </label>
      <textarea
        className='textarea  text-[.8em] 2xl:text-base h-24 textarea-bordered bg-gray-50 border-2 border-custom-l3  focus:shadow-none focus:ring-custom-l3 focus:ring-2'
        placeholder={placeholder}
        name={name}></textarea>
    </div>
  );
}

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
