import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { BurgerMenu } from '../assets/icons'
import { cn } from '../utils/tailwind-utils';

const MobileSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="md:hidden fixed top-2 left-4 z-50 p-2 rounded-md bg-white border border-gray-200 shadow-lg hover:bg-gray-50"
        onClick={ ()=> setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <BurgerMenu/>
      </button>

      <div
        className={cn(
          "md:hidden fixed z-40 transition-transform duration-300 ease-in-out w-64",
          {
        "translate-x-0": isOpen,
        "-translate-x-full": !isOpen,
          }
        )}
      >
        <Sidebar />
      </div>
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={ ()=> setIsOpen(!isOpen)}
        />
      )}
    </>
  )
}

export default MobileSidebar
