/* eslint-disable react/prop-types */
import React from "react";

const StatusBox = ({ roomStatus }) => {
  return (
    <span
      className="status__box"
      style={{
        backgroundColor:
          roomStatus === 0 ? "#E07170" :
            roomStatus === 1 ? "#52c41a" :
              roomStatus === 2 ? "#2a899d" :
                roomStatus === 3 ? "#959595" :
                  roomStatus === 4 ? "#EE9E9C" :
                    roomStatus === 5 ? "#E8BE79" :
                      roomStatus === 6 ? "#fa8c16" :
                        roomStatus === 7 ? "#3B5B7E" : "",

      }}
    />
  );
};

export default StatusBox;
