import React, { useEffect, useState } from "react";
import { Button, DatePicker, Drawer, Form, Input, Select } from "antd";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router";
import { URLS_LOCAL } from "../../routes/constants";
import { useDispatch } from "react-redux";
import DeleteModal from "./DeleteModal";
import { DeleteEvent, EditEvent } from "../../store/actions/calendarActions";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

const EventPreviewModal = ({ modal, eventList }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const currentEvent =
    eventList.find((item) => String(item.id) === params.id) ?? {};
  const [deleteModal, setDeleteModal] = useState(false);
  const onFinish = (values) => {
    const newEvent = {
      type: values.type ?? "success",
      name: values.name,
      id: currentEvent.id,
      startDate: new Date(values.date[0].$d).toISOString(),
      endDate: new Date(values.date[1].$d).toISOString(),
      description: values.description ?? "",
    };
    dispatch(EditEvent(newEvent));
    navigate(URLS_LOCAL.CALENDAR);
  };
  function handleDelete() {
    setDeleteModal(false);
    dispatch(DeleteEvent(currentEvent));
    navigate(URLS_LOCAL.CALENDAR);
  }

  useEffect(() => {
    if (!eventList.find((item) => String(item.id) === params.id)) {
      navigate(URLS_LOCAL.CALENDAR);
    }
  }, []);
  return (
    <Drawer
      placement={"left"}
      title="Event info"
      onClose={() => {
        navigate(URLS_LOCAL.CALENDAR);
      }}
      open={modal}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          initialValue={currentEvent.name}
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
          initialValue={[
            dayjs(currentEvent.startDate),
            dayjs(currentEvent.endDate),
          ]}
          name={"date"}
          label="Start date"
        >
          <RangePicker showTime />
        </Form.Item>
        <Form.Item
          initialValue={currentEvent.type}
          name={"type"}
          label="Priority"
        >
          <Select
            options={[
              { value: "success", label: "Low priority" },
              { value: "warning", label: "High priority" },
              { value: "error", label: "Critical" },
            ]}
          />
        </Form.Item>
        <Form.Item
          initialValue={currentEvent.description}
          name={"description"}
          label="Description"
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item className={"flex justify-end mt-3"}>
          <Button
            className={"me-1"}
            onClick={() => navigate(-1)}
            type="default"
          >
            Back
          </Button>
          <Button type="primary" danger onClick={() => setDeleteModal(true)}>
            Delete
          </Button>
          <Button type="primary" className={"ms-1"} htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
      {deleteModal && (
        <DeleteModal
          setModal={setDeleteModal}
          modal={deleteModal}
          handleSubmit={handleDelete}
        />
      )}
    </Drawer>
  );
};

EventPreviewModal.propTypes = {
  modal: PropTypes.bool,
  eventList: PropTypes.array,
};
RangePicker.propTypes = { showTime: PropTypes.bool };

export default EventPreviewModal;
