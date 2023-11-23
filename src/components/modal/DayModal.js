import React, { useEffect } from "react";
import { URLS_LOCAL } from "../../routes/constants";
import { Button, Drawer } from "antd";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router";
import { getListData } from "../../helpers";
import EventList from "../common/EventList";
import dayjs from "dayjs";

const DayModal = ({ eventList, modal, handleCurrentEvent }) => {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!Date.parse(params.day)) {
      navigate(URLS_LOCAL.CALENDAR);
    }
  }, []);
  return (
    <Drawer
      placement={"left"}
      title="Day info"
      onClose={() => {
        navigate(URLS_LOCAL.CALENDAR);
      }}
      open={modal}
    >
      {
        <>
          {getListData(
            !params.day || !Date.parse(params.day)
              ? {}
              : dayjs(new Date(params.day).toISOString()),
            eventList
          ).length === 0 ? (
            <div>{params.day && "No events"}</div>
          ) : (
            <EventList
              handler={handleCurrentEvent}
              listData={getListData(
                !params.day || !Date.parse(params.day)
                  ? {}
                  : dayjs(new Date(params.day).toISOString()),
                eventList
              )}
            />
          )}
          <div className={"flex justify-end mt-3"}>
            <Button
              onClick={() => navigate(-1)}
              className={"me-1"}
              type="default"
            >
              Back
            </Button>
            <Button
              onClick={() => navigate(URLS_LOCAL.ADD_EVENT)}
              type={"primary"}
            >
              Add event
            </Button>
          </div>
        </>
      }
    </Drawer>
  );
};

DayModal.propTypes = {
  modal: PropTypes.bool,
  eventList: PropTypes.array,
  handleCurrentEvent: PropTypes.func,
  current: PropTypes.any,
};

export default DayModal;
