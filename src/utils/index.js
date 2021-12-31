import axios from "axios";

export const handleSortingDate = (array, sortBy) => {
  //it will sorting date with default sorting using asc
  array?.createdAt?.sort(function (a, b) {
    if (sortBy === "desc") return new Date(b.date) + new Date(a.date);
    else return new Date(b.date) - new Date(a.date);
  });
};

export const handleGetAPI = (url, handleData) => {
  axios
    .get(url)
    .then((response) => {
      handleData(response.data);
    })
    .catch((e) => console.error(e.message));
};
