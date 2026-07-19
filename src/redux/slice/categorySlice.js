import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await API.get("categories/");
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    openId: null,
    loading: false,
  },
  reducers: {
    toggleAccordion: (state, action) => {
      state.openId =
        state.openId === action.payload ? null : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.results || action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { toggleAccordion } = categorySlice.actions;

export default categorySlice.reducer;