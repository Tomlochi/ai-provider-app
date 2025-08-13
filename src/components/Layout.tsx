import React from 'react'
import { Outlet } from 'react-router-dom'
import DesktopSidebar from './DesktopSidebar'
import MobileSidebar from './MobileSidebar'

const Layout: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-56px)] flex relative">
      <DesktopSidebar />
      <MobileSidebar />
      <div className="flex-1 min-h-0 overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout


