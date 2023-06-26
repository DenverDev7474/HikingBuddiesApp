// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const hikeApi = createApi({
  reducerPath: 'hikeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (builder) => ({
    getHikes: builder.query({
      query: () => ({ url: 'hikes' }),
      provides: (result) => result.hikes,
    }),
    getHikeById: builder.query({
      query: (id) => ({ url: `hikes/${id}` }),
      provides: (result) => result.hike,
    }),
    addHike: builder.mutation({
      query: (hike) => ({
        url:'/hikes',
        method: 'POST',
        body: hike
      }) 
    }),
    updateHike: builder.mutation({
      mutation: (values) => ({ url: `hikes/${values.id}`, method: 'PATCH', body: values }),
      provides: (result) => result.hike,
    }),
    deleteHike: builder.mutation({
      mutation: (values) => ({ url: `hikes/${values.id}`, method: 'DELETE', body: values }),
      provides: (result) => result.hike,
    }),
  }),
})


export const { useGetHikesQuery, useGetHikeByIdQuery, useAddHikeMutation, useDeleteHikeMutation, useUpdateHikeMutation } = hikeApi;
