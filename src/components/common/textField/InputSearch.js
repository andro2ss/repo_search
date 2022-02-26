import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function InputSearch({
  value,
  setValue,
  setStatus,
  helperText,
  validationError,
}) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          error={validationError}
          helperText={helperText}
          id="input-with-sx"
          label="Search"
          variant="standard"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setStatus(0);
          }}
        />
      </Box>
    </Box>
  );
}
