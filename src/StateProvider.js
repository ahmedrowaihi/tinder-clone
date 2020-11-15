/// Setup data layer

import React, { createContext, useReducer, useContext } from "react";

// THIS IS THE DATA LAYER
// createContext
export const StateContext = createContext();

// Build A Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  // useReducer HERE!
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside a component
// useContext
export const useStateValue = () => useContext(StateContext);
