import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faHouse, faMessage ,faListCheck,faGear,faUsers,faSquarePlus, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import CircleForm from '../layout/CircleForm';
import ListItems from '../layout/ListItems';

export default function SideBar({handleClick}) {
    const customDiv='flex items-center justify-start h-12';
    const [isSidebarVisible, setSidebarVisibility] = useState(true);
    const [pr,setpr]=useState(null);

    const handleSidebarToggle = () => {
        setSidebarVisibility(!isSidebarVisible);
    };
    const changeProject=(e)=>{
        setpr(e);
        handleClick(e);
    }
      
  return (
    <div className='w-60'>
        
        <div className='flex items-center h-16 px-2 border-b-2 border-gray-200 justify-evenly' > 
        <CircleForm/>
        
        <p className='ml-2 mr-8 font-semibold text-left text-black font-inter text-20'>
            {isSidebarVisible? 'Project M. ' : 'Mercer '} 
        </p>
        
        <FontAwesomeIcon icon={isSidebarVisible ? faAnglesLeft : faAnglesRight} style={{color: "#787486",}} onClick={handleSidebarToggle} />
        </div>
        
        {isSidebarVisible && (
        <div className='h-full border-r-2 border-gray-200'>
            <div className='px-2 mx-5 font-medium text-gray-500 font-inter text-12'>
                <div className={customDiv} >
                    <FontAwesomeIcon icon={faHouse} style={{paddingRight: '10px'}} />
                    Home
                </div>
                <div className={customDiv}>
                    <FontAwesomeIcon icon={faMessage} style={{paddingRight: '10px'}} />
                    Messages
                </div>
                <div className={customDiv}>
                    <FontAwesomeIcon icon={faListCheck} style={{paddingRight: '10px'}}/>
                    Tasks
                </div>
                <div className={customDiv}>
                    <FontAwesomeIcon icon={faUsers} style={{paddingRight: '10px'}}/>
                    Members
                </div>
                <div className={customDiv}>
                    <FontAwesomeIcon icon={faGear} style={{paddingRight: '10px'}}/>
                    Settings
                </div>
            </div>
            
            <div className="h-0 mx-3 border border-gray-300"></div>

            <div className='flex items-center justify-around my-2'>
                <div className='text-sm font-bold text-gray-500 uppercase h-15 font-inter leading-15'>
                    My Projects
                </div>
                <FontAwesomeIcon icon={faSquarePlus} style={{borderRadius: '50%', color:'gray'}} />
            </div>
            
            <ListItems clickHandler={changeProject}/>
            
        </div>
        )}
    </div>
  )
}
