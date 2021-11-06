import React from "react";
import SideBarItems from "./SideBarItems";
import Home from "../icons/Home";
import Calendar from "../icons/Calendar";
import Document from "../icons/Document";
import Paper from "../icons/Paper";
import TickSquare from "../icons/TickSquare";
import Category from "../icons/Category";
import Work from "../icons/Work";

function SideBar() {
  return (
    <div className='min-h-screen max-h-screen bg-[#173E48] sticky top-0 lg:block shadow-lg w-96'>
      <div className=' h-full dark:bg-gray-700'>
        <div className='flex SideBarItems-center justify-start pt-12 ml-8'>
          <p className='font-semibold text-white text-4xl dark:text-white'>
            Uptimiste
          </p>
        </div>
        <nav className='mt-8'>
          <div>
            <SideBarItems
              icon={Home}
              name='Tableau de bord'
              to='/tableau-de-bord'
            />
            <SideBarItems icon={Calendar} name='Absences' to='/absences' />
            <SideBarItems
              icon={Paper}
              name='Note de frais'
              to='/notes-de-frais'
            />
            <SideBarItems
              icon={Document}
              name='Bulletins de paie'
              to='/bulletin-de-paie'
            />
            <SideBarItems
              icon={TickSquare}
              name='Validations'
              to='/validations'
            />
            <SideBarItems
              icon={Work}
              name='Temps de travail'
              to='/temps-de-travail'
            />
            <SideBarItems
              icon={Category}
              name='Mon entreprise'
              to='mon-entreprise'
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
