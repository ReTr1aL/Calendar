import React, { useEffect } from "react";
import { Tabs } from "antd";
import ExternalLinks from "./ExternalLinks";
import InternalLinks from "./InternalLinks";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { URLS_LOCAL } from "../../../routes/constants";

const Company = () => {
  const data = useSelector((store) => store.company.company);
  const params = useParams();
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: "External links",
      children: <ExternalLinks />,
    },
    {
      key: "2",
      label: "Internal links",
      children: <InternalLinks />,
    },
  ];
  useEffect(() => {
    if (!data.find((item) => item.id === Number(params.company))) {
      navigate(URLS_LOCAL.COMPANY);
    }
  }, []);
  return (
    <div className={"post_wrapper"}>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default Company;
