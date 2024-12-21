import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ExclusiveCarCard from './ExclusiveCarCard';
import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';
import CenterContent from './CenterContent';

const Section6 = () => {
    const exclusiveCars = [
        {
            id: 1,
            title: "Oldtimers",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1734757647/bdcalling/exclusive_car/xyyngdth3mbco9fdmabs.png"
        },
        {
            id: 2,
            title: "Supercars",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733981686/bdcalling/carousal/ljxxz8khwdgle3x4fqk4.png"
        },
        {
            id: 3,
            title: "SUVS",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1734757647/bdcalling/exclusive_car/shzvfib8s44caxzquheu.png"
        },
        {
            id: 4,
            title: "Coupe",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1734757647/bdcalling/exclusive_car/dsnwivmu28urrl22pjma.png"
        },
        {
            id: 5,
            title: "Limousines",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1734757647/bdcalling/exclusive_car/hlzlpiupei8pw4x0jm4x.png"
        },
        {
            id: 6,
            title: "Limousines",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1734757647/bdcalling/exclusive_car/hlzlpiupei8pw4x0jm4x.png"
        },
        {
            id: 7,
            title: "Sedans",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1734757647/bdcalling/exclusive_car/ak51gf4q54iafrzugse5.png"
        },
        {
            id: 8,
            title: "Hybrid & Electric",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1734757647/bdcalling/exclusive_car/w33t7ct0inlzrduujpf4.png"
        },
        {
            id: 9,
            title: "Convertibles",
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1734757646/bdcalling/exclusive_car/dos9ipqxm4ga4rrhpy1n.png"
        }
    ]

    return (
        <div className='container mt-10 md:mt-16 lg:mt-20 xl:mt-24'>

            <SectionTitle title={"Our exclusive"} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-12 xl:py-14 py-9 gap-3 justify-center place-items-center'>

                <div className="flex flex-col justify-center place-items-center h-full gap-3 w-full">
                    {
                        exclusiveCars?.map((car, indx) => {
                            return indx < 3 && <ExclusiveCarCard key={car?.id} id={car?.id} image={car?.img} title={car?.title} indx={indx} />
                        })
                    }
                </div>
                <div className="flex flex-col justify-center place-items-center h-full lg:h-[calc(100%+10%)] gap-3">
                    <ExclusiveCarCard big={true} id={exclusiveCars[3]?.id} image={exclusiveCars[3]?.img} title={exclusiveCars[3]?.title} indx={3} />
                    <CenterContent indx={4} />
                    <ExclusiveCarCard big={true} id={exclusiveCars[5]?.id} image={exclusiveCars[4]?.img} title={exclusiveCars[5]?.title} indx={5} />
                </div>
                <div className="grid grid-cols-2 lg:flex lg:flex-col justify-center place-items-center h-full gap-3 w-full md:col-span-2 lg:col-span-1">
                    {
                        exclusiveCars?.map((car, indx) => {
                            return (indx >= 6 && indx <= 8) && <ExclusiveCarCard key={car?.id} id={car?.id} image={car?.img} title={car?.title} indx={indx} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Section6;


