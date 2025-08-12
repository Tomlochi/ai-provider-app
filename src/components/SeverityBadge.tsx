import React from 'react'
import type { Severity } from '../types/types'
import { CriticalIcon } from '../assets/icons'

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

export const SeverityBadge: React.FC<{
  severity: Severity
}> = ({ severity }) => {
  const isCritical = severity === 'Critical'
  const container = containerBySeverity[severity]

  return (
    <span
      className={classNames(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        container,
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


