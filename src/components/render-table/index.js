import React from "react";
import "./style.css";
import { handleSortingDate } from "../../utils";

const RenderTable = ({ datas, title, status, onClickTR }) => {
  const filteredDatas = datas?.filter((x) => x.status === status);
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
          {filteredDatas?.map((data, i) => {
            return (
              <>
                <tr
                  className="table-row"
                  key={i}
                  onClick={() => onClickTR(data) ?? null}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <th>{i + 1}</th>
                  <td>{data.title}</td>
                  <td>{data.createdAt}</td>
                </tr>
              </>
            );
          })}
          {filteredDatas?.length === 0 || !filteredDatas ? (
            <tr>
              <td colSpan="3" className="text-center">
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
