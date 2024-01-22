import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
  selectedId: null
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
  }
});

export const { setCategory } = ProjectSlice.actions;
export const { setProjectId } = ProjectSlice.actions;
export const { clearProjectId } = ProjectSlice.actions;
export default ProjectSlice.reducer;