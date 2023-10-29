import React from 'react';
import './UpperSection.css'; // Import the external CSS file

const UpperSection = ({place, temp}) => {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return (
        <div className="centered-text">
            {/* temperature */}
            <div className="large-text">
                {temp}&deg;C
            </div>

            {/* place */}
            <div className="moderate-text">
                {place}
            </div>

            {/* date */}
            <div className="moderate-text">
                {[day, month, year].join("-")}
            </div>
        </div>
    );
}

export default UpperSection;
