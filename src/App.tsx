import './App.css'
import { useGetProvidersQuery } from './services/providersApi'

function App() {
  const { data: providers } = useGetProvidersQuery()

  return (
    <>
       {providers?.map((provider) => (
          <li key={provider.id}>
            <strong>{provider.providerName}</strong>
            <p>{provider.id}</p>
          </li>
        ))}
    </>
  )
}

export default App
