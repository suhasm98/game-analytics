import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect({ handleChange, attribute }) {
  return (
    <FormControl fullWidth style={{ marginTop: "10px" }}>
      <InputLabel id="demo-simple-select-label">Attribute</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={attribute}
        label="Attribute"
        onChange={handleChange}
      >
        <MenuItem value={"dailyUsers"}>Users</MenuItem>
        <MenuItem value={"app"}>App</MenuItem>
      </Select>
    </FormControl>
  );
}
