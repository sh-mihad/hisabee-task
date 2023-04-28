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

            async onQueryStarted({ data }, { dispatch, queryFulfilled }) {
                try {
                    const accountData = await queryFulfilled
                    console.log(accountData);
                    const patchResult = dispatch(
                        apiSlice.util.updateQueryData('getAccounts', undefined, (draft) => {
                            draft.data.push(accountData.data)

                        })
                    )
                } catch { }
            },
        })
    })
})


export const { useGetAccountsQuery, useAddAccountMutation } = accountsApi