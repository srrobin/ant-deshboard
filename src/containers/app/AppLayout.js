/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import HeaderTop from '../../components/HeaderTop';
import { Layout, theme } from 'antd';
const { Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // For tracking mobile view
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  // Handle window resize and check if the window width is less than 992px
  const handleResize = () => {
    if (window.innerWidth <= 992) {
      setIsMobile(true);
      setCollapsed(true); // Collapse sidebar on smaller screens
    } else {
      setIsMobile(false);
      setCollapsed(false); // Expand sidebar on larger screens
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout className="main-layout">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}  isMobile={isMobile}/>
      <Layout style={{ zIndex: "1" }}>
        <HeaderTop collapsed={collapsed} setCollapsed={setCollapsed}  isMobile= {isMobile}/>
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
