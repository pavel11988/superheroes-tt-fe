import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:4000";
const API_SUPERHEROES = "api/superheroes"

const listSuperheroes = createAsyncThunk(
  "superheroes/listSuperheroes",
  async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${API_SUPERHEROES}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const addSuperhero = createAsyncThunk(
  "superheroes/addSuperhero",
  async (newSupehero) => {
    try {
      await axios.post(`${BASE_URL}/${API_SUPERHEROES}`, newSupehero);
    } catch (error) {
      alert("Error adding superhero", error.message);
      throw error;
    }
  }
);

const deleteSuperhero = createAsyncThunk("superheroes/deleteSuperhero", async(superheroId) => {
  try{
    await axios.delete(`${BASE_URL}/${API_SUPERHEROES}/${superheroId}`)
  } catch (error){
    alert("Error deleting superhero", error.message);
      throw error;
  }
})

const superheroesOperations = {
  listSuperheroes,
  addSuperhero,
  deleteSuperhero
};

export default superheroesOperations;
