import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Notification from "../../components/icons/Notification";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import InputFile from "../../components/InputFile";
import CalendarOutline from "../../components/icons/CalendarOutline";

function Ajout() {
  return (
    <main className='bg-custom-light h-screen  text-gray-700 font-main  relative'>
      <div className='flex items-start justify-between'>
        <SideBar />
        <div className='mx-8   w-full h-full min-h-screen max-h-screen overflow-auto scrollbar-hide'>
          <div className='mb-20 w-full mt-2 flex justify-end items-center'>
            <div className='m-6 indicator'>
              <div className='w-1.5 h-1.5 p-0 bg-blue-600 border-blue-600 indicator-item badge badge-secondary'></div>
              <Notification className=' fill-current text-gray-400' />
            </div>
            <img
              className='w-12 rounded-xl'
              src='http://daisyui.com/tailwind-css-component-profile-1@94w.png'
            />
            <div className='ml-2'>
              <h2 className='text-base text-custom-d'>Cokou Jean-Eude</h2>
              <small className='font-secondary text-gray-500 text-sm'>
                Developpeur Web
              </small>
            </div>
          </div>
          <div className='flex justify-between mb-2'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Mes notes de frais
            </h2>
            {/* <div>
              <div className="flex items-center gap-x-2">
                <h2 className="text-2xl text-custom-d font-semibold">25,24</h2>
                <span className="text-lg font-light text-gray-500">solde</span>
                <Arrow />
                <Button text="Nouvelle une note" />
              </div>
            </div> */}
          </div>
          {/* Content  */}
          <div className='w-full h-full px-4 2xl:px-16 py-12 bg-white grid grid-cols-7 gap-x-8 2xl:gap-x-32 shadow-base-200'>
            <div className='col-span-3'>
              <form action='' className='w-full px-2 2xl:px-8'>
                <Input
                  label='Nom de la depense'
                  type='text'
                  placeholder='Nom de la depense'
                />
                <Select
                  label='Type de la depense'
                  name=''
                  type='text'
                  datas={[]}
                  renderItem={({ value, label }) => (
                    <option value={value}>{label}</option>
                  )}
                  placeholder='Type de la depense'
                />
                <Input
                  icon={CalendarOutline}
                  iconPosition='right'
                  label='Type de la depense'
                  type='date'
                  placeholder='Type de la depense'
                />
                <div className='grid grid-cols-2 gap-x-4'>
                  <Input
                    label='Montant de depense'
                    type='text'
                    placeholder='20.000'
                  />
                  <Select
                    label='La devise'
                    datas={[]}
                    renderItem={({ value, label }) => (
                      <option value={value}>{label}</option>
                    )}
                    placeholder='Euro'
                  />
                </div>
                <Select
                  label='TVA'
                  datas={[]}
                  renderItem={({ value, label }) => (
                    <option value={value}>{label}</option>
                  )}
                  placeholder='Selectionner le taux de   la TVA'
                />
                <Textarea
                  label='Commentaire'
                  placeholder='Votre commentaire...'
                />
                <div className='flex justify-end space-x-3 mt-4'>
                  <button className='btn btn-outline normal-case border-custom-d text-custom-d hover:bg-custom-d hover:border-custom-d hover:text-custom-l4'>
                    Enrégistré pour plutard
                  </button>
                  <button className='btn normal-case text-custom-l4 bg-custom-d border-custom-d hover:bg-custom-d1 hover:border-custom-d1'>
                    Enrégistrer
                  </button>
                </div>
              </form>
            </div>
            <div className='col-span-4'>
              <h2 className='text-gray-900'>Pièces justificatives</h2>
              <InputFile />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Ajout;
