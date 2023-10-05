import { Box, Typography } from "@mui/material";
import React from "react";

const Welcome = () => {
  return (
    <Box sx={{display:"flex",flexGrow:1,backgroundColor:"#222222"}}>
      <Box sx={{width:"50%",display:"flex",flexDirection:"column",justifyContent:"center",pl:12}}>
          <Typography variant="h2" sx={{marginBottom:3,color:"white"}}>Welcome to Todo App</Typography>
          <Typography variant="h5" sx={{color:"white"}}>Create ToDo lists with ease</Typography>
      </Box>
      <Box sx={{width:"50%",backgroundImage:`url("todo.png")`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>

      </Box>
    </Box>
  );
};

export default Welcome;
