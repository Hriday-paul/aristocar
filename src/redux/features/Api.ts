import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Cookies } from "react-cookie";
import { removeUser } from '../slice/userSlice';
import { getFromLocalStorage } from '@/utils/local-storage';

const cookies = new Cookies();

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API,
    credentials: "include",
    prepareHeaders: (headers) => {

        // const token = getFromLocalStorage("accessToken")
        const token = cookies.get("accessToken");

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

// Refresh the base----------------------------------------------------------------
const baseQueryWithReauth: typeof baseQuery = async (
    args,
    api,
    extraOptions,
) => {

    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {

        const refreshToken = cookies.get("refreshToken");

        console.log("refreshToken", refreshToken)

        if (refreshToken) {
            const refreshResult = await baseQuery(
                {
                    url: "/auth/refresh-token",
                    method: "POST",
                    body: { refreshToken: refreshToken },
                },
                api,
                extraOptions,
            ) as { data: { data: { accessToken: string } } };

            console.log("refreshResult", refreshResult)

            // Check if refreshResult contains data and accessToken
            if (refreshResult?.data && refreshResult?.data?.data?.accessToken) {

                const newAccessToken = refreshResult?.data?.data?.accessToken;

                // Save the new token
                cookies.set("accessToken", newAccessToken, {
                    httpOnly: false,
                    maxAge: 14 * 24 * 60 * 60, // 7 days
                    path: '/',
                    sameSite: 'lax',
                    secure: process.env.production === 'production',
                });

                // Retry the original request with the new token
                api.dispatch({
                    type: "auth/tokenRefreshed",
                    payload: newAccessToken,
                });
                result = await baseQuery(args, api, extraOptions);
            } else {
                // Logout user if refresh token fails
                api.dispatch({ type: "auth/logout" });
            }
        } else {
            api.dispatch({ type: "auth/logout" });
            api.dispatch(removeUser());
        }
    }

    return result;
};


const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['user', 'cars', 'payments'],
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        admin_support: builder.mutation<{ message: string }, {
            "firstName": string,
            "lastName"?: string,
            "email": string,
            "description": string
        }>({
            query: (data) => ({
                url: '/contact/create-contact',
                method: 'POST',
                body: data,
            }),
        }),

    })
});

export const { useAdmin_supportMutation } = baseApi;
export default baseApi;