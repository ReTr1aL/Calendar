import React, { useEffect, useState } from "react";
import { Button, Calendar } from "antd";
import { useSelector } from "react-redux";
import { getListData } from "../helpers";
import EventPreviewModal from "./modal/EventPreviewModal";
import EventList from "./common/EventList";
import AddEventModal from "./modal/AddEventModal";
import { useLocation, useNavigate, useParams } from "react-router";
import { URLS_LOCAL } from "../routes/constants";
import DayModal from "./modal/DayModal";

const CalendarPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const eventList = useSelector((store) => store.calendar.events);
  const [eventInfo, setEventInfo] = useState(false);
  const [dayInfo, setDayInfo] = useState(false);
  const [addEvent, setAddEvent] = useState(false);
  const [currentDay, setCurrentDay] = useState(false);
  function handleCurrentEvent(e, item) {
    e.stopPropagation();
    navigate(URLS_LOCAL.EVENT + item.id);
  }
  function handleSelect(date, info) {
    if (info.source === "date") {
      setCurrentDay(date);
      navigate(URLS_LOCAL.DAY + date.$d);
    }
  }
  const cellRender = (current, info) => {
    if (info.type === "date")
      return (
        <EventList
          handler={handleCurrentEvent}
          listData={getListData(current, eventList)}
        />
      );
    return info.originNode;
  };
  useEffect(() => {
    if (params.id) {
      setEventInfo(true);
    } else {
      setEventInfo(false);
    }
    if (params.day) {
      setDayInfo(true);
    } else {
      setDayInfo(false);
    }
    if (location.pathname === URLS_LOCAL.ADD_EVENT) {
      setAddEvent(true);
    } else {
      setAddEvent(false);
    }
  }, [params]);
  return (
    <div>
      <div className={"my-3 flex justify-center"}>
        <Button onClick={() => navigate(URLS_LOCAL.ADD_EVENT)} type="primary">
          Add event
        </Button>
      </div>
      <Calendar onSelect={handleSelect} cellRender={cellRender} />
      {eventInfo && (
        <EventPreviewModal eventList={eventList} modal={eventInfo} />
      )}
      {addEvent && <AddEventModal modal={addEvent} />}
      {dayInfo && (
        <DayModal
          eventList={eventList}
          handleCurrentEvent={handleCurrentEvent}
          current={currentDay}
          modal={dayInfo}
        />
      )}
    </div>
  );
};

export default CalendarPage;
