'use client'
import React, { useState } from 'react';
import AccountSettings, { profileInputType } from './AccountSettings';
import ProfilePhotoUpdate from './ProfilePhotoUpdate';
import { useGetUserProfileQuery, useUpdateProfileMutation } from '@/redux/features/AuthApi';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import SmError from '../../Dashboard/SmError';

const UserAccountSettings = ({ txt }: { txt: { [key: string]: string } }) => {
    const { isLoading: profileGetLoad, isSuccess, isError, data } = useGetUserProfileQuery({});
    const [postUpdate, { isLoading }] = useUpdateProfileMutation();
    const [image, setImage] = useState<File | null>(null);

    const handleUpdate = async (data: profileInputType) => {
        try {
            const form = new FormData();
            const payload = {
                name: data?.full_name,
                user_address: data?.location,
                phone: data?.phone
            }
            form.append('data', JSON.stringify(payload))

            if (image) {
                form.append('image', image);
            }

            console.log(form.entries());

            const res = await postUpdate({ data: form }).unwrap()

            toast.success(res?.message || 'Profile update successfully')

        } catch (err: any) {
            console.log("object", err)
            toast.error(err?.data?.message || 'Something went wrong, try again')
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 md:gap-y-0 items-center">
            {profileGetLoad ?
                <div className='flex flex-col md:flex-row gap-5 items-center w-full col-span-2'>
                    <Skeleton className="h-40 w-full rounded" />
                    <Skeleton className="h-40 w-full rounded" />
                </div> :
                isError ? <SmError /> :
                    isSuccess ? <>
                        <AccountSettings handleUpdate={handleUpdate} isLoading={isLoading} data={data?.data} txt={txt} />
                        <ProfilePhotoUpdate image={image} setImage={setImage} currentImg={data?.data?.image} btnTxt={txt?.chose_img} />
                    </> : <></>}
        </div>
    );
};

export default UserAccountSettings;