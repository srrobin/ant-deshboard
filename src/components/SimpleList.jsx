import { Avatar, List, Tag } from "antd";
import React from "react";

// Sample data
const data = [
  {
    title: "María del Carmen",
    details:"We supply a series of design principles",
    profit: "100000 tk",
  },
  {
    title: "Sofía	Valentina",
    details:"We supply a series of design principles",
    profit: "120000 tk",
  },
  {
    title: "Mía	Danna",
    details:"We supply a series of design principles",
    profit: "12000 tk",
  },
  {
    title: "Fatemeh	Zahra",
    details:"We supply a series of design principles",
    profit: "199000 tk",
  },
  {
    title: "Mohamed AbdullahAnt",
    details:"We supply a series of design principles",
    profit: "345000 tk",
  },
];

const SimpleList = () => {
  return (
    <div className="simple__list">
      <div className="title">Authors Profit</div>
      <List
        itemLayout="horizontal"
          size="small"
        dataSource={data}
        renderItem={(item) => {
          const profitValue = parseInt(item.profit.replace(' tk', ''));

          let color;
          if (profitValue > 100000) {
            color = '#184D47';
          } else if (profitValue === 100000) {
            color = '#FF9300';
          } else {
            color = '#AC0C0C';
          }

          return (
            <List.Item size="small">
              <List.Item.Meta
                
                avatar={
                  <Avatar
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoeu7KFWJ9xHj_5IeJX1Dh1ujeWd62T1I5A&s"
                  />
                }
                title={<div style={{fontWeight: "600"}}>{item.title}</div>}
                description={item.details}
              />
              <div>
                <Tag color={color}>
                  {item.profit}
                </Tag>
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default SimpleList;
