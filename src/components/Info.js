import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import jedrzej from "./Photos/jedrzej.jpg";
import blazej from "./Photos/blazej.jpg";
import janek from "./Photos/olszew.jpg";
import kus from "./Photos/kus.jpg";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

export default function Info() {
  return (
    <Container className="Margin">
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h3" align="center">
          General Information
        </Typography>
        <Grid item md={12}>
          <p style={{ fontSize: 20 }}>
            Our mobile weather station was designed in 2021 as a engineering
            thesis for Automatics and Robotics in Politechnika Poznańska. Its
            development concluded work of four students. Main idea of station is
            to be remote and wireless, by that we mean it doesnt need Wi-Fi and
            being plugged in in oreder to work. Whole implementation and
            construction begun in August 2021 and Finished on Jaunary 2022 with
            the defence of our thesis. Process of development was very vast and
            took a lot of effort to be finised. What we had to do in order to
            finish:{" "}
          </p>
          <ul>
            <li style={{ fontSize: 20 }}>
              As a team we discussed about project details.
            </li>
            <li style={{ fontSize: 20 }}>
              Analyze and purchase of necessary hardware elements like power
              supply or sensors.
            </li>
            <li style={{ fontSize: 20 }}>
              Establishment od database using NoSQL - MongoDB Atlas.
            </li>
            <li style={{ fontSize: 20 }}>
              Creating a backend Java API that manages data from station.
            </li>
            <li style={{ fontSize: 20 }}>Creating a React web application.</li>
            <li style={{ fontSize: 20 }}>
              Creating a PCB and connecting it to ESP-35.
            </li>
            <li style={{ fontSize: 20 }}>
              Projecting and creating a box for our station.
            </li>
            <li style={{ fontSize: 20 }}>
              Finalizing and building a protytpe.
            </li>
          </ul>
        </Grid>
        <Typography variant="h4" align="center" marginBottom={10}>
          Our team
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item sx={12} md={6} marginBottom={10}>
            <Card className="CardInfoPage">
              <CardHeader
                title={
                  <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                    Jędrzej Kosakowski
                  </Typography>
                }
              ></CardHeader>
              <CardMedia
                component="img"
                height="500"
                image={jedrzej}
                alt="Jedrzej"
              ></CardMedia>
              <CardContent>
                <Typography>
                  Created web app and manufactured case for Mobile Weather Station.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sx={12}  md={6} marginBottom={10}>
            <Card className="CardInfoPage">
              <CardHeader
                title={
                  <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                    Błażej Mumot
                  </Typography>
                }
              ></CardHeader>
              <CardMedia
                component="img"
                height="500"
                image={blazej}
                alt="Jedrzej"
              ></CardMedia>
              <CardContent>
                <Typography>
                  Created web app and manufactured case for Mobile Weather Station.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item sx={12}  md={6}>
            <Card className="CardInfoPage">
              <CardHeader
                title={
                  <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                    Jan Olszewski
                  </Typography>
                }
              ></CardHeader>
              <CardMedia
                component="img"
                height="500"
                image={janek}
                alt="Jedrzej"
              ></CardMedia>
              <CardContent>
                <Typography>
                  Created Java server and PCB. Also designed the power circuit for the MWS.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sx={12} md={6}>
            <Card className="CardInfoPage">
              <CardHeader
                title={
                  <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                    Michał Kuś
                  </Typography>
                }
              ></CardHeader>
              <CardMedia
                component="img"
                height="500"
                image={kus}
                alt="Jedrzej"
              ></CardMedia>
              <CardContent>
                <Typography>
                  Programmed ESP and configured the database. Also constructed electrical schema.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          align="center"
          marginTop={10}
          marginBottom={10}
        >
          Technologies that we used
        </Typography>
        <Grid item xs={12}>
        <ImageSlider slides={SliderData} />
        </Grid>
      </Grid>
    </Container>
  );
}
