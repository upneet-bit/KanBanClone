import React from 'react';
import '../App.css'
import { faFile, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({idx,data,onDragStart}) => {
  return (
    <div className='max-w-sm mx-2 my-2 overflow-hidden transition-all duration-300 transform bg-white rounded-md shadow-lg hover:rotate-12' >
    
        <div className="px-6 pt-2">
            <span className={`inline-block px-3 py-1 mr-2 text-xs font-semibold rounded-md bg-opacity-20 ${data.priority}`}>
                {data.priority}
            </span>
        </div>
        <div className="px-6 py-4"  draggable onDragStart={(e) => onDragStart(e, data.id)}>
            <div className="mb-2 text-lg font-semibold leading-6 text-black">{data.title}</div>
            
            {data.img && <img className="object-contain h-10- w-100 " src={data.img} alt="Card Image" /> }
            <p className="text-sm font-normal leading-4 text-gray-500">
                {data?.Description}
            </p>
        </div>
        
        <div className="flex justify-end">
            <div className='p-1'>
                <div className="p-2 text-xs text-gray-700 rounded leading-15">
                <FontAwesomeIcon icon={faMessage} style={{ color: '#787486' , paddingRight:'1px',marginRight:'2px'}}/>
                {data.comments.length} Comments
                </div>
            </div>
            <div className="p-1">
                <div className="p-2 text-xs text-gray-700 rounded leading-15">
                    <FontAwesomeIcon icon={faFile} style={{ color: '#787486' , paddingRight:'1px'}}/>
                    {Math.floor(Math.random() * 10) + 1} Files
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;