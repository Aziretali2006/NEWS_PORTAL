import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ProjectSlice from "./ProjectSlice";
import AdminNewsSlice from "./AdminNewsSlice";
import AuthSlice from "./AuthSlice";

const rootReducer = combineReducers({
  ProjectSlice,
  AdminNewsSlice,
  AuthSlice
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