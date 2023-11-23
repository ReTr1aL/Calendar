import * as calendarActions from "../../actions/calendarActions/constants";

const initialState = {
  events: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case calendarActions.GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case calendarActions.ADD_EVENT:
      return {
        ...state,
        events: [
          ...state.events,
          { ...action.payload, id: state.events.length + 1 },
        ],
      };
    case calendarActions.DELETE_EVENT:
      return {
        ...state,
        events: [...state.events]
          .filter((item) => item.id !== action.payload.id)
          .map((elem, index) => ({ ...elem, id: index + 1 })),
      };
    case calendarActions.EDIT_EVENT:
      return {
        ...state,
        events: [...state.events].map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          } else {
            return action.payload;
          }
        }),
      };
    default:
      return state;
  }
};
