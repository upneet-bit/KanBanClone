import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faBell } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/profile.jpg';

export default function 
NavBar() {
  return (
    <nav class="flex items-center justify-between h-16 p-6 border-gray-200 border-2 w-full">
        <div class="flex items-center ">
            <input type="text" placeholder="Search For Anything" class="box-border w-[417px] bg-gray-100 rounded-md px-4 py-2 
            focus:outline-none focus:bg-gray-200"/>
        </div>
        <div class="flex items-center">
            <span className='hidden xl:inline-flex'>
            <div class="mr-4 ">
                <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div class="mr-4 ">
            <FontAwesomeIcon icon={faComments} />
            </div>
            <div class="mr-4 ">
            <FontAwesomeIcon icon={faBell} />
            </div>
            <div>
                <div class="font-inter font-normal text-right text-base leading-5 text-indigo-900 ml-2 ">Anima Agarwal</div>
                <div className='hidden text-sm font-normal leading-4 text-right text-gray-500 w-62 h-17 font-inter sm:block '>
                    U.P, India
                </div>
            </div>
            </span>

            <img src={profileImage} alt="Profile Image" class="w-10 h-10 rounded-full mx-6"/>
        </div>
    </nav>
  )
}

