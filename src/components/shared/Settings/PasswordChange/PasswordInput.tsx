import React, { useCallback, useRef, useState } from "react";
import { UseFormRegister, FieldErrors, RegisterOptions, Path } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface PasswordInputProps<T extends Record<string, any>> {
    name: Path<T>;
    label: string;
    placeholder?: string;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    isLarge?: boolean;
    validationRules: RegisterOptions<T, Path<T>>;
}

const PasswordInput = <T extends Record<string, any>>({
    name,
    label,
    placeholder = "Enter password",
    register,
    errors,
    isLarge = false,
    validationRules,
}: PasswordInputProps<T>) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleVisible = useCallback(() => {
        setIsVisible((prev) => !prev);
    }, []);

    return (
        <div className="w-full mx-auto">
            <label htmlFor={name} className={`mb-1.5 block text-black dark:text-white font-poppins ${!isLarge ? "text-sm" : ""}`}>
                {label}
                <span className="text-red-500 text-base ml-1">*</span>
            </label>
            <div className="relative">
                <input
                    type={isVisible ? "text" : "password"}
                    id={name}
                    placeholder={placeholder}
                    {...register(name, validationRules)}
                    ref={(e) => {
                        register(name).ref(e);
                        inputRef.current = e;
                    }}
                    className={`pr-10 w-full ${!isLarge ? "rounded-sm" : "rounded"} border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.[name]
                        ? "border-danger"
                        : "dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary"
                        } ${!isLarge ? "text-sm" : ""}`}
                />
                <div className="absolute right-0 inset-y-0 flex items-center cursor-pointer" onClick={handleVisible}>
                    {!isVisible ? (
                        <IoEyeOffOutline className="text-primary text-xl mr-3" />
                    ) : (
                        <IoEyeOutline className="text-primary text-xl mr-3" />
                    )}
                </div>
            </div>
            {errors?.[name] && (
                <p className="text-red-500 text-sm col-span-2">{errors?.[name]?.message as string}</p>
            )}
        </div>
    );
};

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
