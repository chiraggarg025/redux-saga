import axios from "axios";

export function requestGetUser() {
  return axios.request({
      method : 'get',
      url: "https://my-json-server.typicode.com/chiraggarg025/demo_server/user"
  });
}
