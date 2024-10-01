/* eslint-disable max-len */
import { AppstoreAddOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import React, { useState } from "react";
import "react-calendar-timeline/lib/Timeline.css";
import AddBookingDrawer from "../../components/AddBookingDrawer";
import TimelineFrontdesk from "../../components/TimeLineV1/TimelineFrontdesk";

const FrontDeskV1 = () => {
  const [addBookingDrawer, setAddBookingDrawer] = useState(false);
  const handleClick = () => {
    setAddBookingDrawer(true);
  };
  return (
    <>
      <div className="newDiv">
        <AddBookingDrawer
          addBookingDrawer={addBookingDrawer}
          setAddBookingDrawer={setAddBookingDrawer}
        />
      </div>
      <div className="frontdeskV3">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Card
              title="FRONT DESK"
              extra={
                <Button
                  type="primary"
                  icon={<AppstoreAddOutlined style={{ color: "#ddd" }} />}
                  onClick={handleClick}
                >
                  {" "}
                  ADD NEW BOOKING ...{" "}
                </Button>
              }
              bordered={false}
              style={
                {
                  //   width: 300,
                }
              }
              className="card__paddingless card__border__radiusless timeline__card__position fixed-card"
            >
              <TimelineFrontdesk />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FrontDeskV1;
