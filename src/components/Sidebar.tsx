
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar: React.FC = () => (
  <nav className="hidden md:block w-52 shrink-0 border-r bg-white" aria-label="Sidebar">
    <ul className="p-3 space-y-2" role="list">
      <li role="listitem">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-3 py-2 rounded hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-medium' : ''}`
          }
        >
          Home
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Sidebar
