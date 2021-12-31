import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TodoList from "./screens/todo-list";
import AddTask from "./screens/add-task";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { handleGetAPI, urlInit } from "./utils";
import { addTask } from "./actions";
import { connect } from "react-redux";

const App = (props) => {
  const [spinner, setSpinner] = React.useState(false);
  React.useEffect(() => {
    handleGetAPI(urlInit, setSpinner)
      .then((response) => {
        response.forEach((element) => {
          props.addTask(element);
        });
      })
      .catch((e) => console.error(e.message));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {!spinner ? (
        <div>
          <Router>
            <Routes>
              <Route
                path="/todo-list"
                element={<TodoList />}
              />
              <Route path="/add-task" element={<AddTask />} />
            </Routes>
          </Router>
        </div>
      ) : (
        <div className="all-center">
          <div className="spinner-border mt-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    task: state,
  };
};

const mapDispatchToProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
