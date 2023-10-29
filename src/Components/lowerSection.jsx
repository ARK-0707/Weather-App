import React from 'react';
import './UpperSection.css';
import rise from './icons/sunrise.png';
import set from './icons/sunset.png';
import presure from './icons/barometer.png';

const LowerSection = ({pressure, sunrise, sunset}) => {

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const options = { hour: 'numeric', minute: 'numeric' };
        return date.toLocaleTimeString([], options);
      }


    return (
        <div>
            {/*pressure*/}
            <div className='moderat-text'>
                <img src={presure} alt='Humidity Icon' className='icon' />
                Pressure: {pressure} atm
            </div>

            {/*Sunrise*/}
            <div className='moderat-text'>
                <img src={rise} alt='Humidity Icon' className='icon' />
                Sunrise: {formatTime(sunrise)}
            </div>

            {/*Sunset*/}
            <div className='moderat-text'>
                <img src={set} alt='Humidity Icon' className='icon' />
                Sunset: {formatTime(sunset)}
            </div>
        </div>
    );
}

export default LowerSection;