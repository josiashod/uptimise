import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import MdiEyeOutlineIcon from "../../components/icons/MdiEyeOutlineIcon";
import Input from "../../components/Input";
import UndrawProductIteration from "/svg/undraw_product_iteration.svg";

function LoginPage() {
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
      <div className='col-span-5 h-full flex flex-col justify-between py-8 px-8'>
        <div className='h-full flex flex-col items-center justify-center'>
          <h1 className='text-5xl text-custom-d font-semibold my-12'>
            Uptimiste
          </h1>
          <div className='w-3/6 min-h-3/6 p-12 '>
            <h2 className='text-xl text-custom-d font-semibold text-center mb-4'>
              Connectez-vous à votre espace
            </h2>
            <form action='' className=''>
              <Input
                label='Email'
                type='email'
                name='email'
                placeholder='Entrez votre email'
              />

              <Input
                icon={MdiEyeOutlineIcon}
                iconPosition='right'
                label='Mot de passe'
                type='passowrd'
                name='password'
                placeholder='Mot de passse'
              />
              <div className='flex justify-between'>
                <CheckBox label='Se souvenir de moi' type='checkbox' />
                <Link className='text-custom-d'>Mot de passe oublie?</Link>
              </div>
              <Button label='Se Connecter' className='w-[100%] mt-16 mb-12' />
            </form>
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

export default LoginPage;
