import axios from "axios";

export const getData = (url) => {
  return axios.get(`/api/${url}`);
};

export const deleteData = (id) => {
  return axios.delete(`/api/${id}`);
};
