import React from 'react';
import { BrowserRouter } from "react-router-dom";

import MainConfig from "./containers/app/MainConfig"
import AppRoutes from "./routes/AppRoutes"
import PrivateRoute from './routes/PrivateRoute';
const App = () => {

  return (
    <BrowserRouter>
     <MainConfig>
        <PrivateRoute>
          <AppRoutes/>
        </PrivateRoute>
     </MainConfig>
    </BrowserRouter>
  );
};

export default App;