import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import { connect } from "react-redux";
import Modal from "./components/modal";
// import Modal from "./components/modal";

function App() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTodo, setActiveTodo] = useState(null);

  const handleGetData = () => {
    const url =
      "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log("data :", response.data);
      })
      .catch((e) => console.error(e.message));
  };

  const handleSortingDate = (array, sortBy) => {
    //it will sorting date with default sorting using asc
    array?.createdAt?.sort(function (a, b) {
      if (sortBy === "desc") return new Date(b.date) + new Date(a.date);
      else return new Date(b.date) - new Date(a.date);
    });
  };

  const renderTable = (title, status) => {
    let count = 0;
    status === 0
      ? handleSortingDate(data, "asc")
      : handleSortingDate(data, "desc");
    return (
      <div>
        <h3 className="text-center">{title}</h3>
        <table className="table">
          <thead>
            <tr>
              <th className="col" style={{ width: "10%" }}>
                No.
              </th>
              <th className="col" style={{ width: "60%" }}>
                Title
              </th>
              <th className="col" style={{ width: "30%" }}>
                Created at
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((todo, i) => {
              if (todo.status === status) {
                count++;
                return (
                  <>
                    <tr
                      key={i}
                      onClick={() => {
                        setShowModal(true);
                        setActiveTodo(todo);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <th>{count}</th>
                      <td>{todo.title}</td>
                      <td>{todo.createdAt}</td>
                    </tr>
                  </>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-center">TODO LIST</h1>
      <div className="all-center">
        <button onClick={handleGetData}>initialize data</button>
      </div>
      <div className="row m-0 p-0">
        <div className="col-md-6">{renderTable("BELUM SELESAI", 0)}</div>
        <div className="col-md-6">{renderTable("SUDAH SELESAI", 1)}</div>
      </div>
      <Modal
        title={activeTodo?.title}
        description={activeTodo?.description}
        status={activeTodo?.status}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
