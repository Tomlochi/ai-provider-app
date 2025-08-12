
import React from 'react'
import { NavLink } from 'react-router-dom'
import Lasso from '../assets/logos/Lasso'

const navItemBaseClasses =
  'flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50'

const activeClasses = 'bg-amber-50 text-gray-900'

const GridIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="1.5" />
  </svg>
)

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path
      d="M12 3l7 3v5c0 4.418-3.582 8-8 8s-8-3.582-8-8V6l9-3z"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const GearIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path
      d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
      strokeWidth="1.5"
    />
    <path
      d="M19 12a6.97 6.97 0 0 0-.132-1.31l2.043-1.484-2-3.464-2.4.8A7.034 7.034 0 0 0 14.31 4.9L13 3h-2l-1.31 1.9A7.034 7.034 0 0 0 7.49 6.542l-2.4-.8-2 3.464 2.043 1.484A7.04 7.04 0 0 0 5 12c0 .445.043.879.132 1.31L3.089 14.8l2 3.464 2.4-.8A7.034 7.034 0 0 0 9.69 19.1L11 21h2l1.31-1.9a7.034 7.034 0 0 0 2.71-1.642l2.4.8 2-3.464-2.043-1.484c.089-.431.132-.865.132-1.31z"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

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
        {/* Root route also covers /provider/:id so leave `end` undefined */}
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
      <Lasso color="#b0ab9e" width={80} height={30}/>
      <span>Version 1.1</span>
    </div>
  </nav>
)

export default Sidebar
