import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const formatTime = (value) => value.toString().padStart(2, '0');

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const dayOfWeek = daysOfWeek[dateTime.getDay()];
    const dayOfMonth = dateTime.getDate();
    const month = months[dateTime.getMonth()];
    const year = dateTime.getFullYear();
    const hours = formatTime(dateTime.getHours());
    const minutes = formatTime(dateTime.getMinutes());
    const seconds = formatTime(dateTime.getSeconds());

    return (
        <div>
            <h1 className='text-8xl text-center font-bold text-white'>{`${hours}:${minutes}`}</h1>

            <h1 className='text-center text-white'>{`${dayOfWeek} ${dayOfMonth} ${month} ${year}`}</h1>
        </div>
    );
};

export default DigitalClock;
