import React from "react";
import { URLS_LOCAL } from "./constants";

const CalendarPage = React.lazy(() => import("../components/CalendarPage"));

export const ROUTES = [
  { path: URLS_LOCAL.CALENDAR, name: "Calendar", element: <CalendarPage /> },
  {
    path: URLS_LOCAL.EVENT + ":id",
    name: "Calendar event",
    element: <CalendarPage />,
  },
  {
    path: URLS_LOCAL.DAY + ":day",
    name: "Calendar days",
    element: <CalendarPage />,
  },
  {
    path: URLS_LOCAL.ADD_EVENT,
    name: "Add event",
    element: <CalendarPage />,
  },
];
