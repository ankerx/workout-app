import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import TableCell from "@mui/material/TableCell";
import { GlobalContext } from "../Context/GlobalState";
import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableBody,
} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
function EditWorkout() {
  const { editWorkout, workouts } = useContext(GlobalContext);
  const { id } = useParams();

  const [selectedWorkout, setSelectedWorkout] = useState({
    exercise: "",
    id: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const currentId = id;

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  useEffect(() => {
    const workoutId = currentId;
    const selectedWorkout = workouts.find(
      (workout) => workout.id === workoutId
    );

    setSelectedWorkout(selectedWorkout);
  }, [currentId, workouts]);

  const handleSubmit = () => {
    editWorkout(selectedWorkout);
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    selectedWorkout.exercise.length < 2 ? setError(true) : setError(false);
    setSelectedWorkout({
      ...selectedWorkout,
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
          p: 1,
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
                    sx={{ maxWidth: 110, textAlign: "center" }}
                    type="text"
                    variant="standard"
                    name="exercise"
                    inputProps={{ maxLength: 20 }}
                    value={selectedWorkout.exercise}
                    required
                  />
                </TableCell>

                <TableCell align="center">
                  <TextField
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    sx={{ maxWidth: 50 }}
                    type="number"
                    variant="standard"
                    name="sets"
                    value={selectedWorkout.sets}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    sx={{ maxWidth: 50 }}
                    type="number"
                    variant="standard"
                    name="reps"
                    value={selectedWorkout.reps}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    sx={{ maxWidth: 50 }}
                    name="weight"
                    type="number"
                    variant="standard"
                    value={selectedWorkout.weight}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <Button
          onClick={handleSubmit}
          size="small"
          variant="contained"
          color="success"
          disabled={error}
        >
          Save exercise
        </Button>
        <Button
          component={Link}
          to={"/"}
          size="small"
          variant="contained"
          color="error"
          sx={{}}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
}

export default EditWorkout;
