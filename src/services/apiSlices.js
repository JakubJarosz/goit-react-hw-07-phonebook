import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6342a0003f83935a78461f7e.mockapi.io',
  }),
  tagTypes: ['Items'],
  endpoints: builder => ({
    getItems: builder.query({
        query: () => '/contacts',
        transformResponse: res=> res.sort((a,b) => b.id - a.id),
      providesTags: ['Items'],
    }),
    addItems: builder.mutation({
      query: items => ({
        url: '/contacts',
        method: 'POST',
        body: items,
      }),
      invalidatesTags: ['Items'],
    }),
    updateItems: builder.mutation({
      query: items => ({
        url: `/contacts/${items.id}`,
        method: 'PUT',
        body: items,
      }),
      invalidatesTags: ['Items'],
    }),
    deleteItems: builder.mutation({
      query: ({ id }) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Items'],
    }),
  }),
});

export const {
    useGetItemsQuery,
    useAddItemsMutation,
    useUpdateItemsMutation,
    useDeleteItemsMutation
} = apiSlice