import { apiSlice } from "./apiSlice";

const USER_URL = '/user'

export const usersAPISlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USER_URL}/logout`,
                method: 'POST'
            })
        }),
        emailcheck: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/emailcheck`,
                method: 'POST',
                body: data
            })
        }),
        usernamecheck: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/usernamecheck`,
                method: 'POST',
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/register`,
                method: 'POST',
                body: data
            })
        }),

    })
})

export const { useLoginMutation, useLogoutMutation, useEmailcheckMutation, useUsernamecheckMutation, useRegisterMutation } = usersAPISlice