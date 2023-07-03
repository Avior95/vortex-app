import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { Box } from "@mui/material";
// import ROUTES from "../../routes/ROUTES";

const DrawerListComponent = () => {
  const [openList, setOpenList] = React.useState(true);

  const handleClick = () => {
    setOpenList(!openList);
  };
  const apparelCategoriesLinks = [
    {
      label: "Pants",
    },
    {
      label: "Shoes",
    },
    {
      label: "Shorts",
    },
    {
      label: "Tess",
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
        {apparelCategoriesLinks.map((Link) => (
          <Collapse in={openList} timeout="auto" unmountOnExit key={Link.label}>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={Link.label} />
              </ListItemButton>
            </List>
          </Collapse>
        ))}
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
