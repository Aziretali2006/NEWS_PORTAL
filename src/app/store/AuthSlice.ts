import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin, IRegister } from "../interface/IAuthType";
import { GET_USERS, LOG_OUT, POST_LOGIN, POST_REGISTER } from "../API/Api";

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
  isAuthed: boolean
}

const initialState: IAuthSlice = {
  accessToken: "",
  refreshToken: "",
  user: null,
  isLoading: false,
  isAuthed: false
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
);

export const Logout = createAsyncThunk(
  "/auth/logout",
  async() => {
    try {
      const response = await LOG_OUT();
      return response
    } catch(e: any) {
      return e
    }
  }
)

export const accessToken = localStorage.getItem("accessToken");
const retrievedUserArray = localStorage.getItem("user");
export const username = retrievedUserArray ? JSON.parse(retrievedUserArray) : [];

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
        (state.isAuthed = true), 
          localStorage.setItem("accessToken" , action.payload.accessToken)
          localStorage.setItem("user", JSON.stringify(action.payload?.user?.username));
      })
      .addCase(GetUsers.fulfilled, (state, action: PayloadAction<boolean>) => {
        state.isLoading = false
      })
      .addCase(Logout.fulfilled, (state, action: PayloadAction<boolean>) => {
        state.isLoading = false
      })
  }
});

export default AuthSlice.reducer;
