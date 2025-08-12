import React from 'react'
import type { Severity } from '../types/types'

function classNames(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(' ')
}

const criticalContainer = 'bg-red-800 text-white border border-red-900/60'
const highContainer = 'bg-rose-100 text-rose-900 border border-rose-200'
const mediumContainer = 'bg-orange-100 text-orange-900 border border-orange-200'
const lowContainer = 'bg-yellow-100 text-yellow-900 border border-yellow-200'

const dotBySeverity: Record<Exclude<Severity, 'Critical'>, string> = {
  High: 'bg-rose-500',
  Medium: 'bg-orange-500',
  Low: 'bg-yellow-500',
}

const containerBySeverity: Record<Severity, string> = {
  Critical: criticalContainer,
  High: highContainer,
  Medium: mediumContainer,
  Low: lowContainer,
}

const CriticalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M10.88 2.828a2 2 0 0 0-3.76 0L1.4 15.2A2 2 0 0 0 3.24 18h13.52a2 2 0 0 0 1.84-2.8L10.88 2.828zM10 6.5c.414 0 .75.336.75.75v4.5a.75.75 0 0 1-1.5 0v-4.5c0-.414.336-.75.75-.75zm0 7.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
)

export const SeverityBadge: React.FC<{
  severity: Severity
  className?: string
}> = ({ severity, className }) => {
  const isCritical = severity === 'Critical'
  const container = containerBySeverity[severity]

  return (
    <span
      className={classNames(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        container,
        className,
      )}
    >
      {isCritical ? (
        <CriticalIcon className="w-3.5 h-3.5" />
      ) : (
        <span className={classNames('w-1.5 h-1.5 rounded-full', dotBySeverity[severity as Exclude<Severity, 'Critical'>])} />
      )}
      <span>{severity}</span>
    </span>
  )
}

export default SeverityBadge


