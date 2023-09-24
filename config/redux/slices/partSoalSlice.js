import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  partSoalShow: 'default',
};

const partSoalSlice = createSlice({
  name: 'partSoal',
  initialState,
  reducers: {
    setPartSoal: (state, action) => {
      state.partSoalShow = action.payload;
    }
  }
});

export const { setPartSoal } = partSoalSlice.actions;

export default partSoalSlice.reducer;