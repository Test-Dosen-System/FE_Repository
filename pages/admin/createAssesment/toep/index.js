'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Navbar from '../../../../components/admincomponent/navbar'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ToepText from '../../../../components/toepAssesmentComponent/toeptext'
import ToepGambar from '../../../../components/toepAssesmentComponent/toepgambar'
import ToepAudio from '../../../../components/toepAssesmentComponent/toepaudio'
import theme from '../../../../config/theme'
import { useDispatch, useSelector } from 'react-redux'
import { setJenisSoal } from '../../../../config/redux/slices/jenisSoalSlice'

export default function CreateAssesmentToep() {
  const dispatch = useDispatch();

  const jenisSoalShow = useSelector((state) => state.jenisSoal.jenisSoalShow);

  // Render different components based on the state
  const renderComponent = () => {
    switch (jenisSoalShow) {
      case "TEKS":
        return <ToepText />;
      // case "GAMBAR":
      //   return <ToepGambar />;
      case "AUDIO":
        return <ToepAudio />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar navName="Buat Soal Test TOEP" />
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
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >

                  <Grid item xs={12} md={12} lg={12}>
                    <Button variant={jenisSoalShow === "TEKS" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setJenisSoal("TEKS"))}
                      sx={{
                        mr: 2
                      }}>
                      Teks/Reading
                    </Button>
                    {/* <Button variant={jenisSoalShow === "GAMBAR" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setJenisSoal("GAMBAR"))}
                      sx={{
                        mr: 2,
                        width: 100
                      }}>
                      Gambar
                    </Button> */}
                    <Button variant={jenisSoalShow === "AUDIO" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setJenisSoal("AUDIO"))}
                      sx={{
                        mr: 2
                      }}>
                      Audio/Listening
                    </Button>

                  </Grid>
                  {renderComponent()}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}