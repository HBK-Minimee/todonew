import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          {isAuthenticated ? (
            <Button
              color="inherit"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              sx={{ fontSize: "14px", border: "2px white solid",backgroundColor:"white",color:"black","&:hover":{backgroundColor:"white"} }}
            >
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => loginWithRedirect()}
              sx={{ fontSize: "14px", border: "2px white solid",backgroundColor:"white",color:"black","&:hover":{backgroundColor:"white"} }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
  );
}
