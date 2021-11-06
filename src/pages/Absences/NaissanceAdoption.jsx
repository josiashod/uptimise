import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Arrow from "../../components/icons/Arrow";
import Button from "../../components/Button";
import Search from "../../components/icons/Search";
import Pending from "../../components/icons/Pending";
import MiArrow from "../../components/icons/MiArrow";
import Success from "../../components/icons/Success";
import Notification from "../../components/icons/Notification";
import MyCalendar from "../../components/MyCalendar/MyCalendar";
import Input from "../../components/Input";
import InputFile from "../../components/InputFile";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import CheckBox from "../../components/CheckBox";
import SmallInputFile from "../../components/SmallInputFile";
import CalendarOutline from "../../components/icons/CalendarOutline";

function NaissanceAdoption() {
  return (
    <main className='bg-custom-light h-screen  text-gray-700 font-main  relative'>
      <div className='flex items-start justify-between'>
        <SideBar />
        <div className='mx-8 w-full h-full min-h-screen max-h-screen overflow-auto scrollbar-hide'>
          <div className='lg:mb-10 xl:mb-20 w-full mt-2 flex justify-end items-center'>
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
              Demande d’absence
            </h2>
            <div>
              <div className='flex items-center gap-x-2'>
                <h2 className='text-2xl text-custom-d font-semibold'>25,24</h2>
                <span className='text-lg font-light text-gray-500'>solde</span>
                <Arrow className='w-4 h-4 stroke-current text-custom-d mr-4' />
              </div>
            </div>
          </div>
          {/* Content  */}
          <div className='w-full h-full px-16 py-12 bg-white grid grid-cols-7 gap-x-32 shadow-base-200 '>
            {/* Right Side  */}

            <div className='col-span-3'>
              <form action='' className='w-full px-8'>
                <Select
                  label='Type d’absence'
                  type='text'
                  placeholder='Evènement familial'
                  datas={[{}]}
                  renderItem={({ value, label }) => (
                    <option value={value}>{label}</option>
                  )}
                />
                <Input name='Date de début' type='date' placeholder='Décès' />
                <div className=' px-6 py-2'>
                  <CheckBox
                    label='Naissance survenue au foyer du salarié'
                    name='option'
                    checked='checked'
                  />
                  <CheckBox
                    label="Adoption d'un enfant par le salarié"
                    name='option'
                  />
                </div>
                <Input
                  icon={CalendarOutline}
                  iconPosition='right'
                  label='Début '
                  type='date'
                />
                <Input
                  icon={CalendarOutline}
                  iconPosition='right'
                  label='Fin'
                  type='date'
                />
                <SmallInputFile />
                <div className='flex justify-end space-x-3 mt-4'>
                  <button className='btn normal-case text-custom-l4 bg-custom-d border-custom-d hover:bg-custom-d1 hover:border-custom-d1'>
                    Comfirmer
                  </button>
                </div>
              </form>
            </div>
            <div className='col-span-4'>
              <MyCalendar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NaissanceAdoption;
