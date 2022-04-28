import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GlobalContext } from "../Context/GlobalState";
import { red, deepPurple } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
function WorkoutList() {
  const { workouts, removeWorkout } = useContext(GlobalContext);
  const matches = useMediaQuery("(min-width:508px)");

  const purple = deepPurple[500];
  // summary info of workouts
  const totalSets = workouts.reduce((acc, obj) => {
    return acc + parseInt(obj.sets);
  }, 0);
  const totalReps = workouts.reduce((acc, obj) => {
    return acc + parseInt(obj.reps);
  }, 0);
  const totalWeight = workouts.reduce((acc, obj) => {
    return acc + obj.reps * obj.sets * obj.weight;
  }, 0);
  const redColor = red[500];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        {totalWeight > 1000 && <Box>wow you are strong!</Box>}
        <TableContainer component={Paper} sx={{ mt: 5, maxWidth: "550px" }}>
          <Table>
            <TableHead sx={{ backgroundColor: purple }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Exercises</TableCell>
                <TableCell sx={{ color: "white" }}>Total sets</TableCell>
                <TableCell sx={{ color: "white" }}>Total reps</TableCell>
                <TableCell sx={{ color: "white" }}>Total weigth</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{workouts.length}</TableCell>
                <TableCell>{totalSets}</TableCell>
                <TableCell> {totalReps}</TableCell>
                <TableCell>{totalWeight} kg</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {workouts.length > 0 ? (
          <TableContainer component={Paper} sx={{ mt: 5, maxWidth: "550px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Exercise</TableCell>
                  <TableCell>Sets</TableCell>
                  <TableCell>Reps</TableCell>
                  <TableCell>Weigth</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workouts.map((el) => {
                  return (
                    <TableRow key={el.id}>
                      <TableCell>{el.exercise}</TableCell>
                      <TableCell>{el.sets}</TableCell>
                      <TableCell>{el.reps}</TableCell>
                      <TableCell>{el.weight} kg</TableCell>
                      <TableCell>
                        {matches ? (
                          <Button
                            component={Link}
                            to={`/editworkout/${el.id}`}
                            size="small"
                            variant="contained"
                            color="primary"
                          >
                            Edit
                          </Button>
                        ) : (
                          <Button
                            component={Link}
                            to={`/editworkout/${el.id}`}
                            size="small"
                            variant="contained"
                            color="primary"
                          >
                            <EditIcon />
                          </Button>
                        )}
                      </TableCell>
                      <TableCell>
                        {matches ? (
                          <Button
                            onClick={() => {
                              removeWorkout(el.id);
                            }}
                            size="small"
                            variant="contained"
                            color="error"
                          >
                            Delete
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              removeWorkout(el.id);
                            }}
                            size="small"
                            variant="contained"
                            color="error"
                          >
                            <ClearIcon />
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography color={redColor} sx={{ mt: 15, fontSize: "1.5rem" }}>
            Add your first workout!
          </Typography>
        )}
      </Box>
    </>
  );
}

export default WorkoutList;
