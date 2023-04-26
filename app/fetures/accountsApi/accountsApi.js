'use client';
import apiSlice from "../api/apiSlice";

const accountsApi  = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        getAccounts : builder.query({
            query:()=>"/accounts"
        })
    })
})


export const {useGetAccountsQuery} = accountsApi