import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../../components/modal";
import RenderTable from "../../components/render-table";
import { useNavigate } from "react-router";
import { removeTask, editTask } from "../../actions";

const TodoList = (props) => {
  const [activeTodo, setActiveTodo] = useState(null);

  const navigate = useNavigate();

  return (
    <div>
      <>
        <h1 className="text-center">TODO LIST</h1>
        <div className="all-center mb-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/add-task")}
          >
            Add Task
          </button>
        </div>
        <div className="row m-0 p-0">
          <div className="col-md-6">
            <RenderTable
              title={"NEED TO BE DONE"}
              status={0}
              datas={props.task}
              onClickTR={setActiveTodo}
            />
          </div>
          <div className="col-md-6">
            <RenderTable
              title={"FINISHED"}
              status={1}
              datas={props.task}
              onClickTR={setActiveTodo}
            />
          </div>
        </div>
        <Modal
          data={activeTodo}
          datas={props.task}
          handleRemoveData={props.removeTask}
          handleChangeData={props.editTask}
        />
      </>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    task: state,
  };
};

const mapDispatchToProps = {
  removeTask,
  editTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
