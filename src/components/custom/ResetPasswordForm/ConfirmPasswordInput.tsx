import React, { useCallback, useRef, useState } from 'react';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { ResetInputs } from './ResetPasswordForm';

type ConfirmPasswordInputProps = {
    register: UseFormRegister<ResetInputs>;
    errors: FieldErrors<ResetInputs>;
    watch: UseFormWatch<ResetInputs>;
}

const ConfirmPasswordInput = ({ register, errors, watch }: ConfirmPasswordInputProps) => {
    const [isVisible, setIsvisible] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleVisible = useCallback(() => {
        setIsvisible(prev => !prev)
    }, [])

    return (
        <div className="w-full mx-auto">
            <label htmlFor='conpassword' className="mb-1.5 block text-black dark:text-white font-poppins">
                Confirm New Password
                <span className="text-red-500 text-base ml-1">*</span>
            </label>
            <div className='relative'>
                <input
                    type={isVisible ? 'text' : 'password'}
                    id='conpassword'
                    {...register("confirm_password", { required: true })}
                    ref={(e) => {
                        register("confirm_password").ref(e)
                        inputRef.current = e;
                    }}
                    placeholder="Confirm Password"
                    className={`pr-10 w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.confirm_password ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                <div className="absolute right-0 inset-y-0 flex items-center cursor-pointer" onClick={handleVisible}>
                    {!isVisible ? <IoEyeOffOutline className="text-primary text-xl mr-3" /> : <IoEyeOutline className="text-primary text-xl mr-3" />}
                </div>
            </div>
            {(watch('password') !== watch('confirm_password')) && <p className='text-xs text-red-500 mt-0.5'>Password not match</p>}
        </div>
    );
};

ConfirmPasswordInput.displayName = "ConfirmPasswordInput"

export default ConfirmPasswordInput;