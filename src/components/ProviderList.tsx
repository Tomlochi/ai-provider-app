import React from 'react'
import { useGetProvidersQuery } from '../services/providersApi'
import ProviderCard from './ProviderCard'

const ProviderList: React.FC = () => {
  const { data : providers, isLoading, error } = useGetProvidersQuery()

  if (isLoading) return <div className="p-4">Loading providers…</div>
  if (error) return <div className="p-4 text-red-700">Failed to load providers.</div>
  if (!providers) return null

  return (
    <div aria-label="Providers" className="h-full p-4 overflow-y-auto">
      <p className="mb-3 text-sm text-gray-600">Providers</p>
      <ul role="list" className="space-y-2">
        {providers.map((provider) => {
          return <ProviderCard provider={provider}/>
        })}
      </ul>
    </div>
  )
}

export default ProviderList