'use client';

import { Box, Grid, Select } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setPartSoal } from '../../config/redux/slices/partSoalSlice';
import Choose from '../toepAssesmentComponent/choose'
import GambarTkdaComp from './tkdaComp/gambarTkdaComp';

export default function skdagambar() {

  const dispatch = useDispatch()

  const partSoal = useSelector((state) => state.partSoal.partSoalShow);
  console.log(partSoal)
  const renderComponent = () => {
    switch (partSoal) {
      case "FIGUR ANALYSIS AND SYNTHESIS":
        return <GambarTkdaComp />;
      case "SPATIAL REASONING":
        return <GambarTkdaComp />;
      default:
        return <Choose />;
    }
  };

  return (
    <Box
      marginTop={5}>
      <Grid item xs={12} md={12} lg={12}>
        Part Soal:
        <Select
          native
          required
          sx={{ mb: 2, ml: 2, height: 30 }}
          onChange={(e) => dispatch(setPartSoal(e.target.value))}
        >
          <option>Pilih Part Soal...</option>
          <option value="FIGUR ANALYSIS AND SYNTHESIS">Figur Analysis & Synthesis</option>
          <option value="SPATIAL REASONING">Spatial Reasoning</option>
        </Select>
      </Grid>
      {renderComponent()}

    </Box>
  )
}
