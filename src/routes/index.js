import React from "react";
import { URLS_LOCAL } from "./constants";

const CalendarPage = React.lazy(() => import("../components/CompanyPage"));
const Company = React.lazy(() => import("../components/pages/company/Company"));

export const ROUTES = [
  { path: URLS_LOCAL.COMPANY, name: "Company", element: <CalendarPage /> },
  {
    path: URLS_LOCAL.COMPANY_EDIT + ":id",
    name: "Company edit",
    element: <CalendarPage />,
  },
  {
    path: URLS_LOCAL.COMPANY_SINGLE + ":company",
    name: "Company post",
    element: <Company />,
  },
  {
    path: URLS_LOCAL.ADD_COMPANY,
    name: "Add company",
    element: <CalendarPage />,
  },
];
