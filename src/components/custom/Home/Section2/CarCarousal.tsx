import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CarCard from '@/components/shared/CarCard/CarCard';
import { carDetailsI } from '@/app/[locale]/(main)/details/[id]/@cardetails/page';


const CarCarousal = ({ bestCars, txt }: { bestCars: carDetailsI[], txt: { [key: string]: string } }) => {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {
                        bestCars?.map(car => {
                            return <CarouselItem key={car?._id}><CarCard car={car} txt={txt} /></CarouselItem>
                        })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    );
};

export default CarCarousal;