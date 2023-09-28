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
      case "DUMMY ANALOGY":
        return <TeksSkdaComp />;
      case "DUMMY LOGICAL REASONING":
        return <TeksSkdaComp />;
      case "DUMMY ANALITICAL REASONING":
        return <TeksSkdaComp />;
      case "DUMMY ARITMETIC":
        return <TeksSkdaComp />;
      case "DUMMY NUMBER SERIES":
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
          <option value="DUMMY ANALOGY">Analogy</option>
          <option value="DUMMY LOGICAL REASONING">Logical Reasoning</option>
          <option value="DUMMY ANALITICAL REASONING">Analitical Reasoning</option>
          <option value="DUMMY ARITMETIC">Aritmatic</option>
          <option value="DUMMY NUMBER SERIES">Number Series</option>
          <option value="WORD PORBLEM">Word Problem</option>
        </Select>
      </Grid>
      {renderComponent()}

    </Box>
  )
}
