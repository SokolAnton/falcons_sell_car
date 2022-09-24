import axios from "axios";

axios.defaults.baseURL = "https://developers.ria.com/auto";

export default {
  getBMW() {
    return axios.get(
      "/search?api_key=hjYEDL1qohKwtaBEjz3n3S9O3Ya2EFU3VaBtB3do&category_id=1&marka_id=9"
    );
  },
  getCarInfo(carNum) {
    return axios.get(
      "/info?api_key=hjYEDL1qohKwtaBEjz3n3S9O3Ya2EFU3VaBtB3do&auto_id=" + carNum
    );
  },
};
