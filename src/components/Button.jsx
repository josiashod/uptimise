import React from "react";
import PropTypes from "prop-types";

function Button({ label, type = "fill", icon: Icon, className = "" }) {
  return (
    <button
      className={
        (type === "fill" &&
          `${className} btn normal-case text-custom-l4 bg-custom-d border-custom-d hover:bg-custom-d1 hover:border-custom-d1`) ||
        (type === "outline" &&
          `${className} btn btn-outline normal-case border-custom-d text-custom-d hover:bg-custom-d hover:border-custom-d hover:text-custom-l4`)
      }
      role='button'
      aria-pressed='true'>
      {Icon && (
        <Icon className='h-5 w-5 fill-current stroke-[3px] font-bold mr-3' />
      )}
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["fill", "outline"]),
  icon: PropTypes.element,
};

export default Button;
