import { createSlice } from "@reduxjs/toolkit";
import superheroesOperations from "./superheroOperations";

const initialState = {
  superheroes: [],
  currentSuperhero: {},
  totalPages: 0,
  page: 1,
  limit: 5,
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
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.superheroes = action.payload.data;
    },
    [superheroesOperations.listSuperheroes.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = true;
    },

    //add superhero:
    [superheroesOperations.addSuperhero.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [superheroesOperations.addSuperhero.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [superheroesOperations.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = true;
    },

    //delete superhero:
    [superheroesOperations.deleteSuperhero.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [superheroesOperations.deleteSuperhero.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [superheroesOperations.deleteSuperhero.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = true;
    },

    //get superhero by id:
    [superheroesOperations.getSuperheroById.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [superheroesOperations.getSuperheroById.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.currentSuperhero = action.payload.data;
    },
    [superheroesOperations.getSuperheroById.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = true;
    },

    //update superhero:
    [superheroesOperations.updateSuperhero.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [superheroesOperations.updateSuperhero.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.currentSuperhero = {};
    },
    [superheroesOperations.updateSuperhero.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = true;
    },

    //add image superhero:
    [superheroesOperations.addSuperheroImage.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [superheroesOperations.addSuperheroImage.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [superheroesOperations.addSuperheroImage.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = true;
    },

    //delete image superhero:
    [superheroesOperations.deleteSuperheroImage.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [superheroesOperations.deleteSuperheroImage.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [superheroesOperations.deleteSuperheroImage.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = true;
    },
  },
});

export default superheroSlice.reducer;
