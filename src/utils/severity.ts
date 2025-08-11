
import type { Severity, Classifier } from '../types'

export const severityRank: Record<Severity, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3
}

export function severityBadgeClasses(s: Severity): string {
  switch (s) {
    case 'critical':
      return 'bg-red-100 text-red-800 border border-red-200'
    case 'high':
      return 'bg-orange-100 text-orange-800 border border-orange-200'
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border border-yellow-200'
    case 'low':
      return 'bg-green-100 text-green-800 border border-green-200'
  }
}

export type SortKey = 'severity' | 'name'

export function sortClassifiers(list: Classifier[], sortKey: SortKey) {
  if (sortKey === 'name') return [...list].sort((a, b) => a.name.localeCompare(b.name))
  return [...list].sort((a, b) => severityRank[a.severity] - severityRank[b.severity])
}
