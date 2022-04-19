import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countryList: [],
  selectedCountry:""
}

export const countryListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCountryList: (state,action) => {
      state.countryList = action.payload
    },
    setSelectedCountry: (state,action) => {
      state.selectedCountry = action.payload
    },


  },
})

// Action creators are generated for each case reducer function
export const { addCountryList ,setSelectedCountry} = countryListSlice.actions

export default countryListSlice.reducer