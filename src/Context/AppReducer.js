export default (state, action) => {
  switch (action.type) {
    case "REMOVE_WORKOUT":
      return {
        workouts: state.workouts.filter((workout) => {
          return workout.id !== action.payload;
        }),
      };
    case "ADD_WORKOUT":
      return {
        workouts: [...state.workouts, action.payload],
      };

    case "EDIT_WORKOUT":
      const updatedWorkout = action.payload;

      const updateWorkouts = state.workouts.map((workout) => {
        if (workout.id === updatedWorkout.id) {
          return updatedWorkout;
        }
        return workout;
      });
      return {
        workouts: updateWorkouts,
      };

    default:
      return state;
  }
};
