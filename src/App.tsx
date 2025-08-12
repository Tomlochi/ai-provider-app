import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Policies from './pages/Policies'
import Overview from './pages/Overview'
import OrganizationSettings from './pages/OrganizationSettings'
import PageNotFound from './pages/PageNotFound'
import Layout from './components/Layout'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Policies />} />
          <Route path="/provider/:id" element={<Policies />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/settings" element={<OrganizationSettings />} />
        </Route>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </>
  )
}

export default App