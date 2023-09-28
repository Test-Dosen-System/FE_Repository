'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Navbar from '../../../../components/admincomponent/navbar'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SkdaText from '../../../../components/skdaAssesmentComponent/skdatext'
import SkdaGambar from '../../../../components/skdaAssesmentComponent/skdagambar'
import SkdaAudio from '../../../../components/skdaAssesmentComponent/skdaaudio'
import theme from '../../../../config/theme'
import { useDispatch, useSelector } from 'react-redux'
import { setKategoriSoalSkda } from '../../../../config/redux/slices/kategoriSoalSkdaSlice'

export default function CreateAssesmentSkda() {


  const dispatch = useDispatch();

  const kategoriSoalSkdaShow = useSelector((state) => state.kategoriSoalSkda.kategoriSoalSkdaShow);
  console.log(kategoriSoalSkdaShow)

  // Render different components based on the state
  const renderComponentSkda = () => {
    switch (kategoriSoalSkdaShow) {
      case "teksskda":
        return <SkdaText />;
      case "gambarskda":
        return <SkdaGambar />;
      // case "audioskda":
      //   return <SkdaAudio />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar navName="Buat Soal Test TKDA" />
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
                    <Button variant={kategoriSoalSkdaShow === "teksskda" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setKategoriSoalSkda("teksskda"))}
                      sx={{
                        mr: 2,
                        width: 200
                      }}>
                      Teks
                    </Button>
                    <Button variant={kategoriSoalSkdaShow === "gambarskda" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setKategoriSoalSkda("gambarskda"))}
                      sx={{
                        mr: 2,
                        width: 200
                      }}>
                      Gambar
                    </Button>
                    {/* <Button variant={kategoriSoalSkdaShow === "audioskda" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setKategoriSoalSkda("audioskda"))}
                      sx={{
                        mr: 2,
                        width: 200
                      }}>
                      Audio
                    </Button> */}
                    {renderComponentSkda()}
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