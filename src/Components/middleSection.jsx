import React from 'react';
import './UpperSection.css';
import humid from './icons/humidity.png';
import wind from './icons/wind.png';

const MiddleSection = ({status, humidity, windSpeed}) => {

    return (
        <div>
            {/* Condition */}
            <div className='moderate-text status'>
                {status}
            </div>

            {/* Humidity and Wind Speed side by side */}
            <div className='side-by-side'>
                <div className='moderat-text'>
                    <img src={humid} alt='Humidity Icon' className='icon' />
                    Humidity: {humidity}%
                </div>
            </div>

            <div className='side-by-side'>
                <div className='moderat-text'>
                    <img src={wind} alt='Humidity Icon' className='icon' />
                    Wind Speed: {windSpeed} Km/hr
                </div>
            </div>
        </div>
    );
}

export default MiddleSection;
