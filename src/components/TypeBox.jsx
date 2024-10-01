/* eslint-disable react/prop-types */

import React from 'react';
// import { AiOutlineCoffee } from "react-icons/ai";

const TypeBox = ({icon,title,desc,iconBg}) => {
    return (
        <div className='typebox__wrapper'>
            <div className='typebox__icon' style={{background:`${iconBg}`}}>{icon}</div>
            <div className='typebox__title'>{title}</div>
            <div className='typebox__desc'>{desc}</div>
        </div>
        //     <div className='typebox__wrapper'>
        //        <div className='typebox__icon'><AiOutlineCoffee /></div>
        //        <div className='typebox__title'>Coffee !!</div>
        //        <div className='typebox__desc'>Coffee is a beverage brewed from roasted coffee beans</div>
        //    </div>
    );
};

export default TypeBox;