import React from "react";
import { Badge } from "antd";
import PropTypes from "prop-types";

const EventList = ({ listData, handler }) => {
  return (
    <ul className="events">
      {listData.map((item) => (
        <li
          onClick={(e) => handler(e, item)}
          className={
            "flex flex-col bg-green-100 hover:bg-green-200 duration-300 px-1 rounded mb-2 overflow-hidden cursor-pointer"
          }
          key={item.id}
        >
          <Badge status={item.type} text={item.name} />
          <span className={"ms-3"}>{item.description}</span>
          <span className={"flex"}>
            <span className={"ms-3"}>
              {`${
                new Date(item.startDate).getHours() < 10
                  ? "0" + new Date(item.startDate).getHours()
                  : new Date(item.startDate).getHours()
              }:${
                new Date(item.startDate).getMinutes() < 10
                  ? "0" + new Date(item.startDate).getMinutes()
                  : new Date(item.startDate).getMinutes()
              } - ${
                new Date(item.endDate).getHours() < 10
                  ? "0" + new Date(item.endDate).getHours()
                  : new Date(item.endDate).getHours()
              }:${
                new Date(item.endDate).getMinutes() < 10
                  ? "0" + new Date(item.endDate).getMinutes()
                  : new Date(item.endDate).getMinutes()
              }`}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
};

EventList.propTypes = {
  listData: PropTypes.array,
  handler: PropTypes.func,
};

export default EventList;
