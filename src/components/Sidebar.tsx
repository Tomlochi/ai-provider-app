
import React from 'react'
import { NavLink } from 'react-router-dom'
import Lasso from '../assets/logos/Lasso'
import { GridIcon, ShieldIcon, GearIcon } from '../assets/icons'

const navItemBaseClasses =
  'flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50'

const activeClasses = 'bg-amber-50 text-gray-900'

const Sidebar: React.FC = () => (
  <nav
    className="hidden md:flex w-56 shrink-0 border-r bg-white h-full flex-col justify-between"
    aria-label="Sidebar"
  >
    <ul className="p-3 space-y-1" role="list">
      <li role="listitem">
        <NavLink to="/overview" className={({ isActive }) => `${navItemBaseClasses} ${isActive ? activeClasses : ''}`}>
          <GridIcon className="w-5 h-5" />
          <span>Overview</span>
        </NavLink>
      </li>
      <li role="listitem">
        <NavLink to="/" className={({ isActive }) => `${navItemBaseClasses} ${isActive ? activeClasses : ''}`}>
          <ShieldIcon className="w-5 h-5" />
          <span>Policies</span>
        </NavLink>
      </li>
      <li role="listitem">
        <NavLink to="/settings" className={({ isActive }) => `${navItemBaseClasses} ${isActive ? activeClasses : ''}`}>
          <GearIcon className="w-5 h-5" />
          <span>Organization Settings</span>
        </NavLink>
      </li>
    </ul>

    <div className="px-3 py-2 justify-between text-xs text-gray-500 flex items-center gap-2">
      <Lasso fill="#b0a39e" width={80} height={30}/>
      <span>Version 1.1</span>
    </div>
  </nav>
)

export default Sidebar
