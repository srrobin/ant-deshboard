/* eslint-disable react/prop-types */
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
// } from "@ant-design/icons";
import {  Badge, Button, Layout } from "antd";
import React from "react";
import { AiFillBell } from "react-icons/ai";
import { PiDesktopFill } from "react-icons/pi";

const { Header } = Layout;

const HeaderTop = () => {


  // const toggleButton = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <Header  className="header_top">
      {/* <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleButton}
        className="toggleBtn"
      /> */}
      <div style={{ 
        display:"flex",
        alignItems:"center",
        gap:"20px",
        paddingRight:"16px"
      }}> 

       <Badge count={5}>
         <AiFillBell style={{ fontSize: "30px" }} />
        </Badge>
      <Button type="primary" icon={<PiDesktopFill />} size="small">
        Frontdesk 
      </Button>
      </div>
    </Header>
  );
};

export default HeaderTop;
