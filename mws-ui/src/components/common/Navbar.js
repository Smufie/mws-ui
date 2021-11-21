import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    setState({ ...state, ["left"]: open });
  };

  const list = () => (
    <Box>
      <List>
        <ListItem>
          <Button component={Link} to="/temperatureInfo">
            <ListItemIcon></ListItemIcon>
            <ListItemText> Temperature Details</ListItemText>
          </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Button component={Link} to="/airPressureInfo">
            <ListItemIcon></ListItemIcon>
            <ListItemText> Air Pressure Details</ListItemText>
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" style={{ background: "#141e30" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon onClick={toggleDrawer(true)} />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
        <Button component={Link} to="/">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="common.white"
          >
            Mobile Weather Station
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
