
import React from 'react'
import { useGetProvidersQuery } from '../services/providersApi'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'
import type { AppDispatch } from '../store'
import { setSelectedProviderId } from '../features/ui/uiSlice'
import { useNavigate } from 'react-router-dom'
import type { ProviderModel } from '../types'

const ProviderList: React.FC = () => {
  const { data, isLoading, error } = useGetProvidersQuery()
  const selectedId = useSelector((s: RootState) => s.ui.selectedProviderId)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  if (isLoading) return <div className="p-4">Loading providers…</div>
  if (error) return <div className="p-4 text-red-700">Failed to load providers.</div>
  if (!data) return null

  const onSelect = (p: ProviderModel) => {
    if (!p.isSupported) return
    dispatch(setSelectedProviderId(p.id))
    navigate(`/provider/${p.id}`)
  }

  return (
    <section aria-label="Providers" className="border-r bg-white h-full overflow-y-auto">
      <ul role="list" className="divide-y">
        {data.map((p) => {
          const isSelected = selectedId === p.id
          const disabled = !p.isSupported
          return (
            <li key={p.id} role="listitem">
              <button
                type="button"
                onClick={() => onSelect(p)}
                disabled={disabled}
                aria-disabled={disabled}
                aria-selected={isSelected}
                className={`w-full text-left px-4 py-3 focus:outline-none focus:ring flex items-center justify-between ${
                  disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'
                } ${isSelected ? 'bg-gray-100' : ''}`}
              >
                <span className="font-medium">{p.providerName}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded border ${
                    p.isSupported
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-gray-100 text-gray-500 border-gray-200'
                  }`}
                >
                  {p.isSupported ? 'Supported' : 'Unsupported'}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProviderList
