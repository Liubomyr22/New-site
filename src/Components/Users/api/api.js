import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`todos?_page=${currentPage}&_limit=${pageSize}`)
    .then((response) => response.data);
};
