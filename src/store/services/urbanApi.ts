import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export const urbanApi = createApi({
  reducerPath: 'urbanApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  endpoints: () => ({}),
});
