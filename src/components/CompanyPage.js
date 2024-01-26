import React, { useEffect, useState } from "react";
import { Button } from "antd";
import CompanyEditModal from "./modal/CompanyEditModal";
import AddCompanyModal from "./modal/AddCompanyModal";
import { useLocation, useNavigate, useParams } from "react-router";
import { URLS_LOCAL } from "../routes/constants";
import TableComponent from "./table/TableComponent";

const CompanyPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [companyEdit, setCompanyInfo] = useState(false);
  const [addCompany, setAddCompany] = useState(false);
  useEffect(() => {
    if (params.id) {
      setCompanyInfo(true);
    } else {
      setCompanyInfo(false);
    }
    if (location.pathname === URLS_LOCAL.ADD_COMPANY) {
      setAddCompany(true);
    } else {
      setAddCompany(false);
    }
  }, [params]);
  return (
    <div>
      <div className={"my-3 flex justify-center"}>
        <Button onClick={() => navigate(URLS_LOCAL.ADD_COMPANY)} type="primary">
          Add company
        </Button>
      </div>
      <TableComponent />
      {companyEdit && <CompanyEditModal modal={companyEdit} />}
      {addCompany && <AddCompanyModal modal={addCompany} />}
    </div>
  );
};

export default CompanyPage;
