import React from "react";
import { AppBar, Box, Toolbar, Typography, Badge } from "@mui/material";
import LocalFireDepartmentTwoToneIcon from "@mui/icons-material/LocalFireDepartmentTwoTone";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "../../Styles/NavbarStyles.css";
import SearchIcon from '@mui/icons-material/Search';
import '../../Styles/SearchBar.css';
import { useSelector } from "react-redux";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  const items = useSelector ((state) => state.cart);
  
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              color={"goldenrod"}
              sx={{ flexGrow: 1 }}
            >
              <LocalFireDepartmentTwoToneIcon fontSize="medium" />
              Amazon
            </Typography>

            
            <Box className="input-wrapper">
              <SearchIcon className="search"/>
              <input placeholder="Type to Search"/>
              
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navbar-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/products"}>Products</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/cart"}> <Badge badgeContent={items.length} color="primary"><ShoppingCartOutlinedIcon fontSize="medium"  /></Badge></Link>
                </li>
                <li>
                  <Link to={"/login"}> <AccountCircleOutlinedIcon fontSize="medium"  /></Link>
                </li>
              </ul>
            </Box>
            
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
