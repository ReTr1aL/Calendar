import * as calendarActions from "./constants";

export const GetEvents = (data) => {
  return {
    type: calendarActions.GET_COMPANY,
    payload: data,
  };
};
export const AddCompany = (data) => {
  return {
    type: calendarActions.ADD_COMPANY,
    payload: data,
  };
};
export const DeleteCompany = (data) => {
  return {
    type: calendarActions.DELETE_COMPANY,
    payload: data,
  };
};
export const EditCompany = (data) => {
  return {
    type: calendarActions.EDIT_COMPANY,
    payload: data,
  };
};
