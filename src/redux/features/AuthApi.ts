import baseApi from "./Api";
import { createUserResType } from "./types";

const AuthApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<{ message: string, data: { user: createUserResType, otpToken: { token: string } } }, { data: { name: string, email: string, password: string, role: 'user' | 'dealer' } }>({
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
        getUserProfile: builder.query<{ message: string, data: createUserResType }, void>({
            query: () => ({
                url: '/users/my-profile',
            }),
            providesTags : ['user']
        }),

    })
})

export const { useRegisterUserMutation, useVerifyOtpMutation, useResendOtpMutation, useLoginUserMutation, useResetPasswordMutation, useGetUserProfileQuery } = AuthApi;