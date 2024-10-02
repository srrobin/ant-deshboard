/* eslint-disable react/prop-types */
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { 
  PiNumberCircleOneDuotone ,
  PiNumberCircleTwoDuotone,
  PiNumberCircleThreeDuotone
} from "react-icons/pi";
import { 
  SiApostrophe, 
  SiBuymeacoffee
 } from "react-icons/si";
import { AiTwotoneDashboard } from "react-icons/ai";
import { LiaHotelSolid } from "react-icons/lia";
import { TbBrandBooking } from "react-icons/tb";



const SideBarMenu = ({setCollapsed,isMobile}) => {
 
  const handleMenuClick = () => {
    if(isMobile){
      setCollapsed(true)

    }
  }
  return (
    <Menu
      // theme="light"
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ 
        background:"linear-gradient(137deg, rgb(207, 220, 234), rgb(218, 228, 223), rgb(232, 239, 222))"
      }}
      onClick={handleMenuClick}
      items={[
        {
          key: 'g0',
          label: 'Dashboard',
          type: 'group',
          children: [
            {
              key: '/dashboard/typeone',
              icon: <PiNumberCircleOneDuotone  style={{fontSize: "20px"}}/>,
              label: <Link to="/dashboard/typeone">Type One</Link>,
            },
            {
              key: '/dashboard/typetwo',
              icon: <PiNumberCircleTwoDuotone style={{fontSize: "20px"}}/>,
              label: <Link to="/dashboard/typetwo">Type Two</Link>,
            },
            {
              key: '/dashboard/typethree',
              icon: <PiNumberCircleThreeDuotone style={{fontSize: "20px"}}/>,
              label: <Link to="/dashboard/typethree">Type Three</Link>,
            },
          ],
        },
        {
          key: 'g1',
          label: 'Overview',
          type: 'group',
          children: [
            {
              key: '/overview/dashboard',
              icon: <AiTwotoneDashboard   style={{fontSize: "20px"}}/>,
              label: <Link to="/overview/dashboard">Dashboard</Link>,
            },
            {
              key: '/overview/hotels',
              icon: <LiaHotelSolid   style={{fontSize: "20px"}}/>,
              label: <Link to="/overview/hotels">Hotels</Link>,
            },
            {
              key: '/overview/pos',
              icon: <SiApostrophe style={{fontSize: "20px"}}/>,
              label: <Link to="/overview/pos">POS</Link>,
            },
          ],
        },
        {
          key: 'g2',
          label: 'Booking',
          type: 'group',
          children: [
            {
              key: '3',
              icon: <TbBrandBooking  style={{fontSize: "20px"}}/>,
              label: <Link to="/booking/newbooking">New Booking</Link>,
            },
            {
              key: '4',
              icon: <TbBrandBooking  style={{fontSize: "20px"}}/>,
              label: <Link to="/booking/bookinghistory">Booking History</Link>,
            },
            {
              key: '5',
              icon: <TbBrandBooking  style={{fontSize: "20px"}}/>,
              label: <Link to="/booking/bookingcheckouthistory">Checkout History</Link>,
            },
          ],
        },
        {
          key: 'g3',
          label: 'Restaurant & Bar',
          type: 'group',
          children: [
            {
              key: '7',
              icon: <SiBuymeacoffee style={{fontSize: "20px"}}/>,
              label: <Link to="/restaurant/saleshistory">Sales History</Link>,
            },
          ],
        },
      ]}
    />
  );
};

export default SideBarMenu;
