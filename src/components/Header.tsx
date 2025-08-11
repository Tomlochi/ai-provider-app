
import React from 'react'

const Header: React.FC = () => (
  <header className="w-full border-b bg-white sticky top-0 z-10">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Provider Support</h1>
      <div className="flex items-center gap-3" aria-label="User section">
        <span className="text-sm text-gray-600 hidden sm:inline">Hello, Candidate</span>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-medium" aria-label="User badge">C</span>
      </div>
    </div>
  </header>
)

export default Header
