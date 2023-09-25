'use client';

import { ThemeProvider } from '@mui/material/styles';
import { Box, Grid, Select } from '@mui/material'
import theme from '../../config/theme'
import { useDispatch, useSelector } from 'react-redux'
import { setPartSoal } from '../../config/redux/slices/partSoalSlice'
import Choose from './choose'
import ResponsisConversationMiniTalks from './audioComponent/allToepAudio';

export default function toepaudio() {
  const dispatch = useDispatch();

  const partSoal = useSelector((state) => state.partSoal.partSoalShow);

  const renderComponent = () => {
    switch (partSoal) {
      case "RESPONSES":
        return <ResponsisConversationMiniTalks />;
      case "CONVERSATION":
        return <ResponsisConversationMiniTalks />;
      case "LONGER CONVERSATION":
        return <ResponsisConversationMiniTalks />;
      case "MINI TALKS":
        return <ResponsisConversationMiniTalks />;
      default:
        return <Choose />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box marginTop={5}>
        <Grid item xs={12} md={12} lg={12}>
          Part Soal:
          <Select
            native
            required
            sx={{ mb: 2, ml: 2, height: 30 }}
            onChange={(e) => dispatch(setPartSoal(e.target.value))}
          >
            <option>Pilih Part Soal...</option>
            <option value="RESPONSES">Responses</option>
            <option value="CONVERSATION">Conversation</option>
            <option value="LONGER CONVERSATION">Longer Conversation</option>
            <option value="MINI TALKS">Mini Talks</option>
          </Select>
        </Grid>
        {renderComponent()}

      </Box>
    </ThemeProvider >
  )
}
