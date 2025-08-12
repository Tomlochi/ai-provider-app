import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store'
import type { RootState } from '../store'
import { setIsSorted } from '../services/providerSlice'
import { SortIcon } from '../assets/icons'

const SortBySeverityButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isSorted = useSelector((state: RootState) => state.provider.isSorted)

  const onClick = () => dispatch(setIsSorted(isSorted))

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'inline-grid place-items-center h-8 w-8 rounded-full border text-indigo-700 transition-colors',
        isSorted ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-indigo-200 hover:bg-indigo-50',
      ].join(' ')}
      aria-label="Sort by severity"
      aria-pressed={isSorted}
      title="Sort by severity"
    >
      <SortIcon className="w-4 h-4" />
    </button>
  )
}

export default SortBySeverityButton