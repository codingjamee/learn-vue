import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com",
};

export const fetchLists = (url) => {
  return axios.get(`${config.baseUrl}${url}`);
};
