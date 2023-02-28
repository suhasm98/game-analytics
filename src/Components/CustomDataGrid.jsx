import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "Date", width: 110 },
  {
    field: "country",
    headerName: "Country",
    width: 150
  },
  {
    field: "app",
    headerName: "App",
    width: 150
  },
  {
    field: "platform",
    headerName: "Platform",
    width: 110
  },
  {
    field: "adNetwork",
    headerName: "AdNetwork",
    width: 160
  },
  {
    field: "dailyUsers",
    headerName: "Daily Users",
    width: 160
  }
];

export default function CustomDataGrid({ data }) {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        marginTop: "30px",
        marginBottom: "20px"
      }}
    >
      <DataGrid rows={data} columns={columns} pageSize={10} />
    </Box>
  );
}
