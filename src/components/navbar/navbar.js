import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate,useLocation } from "react-router-dom";
import {useState,useEffect} from "react"
export default function Navbar() {
  const navigation = useNavigate();
  const location = useLocation();
  const [isLogin,setLoginState] = useState(localStorage?.getItem("isLogin")) 
  console.log(isLogin,"this is the loginb")
  useEffect(()=>{
    setLoginState(localStorage?.getItem("isLogin"))
  },[location])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{ background: `rgba(200,0,0,0.8)` }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fetch data
          </Typography>
          {(isLogin === null ||
            isLogin === 0) && (
              <Button color="inherit" onClick={() => navigation("/")}>
                Login
              </Button>
            )}
          {(isLogin !== null && isLogin == 1) && (
            <Button color="inherit" onClick={() => {
              localStorage.removeItem("isLogin")
              navigation("/")
              }}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
