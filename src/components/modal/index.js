import React, { useState } from "react";
import "./style.css";

const Modal = ({ data, datas, handleData }) => {
  const [disableEdit, setDisableEdit] = useState(true);
  const [changedArray, setChangedArray] = useState([]);

  const handleCheck = () => {
    const newArray = datas?.map((x) => {
      if (x.id === data.id) {
        if (x.status === 0) x.status = 1;
        else x.status = 0;
      }
      return x;
    });
    setChangedArray(newArray);
  };

  const handleChangeTitle = (e) => {
    const newArray = datas?.map((x) => {
      if (x.id === data.id) x.title = e.target.value;
      return x;
    });
    setChangedArray(newArray);
  };

  const handleChangeDesc = (e) => {
    const newArray = datas?.map((x) => {
      if (x.id === data.id) x.description = e.target.value;
      return x;
    });
    setChangedArray(newArray);
  };

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
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={data?.title}
                disabled={disableEdit}
                onChange={(e) => handleChangeTitle(e)}
              />
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>Deskripsi</h6>
            <p>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={data?.description}
                disabled={disableEdit}
                onChange={(e) => handleChangeDesc(e)}
              ></textarea>
            </p>
            <div>
              <h6>Status : </h6>
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="flexCheckCheckedDisabled"
                checked={data?.status === 1}
                disabled={disableEdit}
                onClick={handleCheck}
              />
              <label
                style={{ marginTop: "1px" }}
                className="form-check-label"
                htmlFor="flexCheckCheckedDisabled"
              >
                {data?.status === 0 ? "Belum Selesai" : "Sudah Selesai"}
              </label>
            </div>
          </div>
          <div className="modal-footer">
            {disableEdit === true ? (
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => setDisableEdit(false)}
              >
                EDIT
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  setDisableEdit(true);
                  handleData(changedArray);
                }}
                data-bs-dismiss="modal"
              >
                SAVE CHANGES
              </button>
            )}

            <button
              type="button"
              className="btn btn-danger"
              disabled={data?.status === 1}
              onClick={() => handleData(datas.filter((x) => x.id !== data.id))}
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
