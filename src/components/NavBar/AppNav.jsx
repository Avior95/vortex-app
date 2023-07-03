import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DrawerListComponent from "./DrawerListComponent";
import { Box, Button } from "@mui/material";
import { Main, AppBar, DrawerHeader } from "../componentsStyled/NavStyled";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
//  PersonOutlineIcon imports
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const drawerWidth = 240;
const settings = ["Login", "Sign Up"];

const PersistentDrawerLeft = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        backgroundColor: "white",
        zIndex: 100,
        height: 56,
      }}
    >
      <Toolbar>
        {/* Drawer icon */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="body1"
            component="h1"
            color="initial"
            fontWeight={700}
            fontSize={"1rem"}
          >
            EVERLANE
          </Typography>
        </Link>
        {/* SearchIcon */}
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            ml: 2,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="search"
            edge="start"
            sx={{ mr: 2, color: "black", display: { xs: "flex", md: "block" } }}
          >
            <SearchIcon />
          </IconButton>
          {/* ShoppingCartIcon*/}
          <IconButton
            color="inherit"
            aria-label="search"
            edge="start"
            sx={{ mr: 2, color: "black", display: { xs: "flex", md: "block" } }}
          >
            <ShoppingCartIcon />
          </IconButton>
          {/* PersonOutlineIcon Box */}

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              color="inherit"
              aria-label="search"
              edge="start"
              sx={{ color: "black" }}
              onClick={handleOpenUserMenu}
            >
              <PersonOutlineIcon sx={{ p: 0 }}></PersonOutlineIcon>
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <DrawerListComponent />
        <Divider />
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          {["Login", "Sign Up"].map((text) => (
            <Button
              sx={{
                width: "50%",
                marginTop: 2,
                borderRadius: 2,
                backgroundColor: "#4d4d4d",
              }}
              variant="contained"
              color="primary"
              key={text}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </AppBar>
  );
};

export default PersistentDrawerLeft;
