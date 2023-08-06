import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kategoriSoal: "default"
};

const kategoriSoalSlice = createSlice({
  name: "kategoriSoal",
  initialState,
  reducers: {
    setKategoriSoal: (state, action) => {
      state.kategoriSoalShow = action.payload;
    }

  }
});

export const { setKategoriSoal } = kategoriSoalSlice.actions;

export default kategoriSoalSlice.reducer;
