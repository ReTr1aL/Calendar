import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { URLS_LOCAL } from "../../routes/constants";
import { useNavigate } from "react-router";
import { DeleteCompany } from "../../store/actions/companyActions";
import DeleteModal from "../modal/DeleteModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TableComponent = () => {
  const columns = [
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Actions",
      dataIndex: "actions",
    },
  ];
  const data = useSelector((store) => store.company.company);
  const [list, setList] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(false);
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();
  const hasSelected = selectedRowKeys.length > 0;
  function handleDelete() {
    dispatch(DeleteCompany(deleteId));
    setDeleteModal(false);
    toast.success("Company deleted");
  }
  useEffect(() => {
    setList(
      [...data].map((item) => ({
        ...item,
        company: (
          <Link to={`${URLS_LOCAL.COMPANY_SINGLE}${item.id}`}>
            {item.company}
          </Link>
        ),
        key: item.id,
        actions: (
          <div className={"button_header"}>
            <Button
              onClick={() => {
                // setEditModal(true);
                navigate(`${URLS_LOCAL.COMPANY_EDIT}${item.id}`);
              }}
              type="primary"
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                setDeleteModal(true);
                setDeleteId(item.id);
              }}
              className={"ms-2"}
              danger
              type="primary"
            >
              Delete
            </Button>
          </div>
        ),
      }))
    );
  }, [data]);
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table columns={columns} dataSource={list} />
      {deleteModal && (
        <DeleteModal
          setModal={setDeleteModal}
          modal={deleteModal}
          handleSubmit={handleDelete}
        />
      )}
    </div>
  );
};

export default TableComponent;
