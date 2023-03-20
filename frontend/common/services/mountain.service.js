// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const mountainApi = createApi({
  reducerPath: 'mountainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (builder) => ({  
    getMountainById: builder.query({
      query: (id) => ({ 
        url: `mountains/${id}`, 
        method: 'GET'
      }),
      provides: (result) => result.mountain,
    }),
    getAllMountains: builder.query({
      query: () => ({
        url: 'mountains',
        method: 'GET'
      }),
      provides: (result) => result.mountains,
    }),
  })
})     


export const { useGetMountainByIdQuery, useGetAllMountainsQuery } = mountainApi;