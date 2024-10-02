/* eslint-disable react/prop-types */
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import {  Badge, Button, Layout } from "antd";
import React from "react";
import { AiFillBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderTop = ({collapsed, setCollapsed, isMobile}) => {

  const navigate = useNavigate();
  const toggleButton = () => {
    setCollapsed(!collapsed);
  };
   const frontdeskHandler = () => {
        navigate("/frontdesk")
   }
  return (
    <Header  className="header_top">
      {isMobile && 
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleButton}
        
      />
      }
      <div style={{ 
        display:"flex",
        alignItems:"center",
        gap:"20px",
        paddingRight:"16px"
      }}> 

       <Badge count={5}>
         <AiFillBell style={{ fontSize: "30px", color: "#2F4F4F" }} />
        </Badge>
      <Button   type="primary"  onClick={frontdeskHandler} style={{ background: "#2F4F4F" }} >
        FRONT DESK
      </Button>
      </div>
    </Header>
  );
};

export default HeaderTop;
