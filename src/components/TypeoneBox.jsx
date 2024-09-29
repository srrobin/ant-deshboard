/* eslint-disable react/prop-types */
import React from 'react';

const TypeoneBox = ({title, icon, number, subtitle}) => {
    return (
        <div className='typeone__box'>
            <div className='typeone__topinfo'>
                <div className='topinfo__text'>{title}</div>
                <div className="topinfo__icon">{icon}</div>
            </div>
            <div className='info__numbers'>{number}</div>
            <div className='info__footer'>{subtitle}</div>
        </div>
    );
};

export default TypeoneBox;