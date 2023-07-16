import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DrawerListComponent from "./DrawerListComponent";
import { Box, Button, Dialog } from "@mui/material";
import { Main, AppBar, DrawerHeader } from "../componentsStyled/NavStyled";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Typography from "@mui/material/Typography";
import ROUTES from "../../routes/ROUTES";
import { useState } from "react";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";

const drawerWidth = 240;

const pages = [
  { label: "Sign In", component: SignInPage },
  { label: "Sign Up", component: SignUpPage },
];

const PersistentDrawerLeft = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleButtonClick = (page) => {
    setSelectedPage(page);
    setDialogOpen(true);
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

        <Link to={ROUTES.HOME} style={{ textDecoration: "none" }}>
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
          {pages.map((page) => (
            <Button
              sx={{
                width: "50%",
                marginTop: 2,
                borderRadius: 2,
                backgroundColor: "#4d4d4d",
              }}
              variant="contained"
              color="primary"
              key={page.label}
              onClick={() => handleButtonClick(page)}
            >
              {page.label}
            </Button>
          ))}
        </Box>
        <Dialog open={dialogOpen} onClose={handleDialogClose}>
          {selectedPage && <selectedPage.component />}
        </Dialog>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </AppBar>
  );
};

export default PersistentDrawerLeft;
