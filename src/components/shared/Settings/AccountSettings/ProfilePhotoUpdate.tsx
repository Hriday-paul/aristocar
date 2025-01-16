import Image from 'next/image';
import React from 'react';

const ProfilePhotoUpdate = React.memo(({ setImage, image, currentImg, btnTxt }: { setImage: React.Dispatch<React.SetStateAction<File | null>>, image: File | null, currentImg: string | null, btnTxt: string }) => {
    const fileonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files as File[] | null;
        if (!fileList) {
            return;
        }
        setImage(fileList[0])
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <Image src={image ? URL.createObjectURL(image) : currentImg ? currentImg : 'https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg'} height={500} width={500} alt={'user photo'} className='rounded-full w-40 h-40 mx-auto object-cover' />
            <label htmlFor="chosePhoto" className='px-6 py-3 bg-primary text-secondary mx-auto font-poppins mt-3 cursor-pointer text-sm'>{btnTxt}</label>
            <input onChange={fileonChange} multiple={false} type="file" name="chosePhoto" id="chosePhoto" className='hidden' />
        </div>
    );
});

ProfilePhotoUpdate.displayName = "ProfilePhotoUpdate"
export default ProfilePhotoUpdate;