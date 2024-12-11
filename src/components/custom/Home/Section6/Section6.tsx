import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ExclusiveCarCard from './ExclusiveCarCard';
import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';

const Section6 = () => {
    const exclusiveCars = [
        {
            id: 1,
            title: "Oldtimers",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892511/bdcalling/exclusive_car/svrmtdxtosfdw4n1pll3.png"
        },
        {
            id: 2,
            title: "Coupe",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892511/bdcalling/exclusive_car/zhgbgooed0pkrwzxslrh.png"
        },
        {
            id: 3,
            title: "Sedans",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892510/bdcalling/exclusive_car/gymnsdzwwzwr8vqgr6xz.png"
        },
        {
            id: 4,
            title: "Supercars",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892511/bdcalling/exclusive_car/brw4fmwefkdmryiodpar.png"
        },
        {
            id: 5,
            title: "Hybrid & Electric",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892510/bdcalling/exclusive_car/ur3lngsdgbj7acnjcqtz.png"
        },
        {
            id: 6,
            title: "SUVs",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892511/bdcalling/exclusive_car/jj6cf1k4jzjvu4mbq1zk.png"
        },
        {
            id: 7,
            title: "Limousines",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892511/bdcalling/exclusive_car/fh2zchahesgoxoalylqp.png"
        },
        {
            id: 8,
            title: "Off-Roaders",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892510/bdcalling/exclusive_car/ho9rqgktks61vyoqwvan.png"
        },
        {
            id: 9,
            title: "Off-Roaders",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892510/bdcalling/exclusive_car/ho9rqgktks61vyoqwvan.png"
        },
        {
            id: 10,
            title: "Hybrid & Electric",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892510/bdcalling/exclusive_car/ur3lngsdgbj7acnjcqtz.png"
        },
        {
            id: 11,
            title: "Limousines",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733892511/bdcalling/exclusive_car/fh2zchahesgoxoalylqp.png"
        },
    ]

    return (
        <div className='container mt-10 md:mt-16 lg:mt-20 xl:mt-24'>

            <SectionTitle title={"Our exclusive"} />

            <div className='lg:py-12 xl:py-14 py-9 gap-3 grid grid-flow-dense lg:grid-cols-3 grid-cols-2 justify-center place-items-center'>

                <div className=" flex flex-col justify-center place-items-center h-full gap-3 w-full">
                    {
                        exclusiveCars?.map((car, indx) => {
                            return indx < 4 && <ExclusiveCarCard key={car?.id} id={car?.id} image={car?.img} title={car?.title} indx={indx} />
                        })
                    }
                </div>
                <div className=" flex flex-col justify-center place-items-center h-full lg:h-[calc(100%+10%)] gap-3">
                    {
                        exclusiveCars?.map((car, indx) => {
                            return (indx >= 4 && indx < 7) && <ExclusiveCarCard key={car?.id} big={true} id={car?.id} image={car?.img} title={car?.title} indx={indx} />
                        })
                    }
                </div>
                <div className="grid grid-cols-2 lg:flex lg:flex-col justify-center place-items-center h-full gap-3 col-span-2 lg:col-span-1 w-full">
                    {
                        exclusiveCars?.map((car, indx) => {
                            return (indx >= 7 && indx <= 10) && <ExclusiveCarCard key={car?.id} id={car?.id} image={car?.img} title={car?.title} indx={indx} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Section6;


