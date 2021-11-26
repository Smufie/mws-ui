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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faThermometerHalf,
  faWind,
  faTint,
  faHome,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

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
          <Button onClick={toggleDrawer(false)} component={Link} to="/">
            <ListItemIcon>
              <FontAwesomeIcon icon={faHome} size="3x" color="white" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="common.white">Home</Typography>
            </ListItemText>
          </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Button
            onClick={toggleDrawer(false)}
            component={Link}
            to="/temperatureInfo"
          >
            <ListItemIcon>
              <FontAwesomeIcon
                icon={faThermometerHalf}
                size="3x"
                color="white"
              />
            </ListItemIcon>
            <ListItemText>
              <Typography color="common.white">Temperature Details</Typography>
            </ListItemText>
          </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Button
            onClick={toggleDrawer(false)}
            component={Link}
            to="/airPressureInfo"
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={faWind} size="3x" color="white" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="common.white">Air Pressure Details</Typography>
            </ListItemText>
          </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Button
            onClick={toggleDrawer(false)}
            component={Link}
            to="/airHumidityInfo"
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={faTint} size="3x" color="white" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="common.white">Air Humidity Details</Typography>
            </ListItemText>
          </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Button
            onClick={toggleDrawer(false)}
            component={Link}
            to="/airQualityInfo"
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={faCloud} size="3x" color="white" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="common.white">Air Quality Details</Typography>
            </ListItemText>
          </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Button onClick={toggleDrawer(false)} component={Link} to="/info">
            <ListItemIcon>
              <FontAwesomeIcon icon={faInfo} size="3x" color="white" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="common.white">About</Typography>
            </ListItemText>
          </Button>
        </ListItem>
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
          <Grid item xs={4} md={5}></Grid>
          <Grid item xs={2}>
            <Typography align="right" id="watch" color="common.white" />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
