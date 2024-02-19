import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin, IRegister } from "../interface/IAuthType";
import { GET_USERS, POST_LOGIN, POST_REGISTER } from "../API/Api";

interface IUser {
  username: string;
  id: string;
  email: string;
  isLoading: boolean,
}

interface IAuthSlice {
  accessToken: string;
  refreshToken: string;
  user: IUser | null;
  isLoading: boolean,
}

const initialState: IAuthSlice = {
  accessToken: "",
  refreshToken: "",
  user: null,
  isLoading: false,
};

export const PostRegister = createAsyncThunk(
  "/auth/register",
  async (data: IRegister, thunkAPI) => {
    try {
      const response = await POST_REGISTER(data);
      console.log(response.data);
      return response.data;
    } catch(e: any) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const PostLogin = createAsyncThunk(
  "/auth/login",
  async (data: ILogin, thunkAPI) => {
    try {
      const response = await POST_LOGIN(data);
      console.log(response.data);
      return response.data;
    } catch(e: any) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const GetUsers = createAsyncThunk(
  "/auth/getUsers", 
  async() => {
    try {
      const response = await GET_USERS();
      return response.data
    } catch(e) {
      return e
    }
  }
)

export const AuthSlice = createSlice({
  name: "auth/register",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(PostRegister.fulfilled, (state, action: PayloadAction<IAuthSlice>) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
      })
      .addCase(PostLogin.fulfilled, (state, action: PayloadAction<IAuthSlice>) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
      })
      .addCase(GetUsers.fulfilled, (state, action: PayloadAction<boolean>) => {
        state.isLoading = false
      })
  }
});

export default AuthSlice.reducer;
