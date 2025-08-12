import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'
import { useGetProvidersQuery } from '../services/providersApi'
import { setSelectedProviderId } from '../features/ui/uiSlice'
import RightPanel from '../components/RightPanel'
import LeftPanel from '../components/LeftPanel'


const Policies: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const selectedId = useSelector((state: RootState) => state.ui.selectedProviderId)
    const navigate = useNavigate()
    const { id } = useParams()
    const { data: providers } = useGetProvidersQuery()
  
    useEffect(() => {
      if (!providers) return
      if (id) {
        const pid = Number(id)
        const found = providers.find((p) => p.id === pid && p.isSupported)
        if (found) {
          dispatch(setSelectedProviderId(found.id))
          return
        }
        dispatch(setSelectedProviderId(null))
        navigate('/', { replace: true })
      }
    }, [id, providers, dispatch, navigate])
  
    return (
        <div className="flex-1 flex flex-col">
            <div className="px-5 py-3 border-b">
            <h1 className="text-xl font-semibold">Policies</h1>
            </div>
            <div className="flex flex-1 min-h-0">
                <RightPanel/>
                <LeftPanel selectedId={selectedId} />
            </div>
        </div>
    )
  }

export default Policies;