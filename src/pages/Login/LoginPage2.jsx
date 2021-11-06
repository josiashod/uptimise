import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import BriefcaseIcon from "../../components/icons/BriefcaseIcon";
import MdiEyeOutlineIcon from "../../components/icons/MdiEyeOutlineIcon";
import UserIcon from "../../components/icons/UserIcon";
import Input from "../../components/Input";
import UndrawProductIteration from "/svg/undraw_product_iteration.svg";

function LoginPage2() {
  return (
    <div className='min-h-screen max-h-screen w-full grid grid-cols-7  bg-custom-light'>
      <div className=' col-span-2 bg-custom-d px-12'>
        <h1 className='text-5xl text-custom-l4 font-semibold my-12'>
          Uptimiste
        </h1>
        <img src={UndrawProductIteration} className='ml-8' />
        <p className='text-2xl text-custom-l4 font-medium mt-6'>
          Obtenez tous vos outils de gestion d'équipe et RH en un seul endroit.
        </p>
        <p className='text-custom-l4 mt-8'>
          Évitez d'utiliser plusieurs systèmes pour gérer votre équipe. Intégrez
          tout, des horaires et des horloges à l'intégration et à l'embauche, en
          passant par la conformité et les RH.
        </p>
      </div>
      <div className='col-span-5 h-full  flex flex-col justify-between py-8 px-8'>
        <div className='flex flex-col h-full items-center justify-center'>
          <div className='w-2/4'>
            <h2 className='text-3xl font-semibold mb-6'>Contiuner en que :</h2>
            <div className='flex  space-x-6 p-8 bg-custom-l4 rounded-md mb-6'>
              <UserIcon className='w-24 h-20 p-5 mt-3 border border-custom-d bg-custom-d fill-current text-custom-l4 rounded-md' />
              <div>
                <h2 className='text-2xl font-medium mb-3'>Collaborateur</h2>
                <p className='text-xl text-gray-400'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates sit modi
                </p>
              </div>
            </div>
            <div className='flex  space-x-6 p-8  rounded-md'>
              <BriefcaseIcon className='w-24 h-20 p-5 mt-3 border-2 border-custom-d  fill-current text-custom-d rounded-md' />
              <div>
                <h2 className='text-2xl font-medium mb-3'>Administrateur</h2>
                <p className='text-xl text-gray-400'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates sit modi
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer  */}
        <div className='flex items-center justify-between text-custom-d2'>
          <h3>Copyright © 2020 Uptimise Tout droit réservé</h3>
          <h3>Terms & Conditions</h3>
        </div>
      </div>
    </div>
  );
}

export default LoginPage2;
