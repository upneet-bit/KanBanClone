import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLink ,faSquarePlus, faFilter, faChevronDown, faCalendarDay, faUserGroup, faBorderAll, faGripVertical} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as MySVG } from "../assets/invite.svg";


export default function Banner({t}) {
    const button="font-medium text-base leading-5 capitalize text-gray-500 min-w-fit px-3 py-2 mx-2 border border-solid border-1 border-gray-700 rounded-md cursor-pointer";
    
  return (
    <div>
        <div className="flex items-baseline justify-between pr-16">
            {/* Section 1 */}
            <div className='flex items-baseline w-1/3 p-8'>
                <span className='pr-3 text-4xl font-semibold text-black capitalize leading-14'>
                    {t}
                </span>
                    <FontAwesomeIcon icon={faPen} className="w-4 h-4 p-1 m-1 bg-purple-500 border border-purple-500 rounded-md round bg-opacity-20"/>
                    <FontAwesomeIcon icon={faLink} className="w-4 h-4 p-1 m-1 bg-purple-500 border border-purple-500 rounded-md round bg-opacity-20"/>
            </div>
            <div className='flex items-start justify-start w-1/4 p-8 '>
                <FontAwesomeIcon icon={faSquarePlus} className='bg-purple-500 border border-purple-500 rounded-md round bg-opacity-20'/>
                <button className='mx-1 text-xs text-gray-700 rounded leading-15'>
                    Invite
                </button>
                <div className='relative hidden xl:inline-flex'>
                    <MySVG className='absolute mx-1 -top-3 left-4' />
                    <MySVG className='absolute mx-1 -top-3 left-8' />
                    <MySVG className='absolute mx-1 -top-3 left-12' />
                    <MySVG className='absolute mx-1 -top-3 left-16' />
                </div>
            </div>
        </div>

        <div className="flex flex-wrap items-baseline justify-between pr-16">
            {/* Section 2 */}
            <div className='flex items-baseline w-1/3 p-8'>
                <button className={button}>
                    <FontAwesomeIcon icon={faFilter} className='mr-[8px]' />
                    Filter
                    <FontAwesomeIcon icon={faChevronDown} className='ml-[8px]' />
                </button>
                <button className={button}>
                    <FontAwesomeIcon icon={faCalendarDay} className='mr-[8px]' />
                    Today
                    <FontAwesomeIcon icon={faChevronDown} className='ml-[8px]' />
                </button>
            </div>
            <div className='flex items-stretch w-1/3 p-8'>
                <button className={button}>
                    <FontAwesomeIcon icon={faUserGroup} className='mr-[8px]' />
                        Share
                    <FontAwesomeIcon icon={faChevronDown} className='ml-[8px]' />
                </button>
                
                <div className="border-gray-400 border-[1px] h-7 my-1 hidden xl:inline-flex"></div>
                
                <div className="mx-3 mt-2">
                    <div className="items-center justify-between hidden w-6 h-6 rounded-md xl:inline-flex">
                        <FontAwesomeIcon icon={faBorderAll} className="mx-4 text-white bg-purple-500" size="lg" />
                        <FontAwesomeIcon icon={faGripVertical} size="lg" />
                    </div>
                </div>
    
            </div>
            
        </div>

    </div>

  )
}
