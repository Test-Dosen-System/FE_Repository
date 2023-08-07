import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jenisSoal: "default"
};

const jenisSoalSlice = createSlice({
  name: "jenisSoal",
  initialState,
  reducers: {
    setJenisSoal: (state, action) => {
      state.jenisSoalShow = action.payload;
    }
  }
});

export const { setJenisSoal } = jenisSoalSlice.actions;

export default jenisSoalSlice.reducer;