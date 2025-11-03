import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

const DataGridTable = ({ data = [] }) => {
  // Define columns (header and mapping)
  const columns = [
    { field: "id", headerName: "Id", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1.5 },
    {
      field: "amount",
      headerName: "Amount",
      type: Number,
      flex: 1,
      headerAlign: "right",
      align: "right",
    },
  ];
  return (
    <Box sx={{ height: 400, width: 700, m:8 }}>
      <Typography variant="h2" gutterBottom>
        User Data
      </Typography>

      <DataGrid
        columns={columns}
        rows={data}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataGridTable;
