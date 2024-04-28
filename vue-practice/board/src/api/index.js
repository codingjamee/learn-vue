import axios from "axios";

export const getData = (url) => {
  return axios.get(`/api/${url}`);
};

export const deleteData = (id) => {
  return axios.delete(`/api/${id}`);
};

export const putData = ({ id, data }) => {
  return axios.put(`/api/${id}`, { ...data });
};
