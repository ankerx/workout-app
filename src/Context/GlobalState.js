import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState = {
  workouts: [],
};

// create context

export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions

  const addWorkout = (workout) => {
    dispatch({
      type: "ADD_WORKOUT",
      payload: workout,
    });
  };

  const removeWorkout = (id) => {
    dispatch({
      type: "REMOVE_WORKOUT",
      payload: id,
    });
  };

  const editWorkout = (id) => {
    dispatch({
      type: "EDIT_WORKOUT",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        workouts: state.workouts,
        removeWorkout,
        addWorkout,
        editWorkout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
