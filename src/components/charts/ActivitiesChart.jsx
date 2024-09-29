/* eslint-disable react/prop-types */
import { Tooltip } from 'antd';
import React from 'react';
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';
const COLORS = ["#2F4F4F", "#C9D4D7"];

const data = [
  { name: "On Time ", value: 70 },
  { name: "Running Ahead ", value: 30 },
];

const CustomLabel = ({ viewBox, labelText }) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#3a3939"
        fontSize="20"
        fontWeight="600"
      >
        {labelText}
      </text>
    </g>
  );
};
const ActivitiesChart = () => {
    return (
        <div className='chart__area'>
        <div className="hotel__metrix__top__arrea">
            <div className="metrix__left">
            <div className="metirx__title">Check Ins</div>
            </div>
            <div className="metrix__right metrix__right__box">8 / 19</div>
        </div>
        <div style={{ width: "100%", height: 200 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="value" innerRadius={80} outerRadius={100}>
                    {data.map((entry, index) => {
                        return (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                        );
                    })}
                    <Label
                        content={<CustomLabel labelText="80.0 %" />}
                        position="center"
                    />
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="hotel__metrix__bottom__arrea">
            <div className="info__one">
            <span /> &nbsp;
            On Time : 70
            </div>
            <div className="info__two">
            <span /> &nbsp;
            Running Ahead : 30
            </div>
        </div>
    </div>
    );
};

export default ActivitiesChart;