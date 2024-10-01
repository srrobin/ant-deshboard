/* eslint-disable react/prop-types */

import React from 'react';
import {  Layout } from 'antd';
import SideBarMenu from './SideBarMenu';
const { Sider } = Layout;


const Sidebar = ( {collapsed, isMobile} ) => {

  return (
    <Sider 
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null} 
      collapsible
      collapsed={collapsed}
      width={200}
      className='sidebar__area'
      style={{
        overflow: "auto",
        height: "100vh",
        position: isMobile ? "fixed" : "sticky",
        top: 0,
        left: 0,
        zIndex: 9999,
        background:"linear-gradient(137deg, rgb(207, 220, 234), rgb(218, 228, 223), rgb(232, 239, 222))"
      }}
    >
      <div className="demo-logo-vertical" />

      <SideBarMenu/>
    </Sider>
  );
};

export default Sidebar;
