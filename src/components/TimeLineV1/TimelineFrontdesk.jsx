import React, { useEffect, useState } from 'react';
import StatusIdentity from './StatusIdentity';
import moment from 'moment';
import FallbackImage from "../../assets/h1.jpg"
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { MdOutlineCenterFocusStrong } from "react-icons/md";
import Timeline, {
  TimelineHeaders,
  DateHeader,
  SidebarHeader,
  TimelineMarkers,
  TodayMarker,
  CustomMarker,
  CursorMarker
} from "react-calendar-timeline";
import axios from 'axios';
import { Button, Image, Popover } from 'antd';
import StatusBox from './StatusBox';
import { Link } from 'react-router-dom';
import HoverStatus from './HoverStatus';
const keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start_time",
  itemTimeEndKey: "end_time",
  // groupLabelKey: "title"
};

const TimelineFrontdesk = () => {
  const [gData, setGData] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [
    // hotelInfo, 
    setHotelInfo
  ] = useState();
  // const [selectedEvent, setSelectedEvent] = useState([]);
  // const [roomDetailsDrawer, setRoomdetailsDrawer] = useState(false);
  const [ setSelectedEvent] = useState([]);
  const [ setRoomdetailsDrawer] = useState(false);
  const [openCalenderData, setOpenCalenderData] = useState(false);
  console.log("🚀 ~ TimelineFrontdesk ~ openCalenderData:", openCalenderData)

  const [ visibleTimeStart,setVisibleTimeStart] = useState(moment().startOf("month").valueOf());
  const [ visibleTimeEnd, setVisibleTimeEnd ] = useState(moment().endOf("month").valueOf());


  useEffect(() => {
    axios.all([
      axios.get('http://localhost:5000/gData'),
      axios.get('http://localhost:5000/calenderData'),
      axios.get('http://localhost:5000/hotelInfo'),
    ])
    .then(axios.spread((gDataResponse, calenderDataResponse, hotelInfo) => {
      setGData(gDataResponse.data);
      setCalendarData(calenderDataResponse.data);
      setHotelInfo(hotelInfo.data);
    }))
    .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handleClick = () => {
    setOpenCalenderData(true);
  };
  const onPrevClick = () => {
    const zoom = visibleTimeEnd - visibleTimeStart;
    setVisibleTimeStart((prevStart) => prevStart - zoom);
    setVisibleTimeEnd((prevEnd) => prevEnd - zoom);
  };

  const onNextClick = () => {
    const zoom = visibleTimeEnd - visibleTimeStart;
    setVisibleTimeStart((prevStart) => prevStart + zoom);
    setVisibleTimeEnd((prevEnd) => prevEnd + zoom);
  };
  const onMonthClick = () => {
    setVisibleTimeStart(moment().startOf("month").valueOf());
    setVisibleTimeEnd(moment().endOf("month").valueOf());
  };
  const handleItemClick = (itemId) => {
    const newdata = calendarData.find((event) => event.id === itemId);
    setSelectedEvent(newdata);
    setRoomdetailsDrawer(true);
  };
  const getBackgroundColor = (status) => {
    switch (status) {
      case 0:
        return {
          status_name: "Inactive",
          color: "#fff",
          backgroundColor: "#C6D2D5",
        };
      case 1:
        return {
          status_name: "Active",
          color: "#fff",
          backgroundColor: "#52c41a",
        };
      case 2:
        return {
          status_name: "Check In",
          color: "#fff",
          backgroundColor: "#2a899d",
        };
      case 3:
        return {
          status_name: "Check Out",
          color: "#fff",
          backgroundColor: "#959595",

        };
      case 4:
        return {
          status_name: "Abandoned",
          color: "#fff",
          backgroundColor: "#EE9E9C",
        };
      case 5:
        return {
          status_name: "Cancelled",
          color: "#fff",
          backgroundColor: "#E07170",
        };
      case 6:
        return {
          status_name: "Occupied",
          color: "#fff",
          backgroundColor: "#fa8c16",
        };
      case 7:
        return {
          status_name: "Reserved",
          color: "#fff",
          backgroundColor: "#3B5B7E",
        };
      default:
        return {
          status_name: "",
          color: "",
          backgroundColor: "",
          border: ""
        };
    }
  };
  const itemRenderer = ({ item, itemContext, getItemProps }) => {
    const colors = getBackgroundColor(item.status);
    const backgroundColor = itemContext.selected ? "#23253C" : colors.backgroundColor;
    // const { border } = colors;
    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor,
            color: colors.color,
            border: "1px solid transparent",
            overflow: "hidden",
            backgroundImage: "url(\"https://www.transparenttextures.com/patterns/gplay.png\")"
          }
        })}
      >
        <div className="esl-schedule-item" style={{ textTransform: "capitalize", borderRadius: "10%", textAlign: "center", fontWeight: "500", fontSize: "14px" }}>
          <span>
            <span style={{ height: "10px", width: "10px", backgroundColor: `${colors.color}`, display: "inline-block", margin: "0 10px" }} />{item.title}
          </span>
        </div>
      </div>
    );
  };
  useEffect(() => {
    const updatedGroups = [];

    gData.forEach((item, index) => {
      const newGroup = { id: index * 100, title: item.type_name, isSectionHeader: true };
      const roomGroups = item.rooms.map((room) => ({
        id: room.id,
        room_name: room.room_name,
        title: room.room_number,
        room_size: room.room_size,
        maximum_guests: room.maximum_guests,
        num_of_bed: room.num_of_bed,
        num_of_bathroom: room.num_of_bathroom,
        num_of_kitchen: room.num_of_kitchen,
        num_of_balcony: room.num_of_balcony,
        num_of_sofa_bed: room.num_of_sofa_bed,
        base_price: room.base_price,
        check_in: room.check_in,
        check_out: room.check_out,
        room_image: room.room_image,
        status_color: room.status_color,
        status: room.status,
      }));

      updatedGroups.push(newGroup, ...roomGroups);
    });
    setGroups(updatedGroups);
  }, [gData]);

  const newGroups = groups
    .map((group) => {
      return {
        ...group,
        title: group.isSectionHeader ? (
          <div
            style={{ color: "#f9f9f9", fontWeight: 600, paddingLeft: "10px" }}
            className={`${
              group.isSectionHeader ? "esl-section-header" : "esl-equipment"
            }`}
          >
            {group.title}
          </div>
        ) : (
          <div
            className="hotel__name__status"
            style={{ paddingLeft: 10, color: " #23253c", fontWeight: 800 }}
          >
            <div className="hotel__status__area">
              <StatusBox roomStatus={group.status} statusColor={group.status_color} />
              <span role="presentation" onClick={handleClick} style={{ cursor: "pointer", color: " #5b5b78", fontSize: "13px", fontWeight: "600" }}>
                <Popover
                  trigger="hover"
                  content={
                    <div className="room__details__hover__area">
                      <div className="room__details__image">
                        <Image
                          width={250}
                          height={140.63}
                          src={group.room_image}
                          fallback={FallbackImage}
                        />
                      </div>
                      <div className="room__details__info">
                        <div className="room__details__no"><span className="room__details__heading">room no :</span>{group.title} </div>
                        <div className="room__details__name"><span className="room__details__heading">room name :</span>{group.room_name}</div>
                        <div className="room__details__bed"><span className="room__details__heading">room bed :</span>{group.num_of_bed}</div>
                        <div className="room__details__area"><span className="room__details__heading">room area :</span>{group.room_size}</div>
                        <div className="room__details__capacity"><span className="room__details__heading">room capacity :</span>{group.maximum_guests}</div>
                        <div className="room__details__price"><span className="room__details__heading">room price :</span>$ {group.base_price}</div>
                        <div className="room__details__status"><span className="room__details__heading">Cleaning required:</span> No</div>
                      </div>
                    </div>
                  }
                >
                  Room  {group.title}
                </Popover>
              </span>
            </div>
            {/* <span className="room__status">
              <Popover placement="right" content={content(group.id)} trigger="click" className="hotel__pop">
                <EllipsisOutlined />
              </Popover>
            </span> */}
            {/* <CalenderDetailsDrawer
              openCalenderData={openCalenderData}
              setOpenCalenderData={setOpenCalenderData}
            /> */}
          </div>
        )
      };
    });


    const buttonStyle = {
      background: "#23253c",
      color: "rgb(255, 255, 255)",
      lineHeight: "14px",
      fontWeight: "400",
      fontSize: ".94rem"
    };
  return (
    <>
      <div className="timeline__topProps" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span><StatusIdentity /></span>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", columnGap: "10px" }}>
          <Button style={buttonStyle} size="default" onClick={onPrevClick}><CaretLeftOutlined /></Button>
          <Button style={buttonStyle} size="default" onClick={onMonthClick}><MdOutlineCenterFocusStrong style={{ fontSize: "20px" }} /></Button>
          <Button style={buttonStyle} size="default" onClick={onNextClick}><CaretRightOutlined /></Button>
        </div>
      </div>

     <div className='timeline__area'>
     <Timeline
       groups={newGroups}
         sidebarWidth={250}
         sidebarContent={<div style={{ color: "#fff" }}>Above The Left</div>}
         keys={keys}
         canMove={false}
         canResize={false}
         canSelect
         itemsSorted
         itemTouchSendsClick={false}
         stackItems
         itemHeightRatio={0.95}
         useResizeHandle={false}
         showCursorLine
         visibleTimeStart={visibleTimeStart}
         visibleTimeEnd={visibleTimeEnd}
         itemRenderer={itemRenderer}
         lineHeight={30}
         fullUpdate
         items={
          calendarData.map((event) => ({
            id: event.id,
            group: event.room_id,
            start_time: moment(event.start_date),
            end_time: moment(event.end_date),
            status: event.status,
            title:
          <Popover
            trigger="hover"
            placement="right"
            content={
              <div className="customer__details__hover__area">
                <div className="main__guest__name">
                  <span className="guest__title">Main guest</span>
                  <p style={{ textTransform: "capitalize", color: "#089cd9" }}> {event.guest_name}</p>
                </div>
                <div className="customer__info">
                  <div className="customer__single__info">
                    <span className="info__title">Nights</span>
                    <span className="info__details">{event.nights}</span>
                  </div>
                  <div className="customer__single__info">
                    <span className="info__title">guests</span>
                    <span className="info__details">{event.guests}</span>
                  </div>
                  <div className="customer__single__info">
                    <span className="info__title">Children</span>
                    <span className="info__details">0</span>
                  </div>
                </div>
                <div className="status__area">
                  <div className="single__status">
                    <span className="status__title">Status</span>
                    <HoverStatus status={event.status} />
                  </div>
                  <div className="single__status">
                    <Link to={`/booking/bookingdetails/${event.booking_id}`}>
                      <Button type="link">Booking Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
                }
          >
            {event.guest_name}
          </Popover>,
          }))
          }
          onItemClick={handleItemClick}
        >
          <TimelineHeaders className="sticky">
          <SidebarHeader>
            {({ getRootProps }) => {
              return <div {...getRootProps()}  className="frontdesk__header__title">HOTEL-R</div>;
            }}
          </SidebarHeader>
          <DateHeader unit="primaryHeader" /> <DateHeader />
          <TimelineMarkers>
              <TodayMarker />
              <CustomMarker
                date={moment().startOf("month").valueOf() + 1000 * 60 * 60 * 2}
              />
              <CustomMarker date={moment().add(1, "month").valueOf()}>
                {({ styles }) => {
                  const newStyles = { ...styles, backgroundColor: "transparent !importent" };
                  return <div style={newStyles} />;
                }}
              </CustomMarker>
              <CursorMarker />
            </TimelineMarkers>
          </TimelineHeaders>
      </Timeline>
     </div>
     <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", columnGap: "10px", margin: "20px 0" }}>
        <Button style={buttonStyle} size="default" onClick={onPrevClick}><CaretLeftOutlined /></Button>
        <Button style={buttonStyle} size="default" onClick={onMonthClick}><MdOutlineCenterFocusStrong style={{ fontSize: "20px" }} /></Button>
        <Button style={buttonStyle} size="default" onClick={onNextClick}><CaretRightOutlined /></Button>
      </div>
    </>
  );
};

export default TimelineFrontdesk;