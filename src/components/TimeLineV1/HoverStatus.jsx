/* eslint-disable react/prop-types */
import React from "react";

const HoverStatus = ({ status }) => {
  let statusText;
  let backgroundColor;
  let textColor;

  if (status === 0) {
    statusText = "Inactive";
    backgroundColor = "#C6D2D5";
    textColor = "#fff";
  } else if (status === 1) {
    statusText = "Active";
    backgroundColor = "#52c41a";
    textColor = "#fff";
  } else if (status === 2) {
    statusText = "Check In";
    backgroundColor = "#2a899d";
    textColor = "#fff";
  } else if (status === 3) {
    statusText = "Check Out";
    backgroundColor = "#959595";
    textColor = "#fff";
  } else if (status === 4) {
    statusText = "Abandoned";
    backgroundColor = "#EE9E9C";
    textColor = "#fff";
  } else if (status === 5) {
    statusText = "Cancelled";
    backgroundColor = "#E07170";
    textColor = "#fff";
  } else if (status === 6) {
    statusText = "Occupied";
    backgroundColor = "#fa8c16";
    textColor = "#fff";
  } else {
    statusText = "Reserved";
    backgroundColor = "#3B5B7E";
    textColor = "#fff";
  }

  return (
    <span className="status__info" style={{ background: backgroundColor, color: textColor }}>
      {statusText}
    </span>
  );
};

export default HoverStatus;
