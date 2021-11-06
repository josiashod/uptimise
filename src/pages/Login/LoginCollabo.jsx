import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import MdiEyeOutlineIcon from "../../components/icons/MdiEyeOutlineIcon";
import Input from "../../components/Input";

function LoginCollabo() {
  return (
    <div className='min-h-screen max-h-screen w-full flex flex-col justify-between  py-6 px-10 bg-custom-light'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl text-custom-d font-semibold my-12'>
          Uptimiste
        </h1>
        <div className='w-2/6 min-h-3/6 p-12 bg-white rounded-md drop-shadow-md'>
          <h2 className='text-xl text-custom-d text-center mb-4'>
            Connectez-vous en tant collaborateur
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
              <Link>Mot de passe oublie?</Link>
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
  );
}

export default LoginCollabo;
