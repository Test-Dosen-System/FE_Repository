import * as React from 'react';
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
import { setKategoriSoal } from '../../../../config/redux/slices/kategoriSoalSlice'

export default function CreateAssesmentToep() {

  const dispatch = useDispatch();

  const kategoriSoalShow = useSelector((state) => state.kategoriSoal.kategoriSoalShow);
  console.log(kategoriSoalShow)

  // Render different components based on the state
  const renderComponent = () => {
    switch (kategoriSoalShow) {
      case "teks":
        return <ToepText />;
      case "gambar":
        return <ToepGambar />;
      case "audio":
        return <ToepAudio />;
      default:
        return <ToepText />;
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
                  Jenis Soal
                  <Grid item xs={12} md={12} lg={12}>
                    <Button variant={kategoriSoalShow === "teks" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setKategoriSoal("teks"))}
                      sx={{
                        mr: 2,
                        width: 200
                      }}>
                      Teks
                    </Button>
                    <Button variant={kategoriSoalShow === "gambar" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setKategoriSoal("gambar"))}
                      sx={{
                        mr: 2,
                        width: 200
                      }}>
                      Gambar
                    </Button>
                    <Button variant={kategoriSoalShow === "audio" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setKategoriSoal("audio"))}
                      sx={{
                        mr: 2,
                        width: 200
                      }}>
                      Audio
                    </Button>
                    {renderComponent()}
                  </Grid>

                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}