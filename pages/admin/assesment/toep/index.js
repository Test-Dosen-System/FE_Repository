'use client';

import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Toolbar, Container, Paper, Grid, Button } from '@mui/material';
import Navbar from '../../../../components/admincomponent/navbar'
import theme from '@/config/theme';
import { setPartSoal } from '@/config/redux/slices/partSoalSlice';
import Conversation from '@/components/toepAssesmentComponent/showComponent/conversation';
import LongerConversation from '@/components/toepAssesmentComponent/showComponent/longerConversation';
import MiniTalks from '@/components/toepAssesmentComponent/showComponent/miniTalks';
import ReadingSection from '@/components/toepAssesmentComponent/showComponent/readingSection';
import Responses from '@/components/toepAssesmentComponent/showComponent/responses';
import Choose from '@/components/toepAssesmentComponent/choose';

export default function AssesmentToep() {
  const dispatch = useDispatch();

  const partSoal = useSelector((state) => state.partSoal.partSoalShow);

  const renderComponent = () => {
    switch (partSoal) {
      case "READING SECTION":
        return <ReadingSection />;
      case "RESPONSES":
        return <Responses />;
      case "CONVERSATION":
        return <Conversation />;
      case "LONGER CONVERSATION":
        return <LongerConversation />;
      case "MINI TALKS":
        return <MiniTalks />;
      default:
        return <Choose />;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar navName="Daftar Soal TOEP" />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
            <Grid item xs={12} md={12} lg={12}>
            <Button variant={partSoal === "READING SECTION" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("READING SECTION"))}
              sx={{
                mr: 2,
                width: "18%"
              }}>
                Reading Section
            </Button>
            <Button variant={partSoal === "RESPONSES" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("RESPONSES"))}
              sx={{
                mr: 2,
                width: "18%"
              }}>
                Responses
            </Button>
            <Button variant={partSoal === "CONVERSATION" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("CONVERSATION"))}
              sx={{
                mr: 2,
                width: "18%"
              }}>
                Conversation
            </Button>
            <Button variant={partSoal === "LONGER CONVERSATION" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("LONGER CONVERSATION"))}
              sx={{
                mr: 2,
                width: "18%"
              }}>
                Longer Conversation
            </Button>
            <Button variant={partSoal === "MINI TALKS" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("MINI TALKS"))}
              sx={{
                mr: 2,
                width: "18%"
              }}>
                Mini Talks
            </Button>
            {renderComponent()}
            </Grid>
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}