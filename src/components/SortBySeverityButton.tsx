import React from 'react'
import { SortIcon } from '../assets/icons'
import TooltipComponent from './TooltipComponent'
import { cn } from '../utils/tailwind-utils'

interface SortBySeverityButtonProps {
  isSorted: boolean
  setIsSorted: (isSorted: boolean) => void
}

const SortBySeverityButton: React.FC<SortBySeverityButtonProps> = ({ isSorted, setIsSorted }) => {
  return (
    <div className="relative group">
      <button
        type="button"
        onClick={()=> setIsSorted(!isSorted)}
        className={cn(
          'inline-grid place-items-center h-8 w-8 rounded-full border text-indigo-700 transition-colors',
          isSorted ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-indigo-200 hover:bg-indigo-50'
        )}
        aria-label="sort by severity level"
        aria-pressed={isSorted}
      >
        <SortIcon className="w-4 h-4" />
      </button>
      <TooltipComponent text="sort by severity level"/>
    </div>
  )
}

export default SortBySeverityButton