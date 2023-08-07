import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import kategoriSoalReducer from './slices/kategoriSoalSlice'
import kategoriSoalSkdaReducer from './slices/kategoriSoalSkdaSlice'
import jenisSoalReducer from './slices/jenisSoalSlice'
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    kategoriSoal: kategoriSoalReducer,
    kategoriSoalSkda: kategoriSoalSkdaReducer,
    jenisSoal: jenisSoalReducer,
  },
})