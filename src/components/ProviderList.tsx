import React from 'react'
import { useGetProvidersQuery } from '../services/providersApi'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'
import type { AppDispatch } from '../store'
import { setSelectedProviderId } from '../features/ui/uiSlice'
import { useNavigate } from 'react-router-dom'
import type { ProviderModel } from '../types/types'
import { ProviderIcon } from './ProviderIcon'

const ProviderList: React.FC = () => {
  const { data : Providers, isLoading, error } = useGetProvidersQuery()
  const selectedId = useSelector((s: RootState) => s.ui.selectedProviderId)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  if (isLoading) return <div className="p-4">Loading providers…</div>
  if (error) return <div className="p-4 text-red-700">Failed to load providers.</div>
  if (!Providers) return null

  const onSelect = (p: ProviderModel) => {
    if (!p.isSupported) return
    dispatch(setSelectedProviderId(p.id))
    navigate(`/provider/${p.id}`)
  }

  return (
    <div aria-label="Providers" className="h-full p-4 overflow-y-auto">
      <p className="mb-3 text-sm text-gray-600">Providers</p>
      <ul role="list" className="space-y-2">
        {Providers.map((provider) => {
          const isSelected = selectedId === provider.id
            const disabled = !provider.isSupported
            const count = provider.classifiers.length
          return (
            <li key={provider.id} role="listitem">
              <button
                type="button"
                onClick={() => onSelect(provider)}
                disabled={disabled}
                aria-disabled={disabled}
                aria-selected={isSelected}
                className={`w-full flex items-center justify-between shadow-xl gap-4 rounded-xl border px-4 py-3 text-left transition-all
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40
                  ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  ${isSelected
                    ? 'border-indigo-500 ring-1 ring-indigo-500/40 bg-white shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                  }`}
              >
                <span className="flex items-center gap-3 min-w-0">
                <span className={`w-8 h-8 rounded-full grid place-items-center`}>
                  <ProviderIcon name={provider.providerName} className="h-5 w-5 text-gray-700" />
                </span>
                  <span className="text-base">{provider.providerName}</span>
                </span>
                <span className="text-[11px] text-gray-500 shrink-0">
                  {count} Classifier{count === 1 ? '' : 's'}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProviderList