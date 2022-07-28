import { createSlice } from "@reduxjs/toolkit";
import superheroesOperations from "./superheroOperations";

const initialState = {
  superheroes: [],
  currentSuperhero: {},
  status: null,
  error: null,
};

const superheroSlice = createSlice({
  name: "superheroes",
  initialState,
  extraReducers: {
    //list superheroes:
    [superheroesOperations.listSuperheroes.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [superheroesOperations.listSuperheroes.fulfilled]: (state, action) => {
      state.status = "resolved";
      console.log(action.payload.data);
      state.superheroes = action.payload.data;
    },
    [superheroesOperations.listSuperheroes.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = true;
    },
  },

  //add superhero:
  [superheroesOperations.addSuperhero.pending]: (state, action) => {
    state.status = "pending";
    state.error = null;
  },
  [superheroesOperations.addSuperhero.fulfilled]: (state, action) => {
    state.status = "resolved";
    console.log(action.payload.data);
  },
  [superheroesOperations.rejected]: (state, action) => {
    state.status = "rejected";
    state.error = true;
  },

  //delete superhero:
  [superheroesOperations.addSuperhero.pending]: (state, action) => {
    state.status = "pending";
    state.error = null;
  },
  [superheroesOperations.addSuperhero.pending]: (state, action) => {
    state.status = "resolved";
  
  },
  [superheroesOperations.addSuperhero.pending]: (state, action) => {
    state.status = "rejected";
    state.error = true;
  },
});


// listSuperheroes(state, action) {},
// addSuperhero(state, action) {},
// getSuperheroById(state, action) {},
// deleteSuperhero(state, action) {},
// updateSuperhero(state, action) {},
// addSuperheroImage(state, action) {},
// deleteSuperheroImage(state, action) {},

export default superheroSlice.reducer;
