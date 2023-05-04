import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const adminApi =createApi({
    reducerPath:'admin',
    baseQuery:fetchBaseQuery({baseUrl:'apiurl'}),
    endpoints:(builder)=>({
        getAccounts: builder.query({ 
            query:()=>'/users',
            providesTags:['users']
        }),
        addAccount:builder.mutation({
          query :(id,name) =>({
            url:'users',
            method:'POST',
            body:{id,name}
          }),
          invalidatesTags:['users']
        })
    })
})

export const {useGetAccountsQuery,useAddAccountMutation}=adminApi