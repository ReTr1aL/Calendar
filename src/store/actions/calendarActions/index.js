import * as calendarActions from "./constants";

export const GetEvents = (data) => {
  return {
    type: calendarActions.GET_EVENTS,
    payload: data,
  };
};
export const AddEvent = (data) => {
  return {
    type: calendarActions.ADD_EVENT,
    payload: data,
  };
};
export const DeleteEvent = (data) => {
  return {
    type: calendarActions.DELETE_EVENT,
    payload: data,
  };
};
export const EditEvent = (data) => {
  return {
    type: calendarActions.EDIT_EVENT,
    payload: data,
  };
};
