
import type { Severity, Classifier } from '../types/types'

export const severityRank: Record<Severity, number> = {
  Critical: 0,
  High: 1,
  Medium: 2,
  Low: 3
}

export function severityBadgeClasses(s: Severity): string {
  switch (s) {
    case 'Critical':
      return 'bg-red-800 text-white border'
    case 'High':
      return 'bg-red-200'
    case 'Medium':
      return 'bg-orange-200'
    case 'Low':
      return 'bg-yellow-200'
  }
}

export function sortClassifiers(list: Classifier[], isSorted: boolean) {
  if (isSorted) return [...list].sort((a, b) => severityRank[a.severity] - severityRank[b.severity])
  return list;
}
