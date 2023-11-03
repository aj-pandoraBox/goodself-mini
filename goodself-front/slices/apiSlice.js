import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HOSTURL } from "@env"
const baseQuery = fetchBaseQuery({ baseUrl: `${HOSTURL}/api/v1` })
console.log(`${HOSTURL}/api/v1`)
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'Post'],
    endpoints: (builder) => ({})
})
