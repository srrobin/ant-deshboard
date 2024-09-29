/* eslint-disable react/prop-types */
import { Tag } from "antd";
import React from "react";

const BlockCard = (props) => {
  const { count, color, status, icon, total } = props;
  return (
    <div className="block__card__area">
      <div className="block__card__count">{count}</div>
      <div className="block__card__status">
         <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
        <div className="block__card__icon" style={{color: `${color}`}}>{icon}</div>
      </div>
      <div className="block__card__total">
        crs / total:
        <span>{total}%</span>
      </div>
    </div>
  );
};

export default BlockCard;
