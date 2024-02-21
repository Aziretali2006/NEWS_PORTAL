import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAddProjects } from "../interface/IAdminType";
import { ADD_PROJECTS } from "../API/Api";

const initialState: IAddProjects = {
  mainInfo: "", 
  text: "", 
  photo: null, 
  videoUrl: "", 
  education: ""
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
      .addCase(addProjects.fulfilled.type, (state , action: PayloadAction<IAddProjects>) => {
        state.education = action.payload.education;
        state.mainInfo = action.payload.mainInfo;
        state.photo = action.payload.photo;
        state.text = action.payload.text;
        state.videoUrl = action.payload.videoUrl
      })
  },
})