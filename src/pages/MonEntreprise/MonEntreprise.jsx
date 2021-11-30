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
import SearchBarWithSelectBox from "../../components/SearchBarWithSelectBox";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// import CRA from "./CRA";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function MonEntreprise() {

  const [activeVueGlobal, setActiveVueGlobal] = React.useState(true);
  const [activeFeuilleDeTemps, setActiveFeuilleDeTemps] = React.useState(false);

  const handleClick = (e) => {
    if (!activeVueGlobal && e.target.classList.contains("false")) {
      setActiveVueGlobal((prev) => !prev);
      setActiveFeuilleDeTemps((prev) => !prev);
    }
    if (!activeFeuilleDeTemps && e.target.classList.contains("false")) {
      setActiveFeuilleDeTemps((prev) => !prev);
      setActiveVueGlobal((prev) => !prev);
    }
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className='bg-custom-light h-screen tabl text-gray-700 font-main  relative'>
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
              Mon Entreprise
            </h2>
          </div>
          {/* Content  */}


          <div className='w-full h-full px-6 2xl:px-16 py-6 2xl:py-12 bg-white grid grid-cols-7 gap-x-32 shadow-base-200 '>

            <div className=' col-span-7 tabs w-full my-10 border-b-2 -pb-6'>

                <Box sx={{ width: '100%' }}>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                        <Tabs value={value} 
                          onChange={handleChange} 
                          aria-label="basic tabs example"
                          TabIndicatorProps={{
                            style: {
                              backgroundColor: "#399AB3"
                            }
                          }}   
                        >
                            <Tab label="Organigramme" {...a11yProps(0)} />
                            <Tab label="Annuaire collaborateurs" {...a11yProps(1)} />
                        </Tabs>

                    </Box>

                </Box>

            </div>
{/* 
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel> */}

            {activeVueGlobal && <SearchBarWithSelectBox />}

            <div className='col-span-7'>

              {activeVueGlobal && (
                <table className='table w-full'>
                  <thead className='!bg-custom-l3 z-50'>
                    <tr className=''>
                      <th className='!bg-transparent !normal-case !font-medium'>
                        Ref
                      </th>
                      <th className='!bg-transparent !normal-case !font-medium'>
                        Projet / Type d’activité
                      </th>
                      <th className='!bg-transparent !normal-case !font-medium'>
                        Début et fin
                      </th>
                      <th className='!bg-transparent !normal-case !font-medium'>
                        Jour alloué (jr)
                      </th>
                      <th className='!bg-transparent !normal-case !font-medium'>
                        Jour consommé (jr)
                      </th>
                      <th className='!bg-transparent !normal-case !font-medium'>
                        Jour restants ( jr)
                      </th>
                    </tr>
                  </thead>
                  <tbody className=''>
                    <tr className=''>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        RT128F
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        Managemnet de projet
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        12/09/2021 - 12/11/2021
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        8
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        4.5
                      </td>
                      <td>3.5</td>
                    </tr>
                    <tr className=''>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        RT128F
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        Managemnet de projet
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        12/09/2021 - 12/11/2021
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        8
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        4.5
                      </td>
                      <td>3.5</td>
                    </tr>
                    <tr className=''>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        RT128F
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        Managemnet de projet
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        12/09/2021 - 12/11/2021
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        8
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        4.5
                      </td>
                      <td>3.5</td>
                    </tr>
                    <tr className=''>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        RT128F
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        Managemnet de projet
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        12/09/2021 - 12/11/2021
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        8
                      </td>
                      <td className='!border-r-2 !border-b-0 !border-gray-300'>
                        4.5
                      </td>
                      <td>3.5</td>
                    </tr>
                  </tbody>
                </table>
              )}

              {/* {activeFeuilleDeTemps && <CRA />} */}

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default MonEntreprise;
