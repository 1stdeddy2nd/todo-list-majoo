import React from "react";
import "./style.css";

const Modal = ({ data, datas, handleData }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {data?.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{data?.description}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-warning"
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              disabled={data?.status === 1}
              onClick={() => handleData(datas.filter(x => x.id !== data.id))}
              data-bs-dismiss="modal"
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
