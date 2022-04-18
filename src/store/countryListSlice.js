import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countryList: [],
}

export const countryListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCountryList: (state,action) => {
      state.countryList = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { addCountryList } = countryListSlice.actions

export default countryListSlice.reducer