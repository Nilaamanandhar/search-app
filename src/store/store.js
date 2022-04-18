import { configureStore } from '@reduxjs/toolkit'
import countryListSlice from "./countryListSlice";
export const store = configureStore({
  reducer: {
    countryList:countryListSlice
  },
})