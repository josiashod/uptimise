import React from "react";
import PropTypes from "prop-types";

function Input({
  icon: Icon,
  type = "",
  label,
  name,
  placeholder = "",
  error,
  iconPosition,
  className = "",
}) {
  return (
    <div className={"form-control" + className}>
      {label && (
        <label className='label'>
          <span className='label-text  text-[.8em] 2xl:text-base text-gray-900 font-medium'>
            {label}
          </span>
        </label>
      )}
      <div className='flex items-center  rounded-md bg-gray-50 border-custom-l3 focus-within:ring-custom-l2 focus-within:ring-2 border-2'>
        {iconPosition === "left" && <Icon className='w-6 ml-2' />}
        <input
          type={type}
          name={name}
          className=' appearance-none  text-[.8em] 2xl:text-base text-gray-800 group-focus:ring-base-300 w-full bg-transparent outline-none rounded-md pl-2 py-2.5'
          placeholder={placeholder}
        />
        {iconPosition === "right" && <Icon className='w-6 !mr-3' />}
      </div>

      <label className='label'>
        <small href='#' className='label-text-alt text-error'>
          {error}
        </small>
      </label>
    </div>
  );
}

export default Input;

Input.propTypes = {
  /**
   Prend un objet representant une icon
   */
  icon: PropTypes.element,
  /**
   Prend le type d'input qui est une chaine de caractere: text | number | file ... 
   */
  type: PropTypes.string,
  /**
   Prend le label/nom de input qui est un chaine de carectere
   */
  label: PropTypes.string,
  /**
   Prend le 'name' de l'input en chaine de caractere
   */
  name: PropTypes.string,
  /**
   Prend en parametre le placeholder qui est une chaine de caractere
   */
  placeholder: PropTypes.string,
  /**
   Position l'icon a gauche ou a droite l'icon passe en parametre
   Prend que deux valeurs: 'left' | 'right'
   */
  iconPosition: PropTypes.oneOf(["left", "right"]),
  /**
   Prend les class sous la forme d'une chaine de caractere
   */
  className: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "Votre text ici...",
};
