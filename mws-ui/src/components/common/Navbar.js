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
import { Grid } from "@mui/material";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    setState({ ...state, ["left"]: open });
  };

  function callDateTime() {
    var currentDate = new Date().toDateString();
    var currentTime = new Date().toLocaleTimeString();
    document.getElementById(
      "watch"
    ).innerHTML = `${currentTime}  ${currentDate}`;
  }

  setInterval(function () {
    callDateTime();
  }, 1000);

  const list = () => (
    <Box
      sx={{
        width: 300,
        height: "100%",
        backgroundColor: "#141e30",
      }}
    >
      <Typography variant="h4" color="common.white" align="center">
        More Actions
      </Typography>
      <List>
        <Divider />
        <ListItem>
          <Button component={Link} to="/temperatureInfo">
            <ListItemIcon></ListItemIcon>
            <ListItemText>
              <Typography color="common.white">Temperature Details</Typography>
            </ListItemText>
          </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Button component={Link} to="/airPressureInfo">
            <ListItemIcon></ListItemIcon>
            <ListItemText>
              <Typography color="common.white">Air Pressure Details</Typography>
            </ListItemText>
          </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Button component={Link} to="/airHumidityInfo">
            <ListItemIcon></ListItemIcon>
            <ListItemText>
              <Typography color="common.white">Air Humidity Details</Typography>
            </ListItemText>
          </Button>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" style={{ background: "#141e30" }}>
      <Toolbar>
        <Grid container spacing={0}>
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
          <Grid item xs={4}>
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
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Typography align="right" id="watch" color="common.white" />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
