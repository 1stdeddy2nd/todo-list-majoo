import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import axios from "axios";
import { connect } from "react-redux";
import Modal from "./components/modal";
import RenderTable from "./components/render-table";
import { handleGetAPI } from "./utils";

function App() {
  const [data, setData] = useState(null);
  const [activeTodo, setActiveTodo] = useState(null);
  const url =
  "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";

  return (
    <div>
      <h1 className="text-center">TODO LIST</h1>
      <div className="all-center">
        <button onClick={() => handleGetAPI(url, setData)}>initialize data</button>
      </div>
      <div className="row m-0 p-0">
        <div className="col-md-6">
          <RenderTable
            title={"BELUM SELESAI"}
            status={0}
            datas={data}
            onClickTR={setActiveTodo}
          />
        </div>
        <div className="col-md-6">
          <RenderTable
            title={"SUDAH SELESAI SELESAI"}
            status={1}
            datas={data}
            onClickTR={setActiveTodo}
          />
        </div>
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
