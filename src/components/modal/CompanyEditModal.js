import React, { useEffect } from "react";
import { Button, DatePicker, Drawer, Form, Input } from "antd";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router";
import { URLS_LOCAL } from "../../routes/constants";
import { useDispatch, useSelector } from "react-redux";
import { EditCompany } from "../../store/actions/companyActions";
import { toast } from "react-toastify";
const { RangePicker } = DatePicker;

const CompanyEditModal = ({ modal }) => {
  const data = useSelector((store) => store.company.company);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const currentEvent = data.find((item) => String(item.id) === params.id) ?? {};
  const onFinish = (values) => {
    const newEvent = {
      company: values.name,
      phone: values.phone,
      address: values.address,
      id: Number(params.id),
    };
    dispatch(EditCompany(newEvent));
    toast.success("Company edited");
    navigate(URLS_LOCAL.COMPANY);
  };
  useEffect(() => {
    if (!data.find((item) => String(item.id) === params.id)) {
      navigate(URLS_LOCAL.COMPANY);
    }
  }, []);
  return (
    <Drawer
      placement={"left"}
      title="Company info"
      onClose={() => {
        navigate(URLS_LOCAL.COMPANY);
      }}
      open={modal}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Company name"
          name="name"
          initialValue={currentEvent.company}
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
          initialValue={currentEvent.phone}
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
          initialValue={currentEvent.address}
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
            className={"me-1"}
            onClick={() => navigate(-1)}
            type="default"
          >
            Back
          </Button>
          <Button type="primary" className={"ms-1"} htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

CompanyEditModal.propTypes = {
  modal: PropTypes.bool,
  eventList: PropTypes.array,
};
RangePicker.propTypes = { showTime: PropTypes.bool };

export default CompanyEditModal;
