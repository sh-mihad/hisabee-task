'use client';
import apiSlice from "../api/apiSlice";

const accountsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => "/accounts"
        }),

        addAccount: builder.mutation({
            query: (data) => ({
                url: "/accounts",
                method: "POST",
                body: data
            }),

            // silently update catch data without reload
            // async onQueryStarted({ data }, { dispatch, queryFulfilled }) {
            //     try {
            //         const accountData = await queryFulfilled
            //         dispatch(apiSlice.util.updateQueryData("getAccounts", undefined, (draft) => {
            //             draft.push(accountData.data)
            //         }))
            //     } catch (err) {

            //     }
            // }

            async onQueryStarted({ data }, { dispatch, queryFulfilled }) {
                try {
                    const accountData = await queryFulfilled
                    const patchResult = dispatch(
                        apiSlice.util.updateQueryData('getAccounts', undefined, (draft) => {
                            draft.push(accountData.data)

                        })
                    )
                } catch { }
            },
        })
    })
})


export const { useGetAccountsQuery, useAddAccountMutation } = accountsApi