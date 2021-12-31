import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions";
import { useNavigate } from "react-router";

const AddTask = (props) => {
  const time = () => {
    const date =
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate();
    const time = new Date().toString().split(" ")[4].substring(0, 5);
    return date + " " + time;
  };
  const [formValue, setFormValue] = React.useState({
    status: 0,
    id: null,
    createdAt: time(),
  });
  const navigate = useNavigate();

  return (
    <div className="p-2">
      <h1>ADD YOUR NEW TASK</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Task
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Your task title"
          value={formValue?.title ?? null}
          onChange={(e) =>
            setFormValue({ ...formValue, title: e.target.value })
          }
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Description
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={formValue?.description ?? null}
          onChange={(e) =>
            setFormValue({ ...formValue, description: e.target.value })
          }
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          props.addTask(formValue);
          navigate("/todo-list");
        }}
        disabled={!formValue?.title || !formValue?.description}
      >
        SUBMIT
      </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
