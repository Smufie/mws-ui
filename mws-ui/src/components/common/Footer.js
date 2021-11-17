import React from "react";
import { Container, Grid, Box, Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="Footer">
      <Box
        bgcolor="#141e30"
        color="white"
        px={{ xs: 1, sm: 2 }}
        py={{ xs: 1, sm: 2 }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" pt={{ xs: 1, sm: 1 }} pb={{ xs: 1, sm: 1 }}>
            Mobile Weather Station &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </div>
  );
}
export default Footer;
