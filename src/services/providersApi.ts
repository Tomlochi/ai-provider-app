
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ProviderModel } from '../types'

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
        const list = (res.data as ProviderModel[]) ?? []
        const found = list.find((p) => p.id === id) ?? null
        return { data: found }
      }
    })
  })
})

export const { useGetProvidersQuery, useGetProviderByIdQuery } = providersApi
