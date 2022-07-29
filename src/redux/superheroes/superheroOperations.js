import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, API_SUPERHEROES } from "../../config";

const listSuperheroes = createAsyncThunk(
  "superheroes/listSuperheroes",
  async (page) => {
    const currentPage = page ? page : 1;
    const limitHeroes = 5;
    try {
      const { data } = await axios.get(`${BASE_URL}/${API_SUPERHEROES}?page=${currentPage}&limit=${limitHeroes}`);
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

const getSuperheroById = createAsyncThunk("superheroes/getSuperheroById", async(superheroId) => {

  try{
    const {data} = await axios.get(`${BASE_URL}/${API_SUPERHEROES}/${superheroId}`);
    console.log(data)
    return data;
  } catch(error) {
    alert("Error get superhero by id", error.message);
    throw error;
  }
})

const updateSuperhero = createAsyncThunk("superheroes/changeSuperhero", async({superheroId, updatedSuperhero}) => {
  try{
    await axios.put(`${BASE_URL}/${API_SUPERHEROES}/${superheroId}`, updatedSuperhero)
  } catch(error){
    alert("Error changed superhero", error.message);
    throw error;
  }
})

const addSuperheroImage = createAsyncThunk("superheroes/addSuperheroImage", async(superheroId, formdata) => {
  try{
    await axios.patch(`${BASE_URL}/${API_SUPERHEROES}/${superheroId}`, formdata)  
  } catch(error){
    alert("Error superhero add image ", error.message);
    throw error;
  }
})

const deleteSuperheroImage = createAsyncThunk("superheroes/deleteSuperheroImage", async(data) => {
  const superheroId = data.superhero._id;
  const imageId = data.image.id;
  try{
    await axios.delete(`${BASE_URL}/${API_SUPERHEROES}/${superheroId}/${imageId}`)  
  } catch(error){
    alert("Error superhero delete image ", error.message);
    throw error;
  }
})

const superheroesOperations = {
  listSuperheroes,
  addSuperhero,
  deleteSuperhero,
  getSuperheroById,
  updateSuperhero,
  addSuperheroImage,
  deleteSuperheroImage

};

export default superheroesOperations;
