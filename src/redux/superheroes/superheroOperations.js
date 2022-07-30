import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, API_SUPERHEROES } from "../../config";
import toast from "react-hot-toast";

const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

const listSuperheroes = createAsyncThunk(
  "superheroes/listSuperheroes",
  async (page) => {
    const currentPage = page ? page : 1;
    const limitHeroes = 5;
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${API_SUPERHEROES}?page=${currentPage}&limit=${limitHeroes}`
      );
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
      notifySuccess("Superhero is created");
    } catch (error) {
      notifyError("Error adding superhero");
      throw error;
    }
  }
);

const deleteSuperhero = createAsyncThunk(
  "superheroes/deleteSuperhero",
  async (superheroId) => {
    try {
      await axios.delete(`${BASE_URL}/${API_SUPERHEROES}/${superheroId}`);
      notifySuccess("Superhero is removed");
    } catch (error) {
      notifyError("Error deleting superhero");
      throw error;
    }
  }
);

const getSuperheroById = createAsyncThunk(
  "superheroes/getSuperheroById",
  async (superheroId) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${API_SUPERHEROES}/${superheroId}`
      );
      return data;
    } catch (error) {
      alert("Error get superhero by id", error.message);
      throw error;
    }
  }
);

const updateSuperhero = createAsyncThunk(
  "superheroes/changeSuperhero",
  async ({ superheroId, updatedSuperhero }) => {
    try {
      await axios.put(
        `${BASE_URL}/${API_SUPERHEROES}/${superheroId}`,
        updatedSuperhero
      );
      notifySuccess("Superhero is updated");
    } catch (error) {
      notifyError("Error changed superhero");
      throw error;
    }
  }
);

const addSuperheroImage = createAsyncThunk(
  "superheroes/addSuperheroImage",
  async (data) => {
    try {
      await axios.patch(
        `${BASE_URL}/${API_SUPERHEROES}/${data.superheroId}`,
        data.formData
      );
      notifySuccess("New image added");
    } catch (error) {
      notifyError("Error add image");
      throw error;
    }
  }
);

const deleteSuperheroImage = createAsyncThunk(
  "superheroes/deleteSuperheroImage",
  async (data) => {
    const superheroId = data.superhero._id;
    const imageId = data.image.id;
    try {
      await axios.delete(
        `${BASE_URL}/${API_SUPERHEROES}/${superheroId}/${imageId}`
      );
      notifySuccess("Image removed");
    } catch (error) {
      notifyError("Image deletion error");
      throw error;
    }
  }
);

const superheroesOperations = {
  listSuperheroes,
  addSuperhero,
  deleteSuperhero,
  getSuperheroById,
  updateSuperhero,
  addSuperheroImage,
  deleteSuperheroImage,
};

export default superheroesOperations;
