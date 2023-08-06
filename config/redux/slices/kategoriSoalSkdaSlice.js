import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kategoriSoalSkda: "default"
};

const kategoriSoalSkdaSlice = createSlice({
  name: "kategoriSoalSkda",
  initialState,
  reducers: {
    setKategoriSoalSkda: (state, action) => {
      state.kategoriSoalSkdaShow = action.payload;
    }

  }
});

export const { setKategoriSoalSkda } = kategoriSoalSkdaSlice.actions;

export default kategoriSoalSkdaSlice.reducer;
