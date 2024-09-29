import { Progress } from 'antd';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const ProductScore = () => {
    return (
        <div className='product__score'>
            <div className='score__area'>
               <div className='score_top'>
                 <div className='score__title'>
                      product score
                 </div>
                 <div className='score__icon'>
                    <span>view more</span>
                    <IoIosArrowRoundForward  style={{fontSize:"20px"}}/>
                 </div>
               </div>
               <div className='score_count'>7234 / 100000</div>
               <div className='score_subtitle'>vs Last Quarter 2812</div>
            </div>
            <div className='border__area'></div>
            <div className='score__user'>
              <div className='user_type'>
                <div className='top__title'>desktop users</div>
                <div className='users__count'>70.45 %</div>
                <div className='users__progress'>
                <Progress
                    percent={70.45}
                    percentPosition={{
                        align: 'center',
                        type: 'inner',
                    }}
                    strokeLinecap="butt"
                    size={[200, 30]}
                     strokeColor="#2f4f4f"
                    />
                </div>
                <div className='users__subtitle'>33456 points from desktop</div>
              </div>
              <div className='user_type'> 
              <div className='top__title'>mobail users</div>
                <div className='users__count'>55.74 %</div>
                <div className='users__progress'>
                <Progress
                    percent={55.74}
                    percentPosition={{
                        align: 'center',
                        type: 'inner',
                    }}
                    strokeLinecap="butt"
                    size={[200, 30]}
                     strokeColor="#3b4646de"
                    />
                </div>
                <div className='users__subtitle'>33456 points from mobail</div>
              </div>
            </div>
        </div>
    );
};

export default ProductScore;