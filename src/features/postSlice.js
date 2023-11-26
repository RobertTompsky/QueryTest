import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiURL } from '../shared/api/apiURL'

export const postsApi = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (page) => ({
                url: `/posts?_start=${page * 5}&_limit=5`,
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
        }),
        getSelectedPost: builder.query({
            query: (id) => ({
                url: `/posts/${id}`
            })
        })
    })
})

export const { useGetPostsQuery, useGetSelectedPostQuery } = postsApi