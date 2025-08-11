
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProviderList from './components/ProviderList'
import ProviderDetail from './components/ProviderDetail'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { setSelectedProviderId } from './features/ui/uiSlice'
import { useGetProvidersQuery } from './services/providersApi'

const Shell: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const selectedId = useSelector((s: RootState) => s.ui.selectedProviderId)
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
    <div className="w-full h-[calc(100vh-56px)] flex">
      <Sidebar />
      <div className="flex grow">
        <div className="w-72 max-w-80 shrink-0">
          <ProviderList />
        </div>
        <main className="grow bg-gray-50">
          {selectedId ? (
            <ProviderDetail id={selectedId} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              <div className="text-center px-6">
                <h2 className="text-lg font-medium mb-2">Select a supported provider</h2>
                <p className="text-sm">Choose an item from the left list. Unsupported providers are disabled.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shell />} />
        <Route path="/provider/:id" element={<Shell />} />
        <Route
          path="*"
          element={
            <div className="p-6">
              <p>
                Page not found.{' '}
                <Link to="/" className="text-blue-600 underline">
                  Go home
                </Link>
              </p>
            </div>
          }
        />
      </Routes>
    </>
  )
}

export default App
