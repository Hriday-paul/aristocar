'use client'
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import OTPInput from "react-otp-input";
import { ImSpinner2 } from 'react-icons/im';
import { useVerifyOtpMutation } from '@/redux/features/AuthApi';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCookies } from 'react-cookie';

const OtpPasswordForm = () => {
    const [postVerify, { isLoading }] = useVerifyOtpMutation()
    const [otp, setOtp] = useState<string>('0');
    const nextRout = useSearchParams().get('next') || '/signin'

    const navig = useRouter();
    const [{ token }, setCookie] = useCookies(['token']);

    const submitOtp = async () => {
        try {

            const res = await postVerify({ otp, token }).unwrap();

            toast.success(res?.message || 'Verify successfully');

            setCookie('token', res?.data?.token, {
                httpOnly: false,
                maxAge: 4 * 60, // 4 minutes
                path: '/',
                sameSite: 'lax',
                secure: process.env.production === 'production',
            });

            navig.push(nextRout)

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

    return (
        <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-normal font-lastica text-black uppercase text-center">
                Aristocar
            </h1>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-poppins text-primary capitalize text-center mt-4">
                Email OTP Verification
            </h3>
            <p className="text-sm text-center font-poppins font-medium text-primary mt-1">We have sent a code to your email</p>

            <div className="mx-auto flex w-full max-w-md flex-col">
                <div className="mx-auto my-10">
                    <OTPInput
                        inputStyle='otpinputStyle'
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputType="text"
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />
                </div>

                <div className="flex flex-row justify-center gap-x-5 items-center mt-3">
                    <Link href='/send-otp' className='bg-primary text-secondary font-poppins font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200'>
                        Resend
                    </Link>

                    <button onClick={submitOtp} disabled={isLoading || otp.length < 6} className='bg-primary text-secondary font-poppins font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200 cursor-pointer disabled:bg-opacity-85 disabled:cursor-not-allowed flex flex-row gap-x-1 items-center'>
                        {isLoading && <ImSpinner2 className="text-xl text-white animate-spin mr-1.5" />}
                        <p>VERIFY NOW</p>
                    </button>
                </div>

            </div>
        </div>
    );
};


export default OtpPasswordForm;