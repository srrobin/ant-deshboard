/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import AppLayout from "../containers/app/AppLayout";


export default function PrivateRoute({ children }) {
  

  return  (
    <AppLayout>{children}</AppLayout>
  ) 
}
