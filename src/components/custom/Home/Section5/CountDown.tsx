'use client'
import React from 'react';
import CountUp from 'react-countup';

const CountDown = ({ count }: { count: number }) => {
    return (
        <CountUp duration={6} end={count || 0} enableScrollSpy={true} scrollSpyOnce={true} />
    );
};

export default CountDown;