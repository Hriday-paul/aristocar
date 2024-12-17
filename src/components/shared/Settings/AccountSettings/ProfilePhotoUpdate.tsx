import Image from 'next/image';
import React from 'react';

const ProfilePhotoUpdate = React.memo(() => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image src={'https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg'} height={500} width={500} alt={'user photo'} className='rounded-full w-40 h-auto mx-auto' />
            <label htmlFor="chosePhoto" className='px-6 py-3 bg-primary text-secondary mx-auto font-poppins mt-3 cursor-pointer text-sm'>Chose Image</label>
            <input type="file" name="chosePhoto" id="chosePhoto" className='hidden' />
        </div>
    );
});

ProfilePhotoUpdate.displayName = "ProfilePhotoUpdate"
export default ProfilePhotoUpdate;