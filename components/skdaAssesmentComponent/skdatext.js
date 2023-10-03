'use client';

import { Box, Grid, Select } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setPartSoal } from '../../config/redux/slices/partSoalSlice';
import Choose from '../toepAssesmentComponent/choose';
import TeksSkdaComp from './tkdaComp/teksTkdaComp';

export default function skdatext() {

  const dispatch = useDispatch();

  const partSoal = useSelector((state) => state.partSoal.partSoalShow);

  const renderComponent = () => {
    switch (partSoal) {
      case "ANALOGY":
        return <TeksSkdaComp />;
      case "LOGICAL REASONING":
        return <TeksSkdaComp />;
      case "ANALITICAL REASONING":
        return <TeksSkdaComp />;
      case "ARITMETIC":
        return <TeksSkdaComp />;
      case "NUMBER SERIES":
        return <TeksSkdaComp />;
      case "WORD PORBLEM":
        return <TeksSkdaComp />;
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
          <option value="ANALOGY">Analogy</option>
          <option value="LOGICAL REASONING">Logical Reasoning</option>
          <option value="ANALITICAL REASONING">Analitical Reasoning</option>
          <option value="ARITMETIC">Aritmatic</option>
          <option value="NUMBER SERIES">Number Series</option>
          <option value="WORD PORBLEM">Word Problem</option>
        </Select>
      </Grid>
      {renderComponent()}

    </Box>
  )
}
