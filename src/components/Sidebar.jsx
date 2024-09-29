/* eslint-disable react/prop-types */

import React from 'react';
import { Button, Layout } from 'antd';
import SideBarMenu from './SideBarMenu';
const { Sider } = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const Sidebar = ( {collapsed, setCollapsed} ) => {
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
      className='app__sidebar'
    >
      <div className="demo-logo-vertical" />
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleButton}
        className="toggleBtn"
      />
      <SideBarMenu/>
    </Sider>
  );
};

export default Sidebar;
