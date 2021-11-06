import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

function SideBarItems({ icon: Icon, name, to = "" }) {
  return (
    <NavLink
      to={to}
      activeClassName=' bg-custom-light !text-custom-d'
      className='w-full   text-custom-l2  hover:bg-custom-light hover:text-custom-d flex items-center pl-8 p-2 py-3  my-2 transition-colors duration-200 justify-start'
      href='#'>
      <span className='text-left'>
        <Icon className=' fill-current  group-hover:text-custom-d' />
      </span>
      <span className='ml-8 mx-2 text-lg font-normal'>{name}</span>
    </NavLink>
  );
}

SideBarItems.propTypes = {
  icon: PropTypes.element,
  name: PropTypes.string,
  to: PropTypes.string,
};

export default SideBarItems;
