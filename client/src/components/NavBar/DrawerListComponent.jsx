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

const DrawerListComponent = () => {
  const [openList, setOpenList] = React.useState(true);

  const handleClick = () => {
    setOpenList(!openList);
  };
  const ItemCategoriesLinks = [
    {
      label: "Pants",
      url: ROUTES.ITEMPAGE,
    },
    {
      label: "Shoes",
      url: ROUTES.ITEMPAGE,
    },
    {
      label: "Shorts",
      url: ROUTES.ITEMPAGE,
    },
    {
      label: "Tess",
      url: ROUTES.ITEMPAGE,
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
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={"Apparel"} />
          {openList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList} timeout="auto" unmountOnExit>
          {ItemCategoriesLinks.map((Link) => (
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
