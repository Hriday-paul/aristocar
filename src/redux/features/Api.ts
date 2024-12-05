import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { adminDipertmentsType } from './types';


const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['myAppoinments', 'tests', 'reservation', 'doctors'],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL }),
    endpoints: (builder) => ({
        adminDipertments: builder.query<adminDipertmentsType, void>({
            query: () => `/dipertments`,
        })
    })
});

export const { useAdminDipertmentsQuery } = baseApi;
export default baseApi;