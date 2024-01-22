import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ProjectSlice from "./ProjectSlice"

const rootReducer = combineReducers({
  ProjectSlice
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