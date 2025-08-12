import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store'
import type { RootState } from '../store'
import { setSortKey } from '../features/ui/uiSlice'

const SortIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true">
    <path d="M8 17V5m0 0L5.5 7.5M8 5l2.5 2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 7v12m0 0l2.5-2.5M16 19l-2.5-2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SortBySeverityButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const sortKey = useSelector((s: RootState) => s.ui.sortKey)
  const isActive = sortKey === 'severity'

  const onClick = () => dispatch(setSortKey(isActive ? 'none' : 'severity'))

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'inline-grid place-items-center h-8 w-8 rounded-full border text-indigo-700 transition-colors',
        isActive ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-indigo-200 hover:bg-indigo-50',
      ].join(' ')}
      aria-label="Sort by severity"
      aria-pressed={isActive}
      title="Sort by severity"
    >
      <SortIcon className="w-4 h-4" />
    </button>
  )
}

export default SortBySeverityButton