import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ROUTES from "../../routes/ROUTES";
import NavLinkComponent from "./NavLinkComponent";

// const pages = ["Women", "Men", "About"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const pages = [
  {
    label: "Home",
    url: ROUTES.HOME,
  },
  {
    label: "about",
    url: ROUTES.ABOUT,
  },
];

const AppNav = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        zIndex: 100,
        height: 56,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: "none", md: "inline" } }}
          ></Typography>
          {/* main navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLinkComponent key={page.url} {...page} />
            ))}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          {/* SearchIcon */}
          <IconButton
            color="inherit"
            aria-label="search"
            edge="start"
            sx={{ mr: 2, color: "black", display: { xs: "flex", md: "block" } }}
          >
            <SearchIcon />
          </IconButton>
          {/* PersonOutlineIcon */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                color="inherit"
                aria-label="search"
                edge="start"
                sx={{ color: "black" }}
                onClick={handleOpenUserMenu}
              >
                <PersonOutlineIcon sx={{ p: 0 }}></PersonOutlineIcon>
              </IconButton>
            </Tooltip>
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

          {/* hamburger with menu */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppNav;
