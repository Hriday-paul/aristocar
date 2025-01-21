import UseGetAbout from '@/Hooks/UseGetAbout';
import UseGetPrivacy from '@/Hooks/UseGetPrivacy';
import React from 'react';

const page = async () => {
    const privacy = await UseGetPrivacy() as {
        "data": {
            "_id": "678e1c02bb7cae0b77e1cd1f",
            "description": "gfskvguifguidsfhgildfhgieihgop",
            "createdAt": "2025-01-20T09:48:50.986Z",
            "updatedAt": "2025-01-20T09:48:50.986Z",
            "__v": 0
        }
    };


    return (
        <div className='bg-[#F8FAFC]'>
            {/* <h2 className='font-poppins text-3xl text-black py-40 text-center'>This page content is dynamic</h2> */}
            <div className='container py-5 md:py-8 lg:py-10'>
                <div
                    dangerouslySetInnerHTML={{
                        __html: privacy?.data?.description || "",
                    }}
                    className="break-words"
                ></div>
            </div>
        </div>
    );
};

export default page;