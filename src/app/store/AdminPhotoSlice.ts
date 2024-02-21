import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IAddPhoto } from "../interface/IAdminType"
import { ADD_PHOTO } from "../API/Api"

const initialState: IAddPhoto = {
  data: {
    mainInfo: "", 
    photo: ""
  }
}

export const AddPhoto = createAsyncThunk(
  "addPhoto", 
  async (data: IAddPhoto) => {
    try {
      const response = await ADD_PHOTO(data);
      return response.data
    } catch(e) {
      return e
    }
  }
);

export const PhotoSlice = createSlice({
  name: "photo", 
  initialState, 
  reducers: {}, 
  extraReducers(builder) {
    builder 
      .addCase(AddPhoto.fulfilled.type, (state, action: PayloadAction<IAddPhoto>) => {
        state.data = action.payload.data
      })
  },
})

export default PhotoSlice.reducer;