import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADD_NEWS, GET_NEWS } from "../API/Api";
import { IAddNews } from "../interface/IAdminType";

interface IAdminSlice {
  addNews: boolean,
  editableRowIndex: number | null,
  editedRow: string[],
  isLoading: boolean,
  addContent: IAddNews | null
  getContent: IAddNews[];
}

const initialState: IAdminSlice = {
  addNews: true, 
  editableRowIndex: null,
  editedRow: [],
  isLoading: false,
  getContent: [],
  addContent: null
};

export const addNews = createAsyncThunk(
  "addNews",
  async(data: IAddNews, e) => {
    try {
      const response = await ADD_NEWS(data);
      console.log(response.data)
      return response.data
    } catch(e) {
      return e
    };
  }
)

export const getNews = createAsyncThunk(
  "getNews",
  async(e) => {
    try {
      const response = await GET_NEWS();
      console.log(response.data);
      return response.data
    } catch(e) {
      return e
    };
  }
)

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
    },
  },
  extraReducers(builder) {
    builder 
      .addCase(addNews.fulfilled.type, (state, action: PayloadAction<IAdminSlice>) =>{
        state.addContent = action.payload.addContent
      }) 
      .addCase(getNews.fulfilled.type, (state, action: PayloadAction<IAddNews[]>) =>{ // Используйте тип IAddNews[] для PayloadAction
        state.isLoading = false;
        state.getContent = action.payload;
      }) 
  },
});

export const { setEditedRow } = AdminNewsSlice.actions;
export const { setAddNews } = AdminNewsSlice.actions;
export const { setEditableRowIndex } = AdminNewsSlice.actions;
export default AdminNewsSlice.reducer;