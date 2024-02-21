import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAddProjects } from "../interface/IAdminType";
import { ADD_PROJECTS } from "../API/Api";

interface IProjects {
  data: null | IAddProjects
}

const initialState: IProjects = {
  data: null
};

export const addProjects = createAsyncThunk(
  "projects" , 
  async(data: IAddProjects) => {
    try {
      const response = await ADD_PROJECTS(data);
      return response.data
    } catch(e) {
      return e
    }
  }
)

export const ProjectSlice =  createSlice({
  name: "projects" , 
  initialState, 
  reducers: {}, 
  extraReducers(builder) {
    builder 
      .addCase(addProjects.fulfilled.type, (state , action: PayloadAction<IProjects>) => {
        state.data = action.payload.data
      })
  },
});

export default ProjectSlice.reducer;
