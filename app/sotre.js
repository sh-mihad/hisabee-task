'use client';
import { configureStore } from '@reduxjs/toolkit'
import apiSlice from './fetures/api/apiSlice';
import sidebarReducer from "./fetures/sidebarSlice/sidebarSlice"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    sidebar : sidebarReducer

  },
  middleware:(getDefultMiddlewares)=>getDefultMiddlewares().concat(apiSlice.middleware)
  
})