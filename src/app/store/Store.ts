import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ProjectSlice from "./ProjectSlice";
import AdminNewsSlice from "./AdminNewsSlice";
import AuthSlice from "./AuthSlice";
import AdminPhotoSlice from "./AdminPhotoSlice";
import AdminProjectsSlice from "./AdminProjectsSlice";
import ClientAddInfo from "./ClientAddInfo";

const rootReducer = combineReducers({
  ProjectSlice,
  AdminNewsSlice,
  AuthSlice, 
  AdminPhotoSlice, 
  AdminProjectsSlice, 
  ClientAddInfo
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];