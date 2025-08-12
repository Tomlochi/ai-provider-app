
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ProviderModel } from '../types/types'

export const providersApi = createApi({
  reducerPath: 'providersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getProviders: builder.query<ProviderModel[], void>({
      query: () => 'mock_providers.json'
    }),
    getProviderById: builder.query<ProviderModel | null, number>({
      async queryFn(id, _api, _extra, baseQuery) {
        const res = await baseQuery('mock_providers.json')
        if (res.error) return { error: res.error as any }
        const providers = (res.data as ProviderModel[]) ?? []
        const provider = providers.find((provider) => provider.id === id) ?? null
        return { data: provider }
      }
    })
  })
})

export const { useGetProvidersQuery, useGetProviderByIdQuery } = providersApi
