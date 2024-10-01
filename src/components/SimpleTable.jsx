import React from 'react';
import {  Avatar, Space, Table, Tag } from 'antd';
			
const columns = [
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
    render: (text) => <Space><Avatar src="https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png" /><span style={{fontWeight: "600"}}>{text}</span></Space>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <>{text} tk</>
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => {
      let color;
      if (status === 'approved') {
        color = 'green';
      } else if (status === 'pending') {
        color = 'warning';
      } else if (status === 'rejected') {
        color = 'volcano';
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
];
const data = [
  {
    key: '1',
    customer: 'John One',
    date: '23 may 4',
    amount: "54743",
    status: "approved",
  },
  {
    key: '2',
    customer: 'John Two',
    date: '23 may 2024',
    amount: "873635",
    status: "pending",
  },
  {
    key: '3',
    customer: 'John Three',
    date: '23 may 2024',
    amount: "98764",
    status: "pending",
  },
  {
    key: '4',
    customer: 'John Four',
    date: '23 may 2024',
    amount: "87464",
    status: "approved",
  },
  {
    key: '5',
    customer: 'John Five',
    date: '23 may 2024',
    amount: "65484",
    status: "rejected",
  },
  {
    key: '6',
    customer: 'John Six',
    date: '23 may 2024',
    amount: "12345",
    status: "rejected",
  },
];
const SimpleTable = () => {
    return (
        <div className='simple__table'>
            <div className='title'>
              latest transactions
            </div>
            <Table 
             scroll={{ x: "max-content" }}
            columns={columns} 
            dataSource={data}   
            pagination={false} 
            size="small"
            />
        </div>
    );
};

export default SimpleTable;