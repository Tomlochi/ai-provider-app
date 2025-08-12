
import React from 'react'

const Header: React.FC = () => (
  <header className="w-full border-b bg-white sticky top-0 z-10">
    <div className="px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-yellow-500 text-2xl">🤠</span>
        <h1 className="text-xl font-semibold tracking-wide">LASSO</h1>
      </div>
      <div className="flex items-center gap-3" aria-label="User section">
        <span className="inline-flex items-center gap-2 text-sm text-gray-700">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-medium">W</span>
          Woodie Cowboy
        </span>
      </div>
    </div>
  </header>
)

export default Header