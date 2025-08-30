import CareerPage from '@/components/Career/CareerPage';
import JobVacacny from '@/components/Career/JobVacancy';
import RentalOffer from '@/components/Career/RentalOffer';
import Testing from '@/components/Career/Testing';
import React from 'react';

const Career = () => {
    return (
        <div>
            <CareerPage/>
            <Testing/>
            <RentalOffer/>
          
        </div>
    );
};

export default Career;