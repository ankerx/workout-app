import React from "react";
import { Link } from "react-router-dom";

import ModeBtn from "./ModeBtn";

import {
  AppBar,
  Typography,
  CssBaseline,
  Button,
  Container,
  Toolbar,
  Box,
} from "@mui/material";

function Heading({ darkMode, setDarkMode }) {
  return (
    <CssBaseline>
      <Container>
        <AppBar color="primary">
          <Toolbar>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <Typography variant="h5">Workout app</Typography>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              sx={{ ml: "auto" }}
              component={Link}
              to="/createworkout"
            >
              Create workout
            </Button>
            <ModeBtn
              sx={{ ml: "auto" }}
              onChange={() => {
                setDarkMode(!darkMode);
              }}
            />
          </Toolbar>
        </AppBar>
        <Box sx={{ mt: 10, display: "flex", justifyContent: "center" }}></Box>
      </Container>
    </CssBaseline>
  );
}

export default Heading;
