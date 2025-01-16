import baseApi from "./Api";
import { createUserResType, userResponseI } from "./types";

const AuthApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<{ message: string, data: { user: createUserResType, otpToken: { token: string } } }, {
            data: {
                name: string, email: string, password: string, role: 'user' | 'dealer', "dealer_address"?:
                {
                    "city" ?: string,
                    "country" ?: string,
                    "post_code" ?: string,
                    "vat_id" ?: string,
                    "street" ?: string
                }, "companyName"?: string, "dealership"?: string,
            }
        }>({
            query: ({ data }) => ({
                url: '/users/create',
                method: 'POST',
                body: data
            }),
            // invalidatesTags: []
        }),
        verifyOtp: builder.mutation<{ message: string, data: { user: createUserResType, token: string } }, { otp: string, token: string }>({
            query: ({ otp, token }) => ({
                url: '/otp/verify-otp',
                method: 'POST',
                body: { otp },
                headers: {
                    token: token,
                },
            })
        }),
        resendOtp: builder.mutation<{ message: string, data: { token: string } }, { email: string }>({
            query: ({ email }) => ({
                url: '/otp/resend-otp',
                method: 'POST',
                body: { email },
            })
        }),

        loginUser: builder.mutation<{ message: string, data: { user: createUserResType, accessToken: string, refreshToken: string } }, { email: string, password: string }>({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['user']
        }),
        resetPassword: builder.mutation<{ message: string }, { newPassword: string, confirmPassword: string, token: string }>({
            query: ({ newPassword, confirmPassword, token }) => ({
                url: '/auth/reset-password',
                method: 'PATCH',
                body: { newPassword, confirmPassword },
                headers: {
                    token,
                },
            }),
        }),

        getUserProfile: builder.query<{ message: string, data: userResponseI }, {}>({
            query: () => ({
                url: '/users/my-profile',
            }),
            providesTags: ['user']
        }),
        changePassword: builder.mutation<{ message: string }, {
            "oldPassword": string,
            "newPassword": string,
            "confirmPassword": string
        }>({
            query: (data) => ({
                url: '/auth/change-password',
                method: 'PATCH',
                body: data
            }),
            // providesTags: ['user']
        }),
        updateProfile: builder.mutation<{ message: string }, { data: any }>({
            query: ({ data }) => ({
                url: '/users/update-my-profile',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['user']
        })

    })
})

export const { useRegisterUserMutation, useVerifyOtpMutation, useResendOtpMutation, useLoginUserMutation, useResetPasswordMutation, useGetUserProfileQuery, useChangePasswordMutation, useUpdateProfileMutation } = AuthApi;