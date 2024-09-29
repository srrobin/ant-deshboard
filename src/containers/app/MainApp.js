import React from 'react';
import AppLayout from './AppLayout';
import AppRoutes from '../../routes/AppRoutes';

const MainApp = () => {
    return (
        <AppLayout>
            <AppRoutes/>
        </AppLayout>
    );
};

export default MainApp;