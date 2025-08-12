import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store'
import type { RootState } from '../store'
import type { Severity } from '../types/types'
import { toggleSeverity } from '../features/ui/uiSlice'

const FunnelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true">
    <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

const MenuCheckbox: React.FC<{
  label: Severity
  checked: boolean
  onChange: () => void
}> = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-2 px-2 py-1.5 cursor-pointer select-none">
    <input
      type="checkbox"
      className="accent-indigo-600 w-4 h-4"
      checked={checked}
      onChange={onChange}
      aria-label={label}
    />
    <span className="">{label}</span>
  </label>
)

const SeverityFilterMenu: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const severityFilter = useSelector((s: RootState) => s.ui.severityFilter)
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  useEffect(() => {
    if (open && firstFocusableRef.current) {
      firstFocusableRef.current.focus()
    }
  }, [open])

  const toggle = (sev: Severity) => dispatch(toggleSeverity(sev))

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-700 hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Filter"
      >
        <FunnelIcon className="w-4 h-4" />
        <span>Filter</span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Severity filter"
          className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl"
        >
          <div className="px-3 pt-2 pb-1 text-xs font-medium text-gray-500">Severity</div>
          <div className="py-1">
            <label className="flex items-center gap-2 px-2 py-1.5 cursor-pointer select-none">
              <input
                ref={firstFocusableRef}
                type="checkbox"
                className="accent-indigo-600 w-4 h-4"
                checked={severityFilter.Critical}
                onChange={() => toggle('Critical')}
                aria-label="Critical"
              />
              <span className="text-sm text-gray-800">Critical</span>
            </label>
            <MenuCheckbox label="High" checked={severityFilter.High} onChange={() => toggle('High')} />
            <MenuCheckbox label="Medium" checked={severityFilter.Medium} onChange={() => toggle('Medium')} />
            <MenuCheckbox label="Low" checked={severityFilter.Low} onChange={() => toggle('Low')} />
          </div>
        </div>
      )}
    </div>
  )
}

export default SeverityFilterMenu


