import React from 'react';

const SimilarCar = () => {
    
    return (
        <div className="bg-black ">
            <div className='container py-5'>
                <h3 className="font-lastica text-xl  md:text-3xl lg:text-4xl text-secondary text-center uppercase my-8 md:my-10 lg:my-14">Similar car</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center my-10'>
                    {/* {
                        similarCars?.map(car => {
                            return <CarCard key={car?.id} car={car} />
                        })
                    } */}
                </div>
            </div>
        </div>
    );
};

export default SimilarCar;