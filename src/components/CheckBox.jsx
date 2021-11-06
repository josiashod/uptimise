import React from "react";
import PropTypes from "prop-types";

function CheckBox({ label, type = "radio", name, checked }) {
  return (
    <div className='form-control w-max space-x-4'>
      <label className='label'>
        <input
          type={type}
          name={name}
          checked={checked}
          className={`checked:!bg-custom-l1 ${type} checkbox-accent    mr-3`}
        />
        <span className='label-text'>{label}</span>
      </label>
    </div>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
};

export default CheckBox;
