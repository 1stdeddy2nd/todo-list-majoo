import React from "react";
import "./style.css";
import { handleSortingDate } from "../../utils";

const RenderTable = ({ datas, title, status, onClickTR }) => {
  let count = 0;
  status === 0
    ? handleSortingDate(datas, "asc")
    : handleSortingDate(datas, "desc");
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
          {datas?.map((data, i) => {
            if (data.status === status) {
              count++;
              return (
                <>
                  <tr
                    className="table-row"
                    key={i}
                    onClick={() => onClickTR(data) ?? null}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <th>{count}</th>
                    <td>{data.title}</td>
                    <td>{data.createdAt}</td>
                  </tr>
                </>
              );
            } else {
              return null;
            }
          })}
          {count === 0 ? (
            <tr>
              <td colspan="3" className="text-center">
                Data tidak ada
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default RenderTable;
