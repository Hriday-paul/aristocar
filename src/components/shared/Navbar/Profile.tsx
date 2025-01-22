import { SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetUserProfileQuery } from '@/redux/features/AuthApi';
import { addUserDetails } from '@/redux/slice/userSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

const Profile = ({ smScreen = false }: { smScreen?: boolean }) => {
    const { isLoading, data, isSuccess, isError } = useGetUserProfileQuery({})
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.userSlice);

    useEffect(() => {
        if (isSuccess) {
            dispatch(addUserDetails({
                name: data?.data?.name,
                email: data?.data?.email,
                address: data?.data?.address || '',
                gender: data?.data?.gender || '',
                phoneNumber: data?.data?.phoneNumber || '',
                image: data?.data?.image || '',
                role: data?.data?.role,
            }))
        }
        if (isError) {
            dispatch(addUserDetails({
                name: '',
                email: '',
                address: '',
                gender: '',
                phoneNumber: '',
                image: '',
                role: "user",
            }))
        }
    }, [isSuccess, data, dispatch, isError])

    return (
        <>
            {isLoading ? <Skeleton className="h-8 w-20 rounded-sm" /> : (user?.email && user?.name) ? (!smScreen ? <Link href={`/${user?.role}/dashboard`} className="flex flex-row gap-x-1 items-center border border-stroke px-2 py-1.5 rounded-sm">
                {
                    user?.image ? <Image src={user?.image} height={50} width={50} className='h-4 w-4 object-cover rounded-full' alt='user image' /> : <FaRegCircleUser className="text-xl text-primary" />
                }
                <p className="font-poppins text-primary text-sm font-medium capitalize">{user?.name}</p>
            </Link> : <Link href={`/${user?.role}/dashboard`}>
                <SheetTrigger className="flex flex-row justify-start gap-x-1 items-center border border-stroke px-2 py-1.5 rounded-sm w-20 mr-auto">
                    {
                        user?.image ? <Image src={user?.image} height={50} width={50} className='h-4 w-4 object-cover rounded-full' alt='user image' /> : <FaRegCircleUser className="text-xl text-primary" />
                    }
                    <p className="font-poppins  text-secondary text-sm font-medium">{user?.name}</p>
                </SheetTrigger>
            </Link>) : <></>
            }
        </>
    );
};

export default Profile;