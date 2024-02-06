import { createSlice } from "@reduxjs/toolkit";

interface IAdminSlice {
  addNews: boolean,
  editableRowIndex: number | null,
  editedRow: string[],
}

const initialState: IAdminSlice = {
  addNews: true, 
  editableRowIndex: null,
  editedRow: []
};

export const AdminNewsSlice = createSlice({
  name: "Admin/News",
  initialState,
  reducers: {
    setAddNews: (state) => {
      state.addNews = false
    },
    setEditableRowIndex: (state, action) => {
      state.editableRowIndex = action.payload
    },
    setEditedRow: (state , action) => {
      state.editedRow = action.payload
    }
  }
});

export const { setEditedRow } = AdminNewsSlice.actions;
export const { setAddNews } = AdminNewsSlice.actions;
export const { setEditableRowIndex } = AdminNewsSlice.actions;
export default AdminNewsSlice.reducer;