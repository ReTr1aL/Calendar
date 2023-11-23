import React from "react";
import { Button, DatePicker, Drawer, Form, Input, Select } from "antd";
import PropTypes from "prop-types";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { AddEvent } from "../../store/actions/calendarActions";
import { useNavigate } from "react-router";
import { URLS_LOCAL } from "../../routes/constants";
const { RangePicker } = DatePicker;

const AddEventModal = ({ modal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    const newEvent = {
      type: values.type ?? "success",
      name: values.name,
      startDate: new Date(values.date[0].$d).toISOString(),
      endDate: new Date(values.date[1].$d).toISOString(),
      description: values.description ?? "",
    };
    dispatch(AddEvent(newEvent));
    navigate(URLS_LOCAL.CALENDAR);
  };
  return (
    <Drawer
      placement={"left"}
      title="Add event"
      onClose={() => navigate(URLS_LOCAL.CALENDAR)}
      open={modal}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder={"Enter event name"} />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input date!",
            },
          ]}
          name={"date"}
          label="Start date"
        >
          <RangePicker showTime />
        </Form.Item>
        <Form.Item initialValue={"success"} name={"type"} label="Priority">
          <Select
            options={[
              { value: "success", label: "Low priority" },
              { value: "warning", label: "High priority" },
              { value: "error", label: "Critical" },
            ]}
          />
        </Form.Item>
        <Form.Item name={"description"} label="Description">
          <TextArea rows={4} />
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

AddEventModal.propTypes = {
  modal: PropTypes.bool,
};
RangePicker.propTypes = { showTime: PropTypes.bool };

export default AddEventModal;
