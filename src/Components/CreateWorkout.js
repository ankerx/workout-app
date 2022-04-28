import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import TableCell from "@mui/material/TableCell";
import { nanoid } from "nanoid";
import { GlobalContext } from "../Context/GlobalState";
import {
  TableContainer,
  TableHead,
  Table,
  Paper,
  TableBody,
} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

function CreateWorkout() {
  const initialValues = {
    exercise: "",
    sets: 0,
    reps: 0,
    weight: 0,
  };

  const [rowsData, setRowsData] = useState(initialValues);
  const { addWorkout } = useContext(GlobalContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    const newWorkout = {
      id: nanoid(),
      exercise: rowsData.exercise,
      sets: rowsData.sets,
      reps: rowsData.reps,
      weight: rowsData.weight,
    };

    addWorkout(newWorkout);
    navigate("/");
  };

  useEffect(() => {
    rowsData.exercise.length < 2 ? setError(true) : setError(false);
  }, [rowsData]);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setRowsData({
      ...rowsData,
      [name]: value,
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pl: 1,
          pr: 1,
        }}
      >
        <TableContainer component={Paper} sx={{ mt: 5, maxWidth: "550px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>Exercise</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Sets</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Reps</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Weigth</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  <TextField
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    sx={{ maxWidth: 110 }}
                    value={rowsData.exercise}
                    type="text"
                    variant="standard"
                    name="exercise"
                    inputProps={{ maxLength: 20 }}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    sx={{ maxWidth: 50 }}
                    value={rowsData.sets}
                    type="number"
                    variant="standard"
                    name="sets"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 2);
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 2);
                    }}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    sx={{ maxWidth: 50 }}
                    type="number"
                    variant="standard"
                    name="reps"
                    value={rowsData.reps}
                    inputProps={{ maxLength: 3 }}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 3);
                    }}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    sx={{ maxWidth: 50 }}
                    name="weight"
                    type="number"
                    variant="standard"
                    value={rowsData.weight}
                    inputProps={{ maxLength: 3 }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={handleSubmit}
          disabled={error}
        >
          Add exercise
        </Button>
        <Button
          component={Link}
          to={"/"}
          size="medium"
          variant="contained"
          color="error"
        >
          Cancel
        </Button>
      </Box>
    </>
  );
}

export default CreateWorkout;
