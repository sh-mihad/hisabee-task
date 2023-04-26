import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl: "https://distribution.hishabee.business/api/text"
    }),
    endpoints:(builder)=>({})
})

export default apiSlice;