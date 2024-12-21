import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { carType } from './Section2';
import CarCard from '@/components/shared/CarCard/CarCard';


const CarCarousal = ({ bestCars }: { bestCars: carType[] }) => {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {
                        bestCars?.map(car => {
                            return <CarouselItem key={car?.id}><CarCard car={car} /></CarouselItem>
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