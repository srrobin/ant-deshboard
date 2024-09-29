/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { ConfigProvider } from "antd";

const MainConfig = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#23253c"
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default MainConfig;
