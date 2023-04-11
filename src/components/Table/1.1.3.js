const { TableContainer, Table } = require("@mui/material");
const { default: TableHeader } = require("./TableHead");
const { default: TableContent } = require("./TableContent");
const { default: DataTable } = require(".");

export const T1_1_3 = ({data}) => {
  const titles = [
    {
      id: 1,
      name: "Year",
      field : "year"

    },
    {
      id: 2,
      name: "Name  of teacher participated",
      field : "nameOfTeacher"
    },
    {
      id: 3,
      name: "Name of the body in which full time teacher participated",
      field:"nameOfBody"
    },
  ];

  return (
    <div className="w-full mt-3">
      { <DataTable titles={titles} data={data}  />}
    </div>
  );
};
