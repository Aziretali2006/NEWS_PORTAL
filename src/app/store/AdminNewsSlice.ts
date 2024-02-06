import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addNews: null, 
};

export const AdminNewsSlice = createSlice({
  name: "Admin/News",
  initialState,
  reducers: {
    setAddNews: (state , action) => {
      state.addNews = action.payload
    }
  }
});

export const { setAddNews } = AdminNewsSlice.actions;
export default AdminNewsSlice.reducer;