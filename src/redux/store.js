import { configureStore } from "@reduxjs/toolkit";
import { superheroReducer } from "./superheroes";

const store = configureStore({
  reducer: {
    superheroes: superheroReducer,
  },
});

export default store;
