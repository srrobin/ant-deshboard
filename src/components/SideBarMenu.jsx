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



const SideBarMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
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
              key: '6',
              icon: <SiApostrophe style={{fontSize: "20px"}}/>,
              label: <Link to="/restaurant/pos">POS</Link>,
            },
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
