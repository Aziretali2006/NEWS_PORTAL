import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
  selectedId: null,
  anotherPage: null,
}

export const ProjectSlice = createSlice({
  name: "Project/slice",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
    setProjectId: (state, action) => {
      state.selectedId = action.payload;
    },
    clearProjectId: (state) => {
      state.selectedId = null;
    },
    anotherPage: (state, action) => {
      state.anotherPage = action.payload
    }
  }
});

export const { setCategory } = ProjectSlice.actions;
export const { anotherPage } = ProjectSlice.actions;
export const { setProjectId } = ProjectSlice.actions;
export const { clearProjectId } = ProjectSlice.actions;
export default ProjectSlice.reducer;