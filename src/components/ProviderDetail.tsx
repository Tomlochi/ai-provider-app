
import React, { useMemo } from 'react'
import { useGetProviderByIdQuery } from '../services/providersApi'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
//import ControlsBar from './ControlsBar'
import { sortClassifiers, severityBadgeClasses } from '../utils/severity'
import type { Severity } from '../types'

const ProviderDetail: React.FC<{ id: number }> = ({ id }) => {
  const { data, isLoading, error } = useGetProviderByIdQuery(id)
  const { severityFilter, sortKey } = useSelector((s: RootState) => s.ui)

  const visibleSeverities = useMemo(() => {
    return new Set<Severity>(Object.entries(severityFilter).filter(([, v]) => v).map(([k]) => k as Severity))
  }, [severityFilter])

  if (isLoading) return <div className="p-4">Loading provider…</div>
  if (error || !data) return <div className="p-4 text-red-700">Provider not found.</div>
  if (!data.isSupported) return <div className="p-4 text-gray-600">This provider is not supported and has no details.</div>

  const filtered = data.classifiers.filter((c) => visibleSeverities.has(c.severity))
  const sorted = sortClassifiers(filtered, sortKey)

  return (
    <section className="flex flex-col h-full" aria-labelledby="provider-title">
      {/*<ControlsBar />*/}
      <div className="p-4 overflow-y-auto grow">
        <div className="mb-4">
          <h2 id="provider-title" className="text-lg font-semibold flex items-center gap-2">
            {data.providerName}
            <span className="text-xs px-2 py-0.5 rounded border bg-emerald-50 text-emerald-700 border-emerald-200">Supported</span>
          </h2>
          <p className="text-sm text-gray-600">{sorted.length} classifier(s) shown</p>
        </div>

        <ul role="list" className="grid sm:grid-cols-2 gap-3">
          {sorted.map((c) => (
            <li key={c.id} role="listitem" className="rounded-xl border p-3 bg-white">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium">{c.name}</h3>
                  <p className="text-sm text-gray-600 leading-snug mt-1">{c.description}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded ${severityBadgeClasses(c.severity)}`}>{c.severity}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProviderDetail
