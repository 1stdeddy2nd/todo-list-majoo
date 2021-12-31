import axios from "axios";

export const handleSortingDate = (array, sortBy) => {
  //it will sorting date with default sorting using asc
  array?.createdAt?.sort(function (a, b) {
    if (sortBy === "desc") return new Date(b.date) + new Date(a.date);
    else return new Date(b.date) - new Date(a.date);
  });
};

export const handleGetAPI = async (url, setSpinner) => {
  setSpinner(true);
  return axios
    .get(url)
    .then((response) => {
      setSpinner(false);
      return response.data;
    })
    .catch((e) => console.error(e.message));
};

export const urlInit =
  "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";
