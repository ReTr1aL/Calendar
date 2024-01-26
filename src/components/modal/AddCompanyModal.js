import React from "react";
import { Button, DatePicker, Drawer, Form, Input } from "antd";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { AddCompany } from "../../store/actions/companyActions";
import { useNavigate } from "react-router";
import { URLS_LOCAL } from "../../routes/constants";
import { toast } from "react-toastify";
const { RangePicker } = DatePicker;

const AddCompanyModal = ({ modal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    const newEvent = {
      company: values.name,
      phone: values.phone,
      address: values.address,
    };
    dispatch(AddCompany(newEvent));
    toast.success("Company added");
    navigate(URLS_LOCAL.COMPANY);
  };
  return (
    <Drawer
      placement={"left"}
      title="Add company"
      onClose={() => navigate(URLS_LOCAL.COMPANY)}
      open={modal}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Company name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input company username!",
            },
          ]}
        >
          <Input placeholder={"Enter company name"} />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input type={"number"} placeholder={"Enter phone"} />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input company address!",
            },
          ]}
        >
          <Input placeholder={"Enter company address"} />
        </Form.Item>
        <Form.Item className={"flex justify-end mt-3"}>
          <Button
            onClick={() => navigate(-1)}
            className={"me-1"}
            type="default"
          >
            Back
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

AddCompanyModal.propTypes = {
  modal: PropTypes.bool,
};
RangePicker.propTypes = { showTime: PropTypes.bool };

export default AddCompanyModal;
