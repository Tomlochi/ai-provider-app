import React from 'react'
import { useGetProvidersQuery } from '../services/providersApi'
import ProviderCard from './ProviderCard'
import { useTranslation } from 'react-i18next'

const ProviderList: React.FC = () => {
  const { data : providers, isLoading, error } = useGetProvidersQuery()
  const { t } = useTranslation()

  if (isLoading) return <div className="p-4">{t('common.loadingProviders')}</div>
  if (error) return <div className="p-4 text-red-700">{t('common.failedProviders')}</div>
  if (!providers) return null

  return (
    <div aria-label="Providers" className="h-full p-4 overflow-y-auto">
      <p className="mb-3 text-sm text-gray-600">{t('common.providers')}</p>
      <ul role="list" className="space-y-2">
        {providers.map((provider) => {
          return <ProviderCard key={provider.id} provider={provider}/>
        })}
      </ul>
    </div>
  )
}

export default ProviderList