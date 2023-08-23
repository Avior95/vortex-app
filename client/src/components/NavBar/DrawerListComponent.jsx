import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import ROUTES from "../../routes/ROUTES";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const DrawerListComponent = () => {
  const [openList, setOpenList] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Man");

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
    setOpenList(true);
  };

  const MenCategoriesLinks = [
    {
      label: "Men's Pants",
      url: ROUTES.MEN_PANTS,
    },
    {
      label: "Men's Shoes",
      url: ROUTES.MEN_SHOES,
    },
    {
      label: "Men's Shorts",
      url: ROUTES.MEN_SHORTS,
    },
    {
      label: "Men's T-Shirts",
      url: ROUTES.MEN_TEES,
    },
  ];

  const WomenCategoriesLinks = [
    {
      label: "Women's Pants",
      url: ROUTES.WOMEN_PANTS,
    },
    {
      label: "Women's Shoes",
      url: ROUTES.WOMEN_SHOES,
    },
    {
      label: "Women's Shorts",
      url: ROUTES.WOMEN_SHORTS,
    },
    {
      label: "Women's T-Shirts",
      url: ROUTES.WOMEN_TEES,
    },
  ];
  return (
    <Box>
      <List
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {["Women", "Men"].map((text) => (
          <ListItem key={text}>
            <ListItemButton onClick={() => handleGenderClick(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItemButton onClick={() => setOpenList(!openList)}>
          <ListItemText primary={"Apparel"} />
          {openList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList} timeout="auto" unmountOnExit>
          {openList &&
            (selectedGender === "Men"
              ? MenCategoriesLinks
              : WomenCategoriesLinks
            ).map((Link) => (
              <List component="div" disablePadding key={Link.label}>
                <ListItemButton sx={{ pl: 4 }}>
                  <NavLink
                    to={Link.url}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemText primary={Link.label} />
                  </NavLink>
                </ListItemButton>
              </List>
            ))}
        </Collapse>
      </List>
      <List>
        <ListItemButton>
          <NavLink
            to={ROUTES.ABOUT}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary={"About"} />
          </NavLink>
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary={"Help Center"} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default DrawerListComponent;
