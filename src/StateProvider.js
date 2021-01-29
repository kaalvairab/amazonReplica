// SETUP DATA LAYER

import React,{ useContext, createContext, useReducer } from "react";

// DATA LAYER
export const StateContext = createContext();

// PROVIDER
export const StateProvider = ({reducer, initialState, children})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>
{children}
</StateContext.Provider>
);

// USE IT INSIDE COMPONENT
export const useStateValue = () => useContext(StateContext);