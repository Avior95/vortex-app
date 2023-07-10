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
  const apparelCategoriesLinks = [
    {
      label: "Pants",
      url: ROUTES.Apparel,
    },
    {
      label: "Shoes",
      url: ROUTES.Apparel,
    },
    {
      label: "Shorts",
      url: ROUTES.Apparel,
    },
    {
      label: "Tess",
      url: ROUTES.Apparel,
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
          {apparelCategoriesLinks.map((Link) => (
            <List component="div" disablePadding key={Link.label}>
              <ListItemButton sx={{ pl: 4 }}>
                <NavLink to={Link.url}>
                  <ListItemText primary={Link.label} />
                </NavLink>
              </ListItemButton>
            </List>
          ))}
        </Collapse>
      </List>
      <List>
        <ListItemButton>
          <ListItemText primary={"About"} />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary={"Help Center"} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default DrawerListComponent;
