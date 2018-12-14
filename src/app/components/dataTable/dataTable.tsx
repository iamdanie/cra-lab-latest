import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

type Props = {
  columns: Array<any>;
  data: Array<any>;
};

const DataTable = ({ columns, data }: Props) => {
  const tableOptions = {
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    gridAutoHeight: true,
    animateRows: true,
    pagination: true,
    paginationPageSize: 10
  };
  const dataOptions = {
    columnDefs: columns,
    rowData: data
  };
  const options = { ...dataOptions, ...tableOptions };
  return (
    <div
      className="ag-theme-balham"
      style={{
        width: '100%'
      }}
    >
      <AgGridReact {...options} />
    </div>
  );
};

export default DataTable;
