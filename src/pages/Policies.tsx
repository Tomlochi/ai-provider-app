import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'
import { useGetProvidersQuery } from '../services/providersApi'
import { setSelectedProviderId } from '../store/slices/providerSlice'
import RightPanel from '../components/RightPanel'
import LeftPanel from '../components/LeftPanel'
import { useTranslation } from 'react-i18next'


const Policies: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const selectedId = useSelector((state: RootState) => state.provider.selectedProviderId)
    const navigate = useNavigate()
    const { id } = useParams()
    const { data: providers } = useGetProvidersQuery()
    const { t } = useTranslation()
  
    useEffect(() => {
      if (!providers) return
      if (id) {
        const providerId = Number(id)
        const provider = providers.find((provider) => provider.id === providerId && provider.isSupported)
        if (provider) {
          dispatch(setSelectedProviderId(provider.id))
          return
        }
        dispatch(setSelectedProviderId(null))
        navigate('/', { replace: true })
      }
    }, [id, providers, dispatch, navigate])
  
    return (
        <div className="flex-1 flex flex-col">
            <div className="px-5 py-3 border-b">
            <h1 className="text-xl font-semibold">{t('sidebar.policies')}</h1>
            </div>
            <div className="flex flex-1 min-h-0">
                <RightPanel/>
                <LeftPanel selectedId={selectedId} />
            </div>
        </div>
    )
  }

export default Policies;