import axios from "axios";

export function Request(
  method,
  url,
  data = {},
  success = () => {},
  failure = () => {},
  params = {},
) {
  return axios({
    method,
    url,
    data,
    headers: {
      "Content-Type": "application/json",
    },
    params,
  })
    .then(success)
    .catch((err) => {
      failure(err);
    });
}