
import React, { useMemo, useState } from 'react'
import { useGetProviderByIdQuery } from '../services/providersApi'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import { sortClassifiers } from '../utils/severity'
import type { Severity } from '../types/types'
import SeverityBadge from './SeverityBadge'
import SortBySeverityButton from './SortBySeverityButton'
import SeverityFilterMenu from './SeverityFilterMenu'
import { useTranslation } from 'react-i18next'

interface ProviderDetailProps {
  id: number;
}

const ProviderDetail: React.FC<ProviderDetailProps> = ({ id }) => {
  const { data: provider } = useGetProviderByIdQuery(id)
  const { severityFilter } = useSelector((state: RootState) => state.provider)
  const [isSorted, setIsSorted] = useState(false);

  const visibleSeverities = useMemo(() => {
    const enabledSeverities = (Object.keys(severityFilter) as Severity[]).filter(
      (severity) => severityFilter[severity]
    )
    return new Set<Severity>(enabledSeverities)
  }, [severityFilter])

  const severity = provider?.classifiers.filter((classifier) => visibleSeverities.has(classifier.severity)) || []
  const classifiers = sortClassifiers(severity, isSorted)
  const { t } = useTranslation()

  return (
    <div className="flex flex-col h-full" aria-labelledby="provider-title">
      <div className="p-4 overflow-y-auto grow">
        <div className="flex justify-between mb-4">
          <p className="flex items-center text-sm text-gray-600">{t('common.classifiersCount', { count: classifiers.length })}</p>
           <div className="flex justify-end items-center gap-3 px-3 py-2">
                <div className="flex items-center gap-3" role="group" aria-label="Filters and sorting">
                  <SortBySeverityButton isSorted={isSorted} setIsSorted={setIsSorted} />
                  <SeverityFilterMenu />
                </div>
              </div>
        </div>
        <ul role="list" className="space-y-3">
          {classifiers.map((classifier) => (
            <li key={classifier.id} role="listitem" className="shadow-lg rounded-xl border p-3 bg-white">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-xs font-semibold text-gray-500">{t('common.classifierName')}</h4>
                  <p className="text-sm text-gray-600 leading-snug mt-1">{classifier.name}</p>
                  <h4 className="mt-4 text-xs font-semibold text-gray-500">{t('common.description')}</h4>
                  <p className="text-sm text-gray-600 leading-snug mt-1">{classifier.description}</p>
                </div>
                <SeverityBadge severity={classifier.severity} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProviderDetail
