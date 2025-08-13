import React from 'react'
import Sidebar from './Sidebar'

const DesktopSidebar: React.FC = () => {
  return (
    <div className="hidden md:block w-56 shrink-0">
      <Sidebar />
    </div>
  )
}

export default DesktopSidebar
