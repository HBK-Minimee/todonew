import React from "react";
import "./App.css";
import MainTodo from "./components/MainTodo";
import Navbar from "./components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import Welcome from "./components/Welcome";
import { Box, CircularProgress } from "@mui/material";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading)
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#222222"
        }}
      >
        <CircularProgress />
      </Box>
    );
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      {isAuthenticated ? <MainTodo /> : <Welcome />}
    </Box>
  );
};

export default App;
