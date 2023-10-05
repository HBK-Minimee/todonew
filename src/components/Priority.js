import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const Priority = ({ handlePriority, id, priority }) => {
  const [value, setValue] = useState(priority==="none"?null:priority);
  const handleChange = (e) => {
    setValue(e.target.value);
    handlePriority(id, e.target.value);
  };
  return (
    <div>
      <FormControl>
      <InputLabel sx={{color:"#aaa",fontSize:"14px"}}>Priority</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        label="Priotity"
        sx={{
          svg: { color: "white" },
          outline: "none",
          width: "120px",
          fieldset: { borderColor:"#888" },
          input: { color: "white" },
          ".MuiSelect-select.MuiInputBase-input":{
            color:"white",
            fontSize:"12px"
          }
        }}
      >
        <MenuItem value="urgent" sx={{fontSize:"14px"}}>Urgent</MenuItem>
        <MenuItem value="important" sx={{fontSize:"14px"}}>Important</MenuItem>
        <MenuItem value="should_do" sx={{fontSize:"14px"}}>Should Do</MenuItem>
      </Select>
      </FormControl>

    </div>
  );
};

export default Priority;
