/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Drawer, Space } from "antd";

const AddBookingDrawer = ({ addBookingDrawer, setAddBookingDrawer }) => {
  return (
    <Drawer
      title="ADD BOOKING"
      width="80%"
      placement="right"
      open={addBookingDrawer}
      onClose={() => setAddBookingDrawer(false)}
      extra={
        <Space>
          <Button onClick={() => setAddBookingDrawer(false)}>Cancel</Button>
          <Button type="primary" onClick={() => setAddBookingDrawer(false)}>
            OK
          </Button>
        </Space>
            }
      style={{ zIndex: "2001" }}
    >
      <h1>Hello</h1>
    </Drawer>
  );
};

export default AddBookingDrawer;