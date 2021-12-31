import React, { useState } from "react";
import "./style.css";

const Modal = ({ data, datas, handleChangeData, handleRemoveData }) => {
  const [disableEdit, setDisableEdit] = useState(true);
  const [changedValue, setChangedValue] = useState(null);

  const handleCheck = () => {
    if (changedValue) {
      if (data?.status === 0) {
        setChangedValue({ ...changedValue, status: 1 });
      } else {
        setChangedValue({ ...changedValue, status: 0 });
      }
    } else {
      if (data?.status === 0) {
        setChangedValue({ ...data, status: 1 });
      } else {
        setChangedValue({ ...data, status: 0 });
      }
    }
  };

  const handleChangeTitle = (e) => {
    if (changedValue) {
      setChangedValue({ ...changedValue, title: e.target.value });
    } else {
      setChangedValue({ ...data, title: e.target.value });
    }
  };

  const handleChangeDesc = (e) => {
    if (changedValue) {
      setChangedValue({ ...changedValue, description: e.target.value });
    } else {
      setChangedValue({ ...data, description: e.target.value });
    }
  };

  const handleStatus = () => {
    if (changedValue) {
      return changedValue?.status === 0 ? "Belum Selesai" : "Sudah Selesai";
    } else return data?.status === 0 ? "Belum Selesai" : "Sudah Selesai";
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      // data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
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
                value={changedValue?.title ?? data?.title}
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
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={changedValue?.description ?? data?.description}
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
                checked={handleStatus() === "Sudah Selesai"}
                disabled={disableEdit}
                onClick={handleCheck}
              />
              <label
                style={{ marginTop: "1px" }}
                className="form-check-label"
                htmlFor="flexCheckCheckedDisabled"
              >
                {handleStatus()}
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
                  handleChangeData(changedValue);
                  console.log(changedValue);
                  setChangedValue(null);
                }}
                data-bs-dismiss="modal"
              >
                SAVE CHANGES
              </button>
            )}

            <button
              type="button"
              className="btn btn-danger"
              disabled={data?.status === 1 || !disableEdit}
              onClick={() => handleRemoveData(data)}
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
