import { GET } from "../constants";
import { GetEvents } from "../../store/actions/calendarActions";
import { toast } from "react-toastify";
import { Request } from "../axios";

export const GetEventsRequest = () => {
  return (dispatch) => {
    Request(
      GET,
      "https://jsonplaceholder.typicode.com/todos",
      null,
      (res) => {
        dispatch(GetEvents(res.data));
      },
      (err) => {
        toast.error("Request failed");
      }
    );
  };
};
