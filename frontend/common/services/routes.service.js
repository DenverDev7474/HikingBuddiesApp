import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const routeApi = createApi({
    reducerPath: 'routeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
    endpoints: (builder) => ({
        getRouteById: builder.query({
            query: (id) => ({
                url: `routes/${id}`,
                method: 'GET'
            }),
            provides: (result) => result.route,
        }),
        getAllRoutesByMountainId: builder.query({
            query: (id) => ({
                url: `routes/mountain/${id}`,
                method: 'GET'
            }),
            provides: (result) => {
                return result.routes
            }
        }),
        getAllRoutes: builder.query({
            query: () => ({
                url: 'routes',
                method: 'GET'
            }),
            provides: (result) => result.routes,
        }),
    })  
})

export const {useGetRouteByIdQuery, useGetAllRoutesByMountainIdQuery, useGetAllRoutesQuery} = routeApi;