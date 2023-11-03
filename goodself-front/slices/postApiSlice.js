import { apiSlice } from "./apiSlice";

const USER_URL = '/post'

export const postAPISlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addPost: builder.mutation({
            query: (data) => {
                return {
                    url: `${USER_URL}/add`,
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ['Post']

        }),
        getPost: builder.query({
            query: () => {
                return {
                    url: `${USER_URL}/all`,

                }
            },
            providesTags: ['Post'],
        }),

    })
})

export const { useAddPostMutation, useGetPostQuery, useLazyGetPostQuery } = postAPISlice