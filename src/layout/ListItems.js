import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faEllipsis} from '@fortawesome/free-solid-svg-icons'

export default function ListItems({clickHandler}) {
    const focused='bg-purple-600 bg-opacity-25 text-gray-600 rounded-lg';
    
    const Menu=['Mobile Applic.', 'Website Design', 'Design Systems', 'WireFrames'];
    const [isFocused , setfocus]=useState(null);
    const handleClick=(e)=>{
        setfocus(e);
        clickHandler(e);
    }
  return (
    <ul className='m-2 text-base font-medium leading-5 rounded-md'>
        {Menu.map((s)=>{
            return(
            <li className={`flex items-center justify-evenly h-10 rounded-sm ${ s===isFocused ? focused : ''}`} onClick={()=>handleClick(s)} > 
                <span>
                    <FontAwesomeIcon icon={faCircle} size='2xs' color="#7AC555"  />    
                </span>
                {s}
                <span>{s===isFocused && <FontAwesomeIcon icon={faEllipsis} />}</span>
            </li>)
        })}
        {isFocused==null && setfocus(Menu[0])};
    </ul>
  )
}
