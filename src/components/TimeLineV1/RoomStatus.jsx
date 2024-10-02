/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Radio, Space } from "antd";

const RoomStatus = ({ data, id, setGroups }) => {
  const [selectedValue, setSelectedValue] = useState({});
  console.log("data=========>>>>>", data);
  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
    // const patchData = {
    //   status: e.target.value
    // };
    // axiosInstance.patch(`frontdesk/updateroomstatus/${id}`, patchData)
    //   .then((response) => {
    //     // Handle successful response
    //     setGroups((prevState) => {
    //       const newDataAry = [...prevState];
    //       const idx = newDataAry?.findIndex((itm) => itm?.id === id);
    //       newDataAry[idx].status = e.target.value;
    //       return newDataAry;
    //     });
    //   })
    //   .catch((error) => {
    //     // Handle error
    //     console.log("PATCH request failed:", error);
    //   });
  };
  console.log("data", data);
  return (
    <Radio.Group buttonStyle="solid" onChange={handleRadioChange}>
      <Space direction="vertical">
        {data?.map((item) => (
          <Radio.Button key={item.id} className="linked_button" value={item.status} style={{ "--checked-color": `${item.status_color}`, cursor: "pointer" }}>
            {item.status_name}
          </Radio.Button>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default RoomStatus;

