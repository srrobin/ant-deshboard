/* eslint-disable react/prop-types */

import React from 'react';
import {  Layout } from 'antd';
import SideBarMenu from './SideBarMenu';
const { Sider } = Layout;
import { RxCross1 } from "react-icons/rx";

const Sidebar = ( {collapsed,setCollapsed, isMobile} ) => {
  const toggleButton = () => {
    setCollapsed(!collapsed);
  };
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
        background:"linear-gradient(137deg, rgb(207, 220, 234), rgb(218, 228, 223), rgb(232, 239, 222))",
        scrollbarWidth: 'none',
        scrollbarColor: 'unset',
      }}
    >
      <div className="demo-logo-vertical" >
        {isMobile &&  
          <RxCross1 className='demo_logo_icon' onClick={toggleButton}/>
        }
      </div>

    <SideBarMenu setCollapsed={setCollapsed} isMobile={isMobile} />
    </Sider>
  );
};

export default Sidebar;
