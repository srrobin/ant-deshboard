import { useQuery } from "@tanstack/react-query";
import React from "react";
import {fetchRoomStatus} from "../../utils/Axios"


const StatusIdentity = () => {
  const {data, isLoading ,isError,error} = useQuery({
    queryKey:["roomStatus"],
    queryFn: () => fetchRoomStatus()
})
console.log("🚀 ~ StatusIdentity ~ data:", data)
if(isLoading) return <div style={{color:"#fff"}}>Loading ... </div>
if(isError) return <div style={{color:"#fff"}}>{error.message}</div>

  return (

    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        columnGap: "10px",
        margin: "8px 0",
      }}
    >
      {data?.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            columnGap: "10px",
          }}
        >
          <div
            style={{
              background: `${item.status_color}`,
              height: "12px",
              width: "12px",
              borderTopRightRadius: "11px",
            }}
          />
          <div
            style={{
              textTransform: "uppercase",
              fontWeight: "400",
              color: "rgb(9, 68, 4)",
            }}
          >
            {item.status_name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusIdentity;
