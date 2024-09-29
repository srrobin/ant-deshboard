/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import HeaderTop from '../../components/HeaderTop';
import {  Layout, theme} from 'antd';
const { Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {  borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout  className="main-layout">
      <Sidebar collapsed={collapsed} setCollapsed= {setCollapsed}/>
      <Layout style={{zIndex:"1"}}>
        <HeaderTop collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            backgroundImage: "linear-gradient(137deg, #CFDCEA, #DAE4DF, #E8EFDE)",
            borderRadius: borderRadiusLG,
          }}
        >
         {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;