import React from 'react';
import UpperSection from './upperSection';
import LowerSection from './lowerSection';
import MiddleSection from './middleSection';

const MainSection = ({place, data}) => {
    return (
        <div className='main-section'>
            <UpperSection place={place} temp={data?.main?.temp}/>
            <MiddleSection status={data?.weather[0]?.description} humidity={data?.main?.humidity} windSpeed={data?.wind?.speed} />
            <LowerSection pressure={data?.main?.pressure} sunrise={data?.sys?.sunrise} sunset={data?.sys?.sunset} />
        </div>
    );
}

export default MainSection;