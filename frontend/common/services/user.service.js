import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: (id) => ({
                url: `user/${id}`,
                method: 'GET'
            }),
            provides: (result) => result.user,
        }),
        registerUser: builder.mutation({
            query: (body) => ({
            url: '/register',
            method: 'POST',
            body: {
                username: body.username,
                firstName: body.firstName,
                lastName: body.lastName,
                city: body.city,
                email: body.email,
                confirmEmail: body.confirmEmail,
                password: body.password,
                confirmPassword: body.confirmPassword,
            }
            }),
        }),
        loginUser: builder.mutation({
            query: (user) => ({
            url: '/login',
            method: 'POST',
            body: {
                username: user.username,
                password: user.password,
            }
            }),
        }),
        logoutUser: builder.mutation({
            query: () => ({
            url: '/logout',
            method: 'GET',
            }),
        }),

    })
}
)

export const { useGetUserByIdQuery, useRegisterUserMutation, useLoginUserMutation} = userApi
