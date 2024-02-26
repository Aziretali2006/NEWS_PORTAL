import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADD_INFO } from "../API/Api";
import { IAddInfo } from "../interface/IAdminType";

const initialState: IAddInfo = {
  message: "", 
  phoneNumber: "", 
  email: "", 
  username: "",
};

export const AddInfo = createAsyncThunk(
  "info" , 
  async (info: IAddInfo) => {
    try {
      const response = await ADD_INFO(info);
      console.log(response.data)
      return response.data
    } catch(e) {
      console.log(e)
    }
  }
);

export const ClientAddInfo = createSlice({
  name: "info" , 
  initialState, 
  reducers: {}, 
  extraReducers(builder) {
    builder
      .addCase(AddInfo.fulfilled, (state , action: PayloadAction<IAddInfo>) => {
        state.email = action.payload.email;
        state.message = action.payload.message;
        state.phoneNumber = action.payload.phoneNumber;
        state.username = action.payload.username;
      })
  },
});

export default ClientAddInfo.reducer;