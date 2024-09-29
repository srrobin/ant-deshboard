import { Tooltip } from 'antd';
import React from 'react';
import { TfiArrowRight } from "react-icons/tfi";


import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
const data = [
    { name: "JUL 14", uv: 100, pv: 20, amt: 2400 },
    { name: "JUL 15", uv: 80, pv: 40, amt: 2210 },
    { name: "JUL 16", uv: 60, pv: 60, amt: 2290 },
    { name: "JUL 17", uv: 40, pv: 80, amt: 2000 },
    { name: "JUL 18", uv: 20, pv: 60, amt: 2181 },
    { name: "JUL 19", uv: 0, pv: 100, amt: 2500 },
  ];
const HotelMetrix = () => {
    return (
        <div className='chart__area'>
            <div className="hotel__metrix__top__arrea">
                <div className="metrix__left">
                <div className="metirx__title">
                    Occupancy(80%)
                    <span> Overload</span>
                </div>
                <div className="metrix__sub"> Arrivals / Departues / Stay over</div>
                </div>
                <div className="metrix__right">
                Tranding:
                <span>N/A</span>
                </div>
            </div>
            <div style={{ width: "100%", height: 345 }}>
                <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2F4F4F" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#2F4F4F" stopOpacity={0} />
                    </linearGradient>
                    </defs>

                    <XAxis dataKey="name" axisLine={false} />
                    <YAxis axisLine={false} />
                    <CartesianGrid
                    strokeSolidarray="5 5"
                    vertical="true"
                    horizontal={false}
                    />
                    <Tooltip />

                    <Area
                    dot={{
                        fill: "#2F4F4F",
                        fillOpacity: 3,
                        stroke: "#fff",
                        strokeWidth: 2,
                        r: 6,
                        strokeDasharray: "",
                    }}
                    type="natural"
                    dataKey="pv"
                    stroke="#2F4F4F"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    animationDuration={300}
                    />
                </AreaChart>
                </ResponsiveContainer>
            </div>  
            <div className="metrix__bottom__area">
                <span>View Occupancy History</span>
                <TfiArrowRight className='areachart__icon'/>
            </div> 
        </div>
    );
};

export default HotelMetrix;

  