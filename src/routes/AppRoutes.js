import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hotels from '../containers/overview/Hotels';
import Dashboard from '../containers/overview/Dashboard';
import NewBooking from '../containers/booking/NewBooking';
import BookingHistory from '../containers/booking/BookingHistory';
import CheckoutHistory from '../containers/booking/CheckoutHistory';
import Pos from '../containers/overview/Pos';
import SalesHistory from '../containers/restaurant/SalesHistory';
import Error404 from '../components/Error404';
import TypeOne from "../containers/dashboard/TypeOne"
import TypeTwo from "../containers/dashboard/TypeTwo"
import TypeThree from "../containers/dashboard/TypeThree"
import FrontDeskV1 from '../containers/frontdesk/FrontDeskV1';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>

                <Route path="/dashboard/typeone" element={<TypeOne/>}/>
                <Route path="/dashboard/typetwo" element={<TypeTwo/>}/>
                <Route path="/dashboard/typethree" element={<TypeThree/>}/>

                <Route path="/overview/dashboard" element={<Dashboard/>}/>
                <Route path="/overview/hotels" element={<Hotels/>}/>
                <Route path="/overview/pos" element={<Pos/>}/>


                <Route path="/booking/newbooking" element={<NewBooking />}/>
                <Route path="/booking/bookinghistory" element={<BookingHistory/>}/>
                <Route path="/booking/bookingcheckouthistory" element={<CheckoutHistory/>}/>
   
                <Route path="/restaurant/saleshistory" element={<SalesHistory/>}/>

                
                <Route path="/frontdesk" element={<FrontDeskV1/>}/>
          

            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default AppRoutes;