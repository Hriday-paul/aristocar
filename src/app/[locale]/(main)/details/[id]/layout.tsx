import React from 'react';

const layout = async ({ children, cardetails, similarCars }: { children: React.ReactNode, cardetails: React.ReactNode, similarCars: React.ReactNode }) => {
    return (
        <div>
            {children}
            {cardetails}
            {similarCars}
        </div>
    );
};

export default layout;