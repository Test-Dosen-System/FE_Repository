'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from "next-auth/react";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Navbar from '../../../../components/admincomponent/navbar'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ExcelFileUpload from '@/components/excelFileComponent/excelFileUpload';
import ChooseKategori from '@/components/excelFileComponent/chooseKategori';
import theme from '../../../../config/theme'
import { useDispatch, useSelector } from 'react-redux'
import { setKategoriSoal } from '../../../../config/redux/slices/kategoriSoalSlice'
import { setJenisSoal } from '../../../../config/redux/slices/jenisSoalSlice'

export default function CreateAssesmentExcelFile() {
  const dispatch = useDispatch();

  const kategoriSoalShow = useSelector((state) => state.kategoriSoal.kategoriSoalShow);

  const renderComponent = () => {
    if (!kategoriSoalShow) {
      return <ChooseKategori />;
    } else {
      return <ExcelFileUpload />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar navName="Import File Excel Test TOEP dan TKDA" />
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
                    <Button variant={kategoriSoalShow === "TOEP" ? "contained" : "outlined"} color="secondary" onClick={() => dispatch(setKategoriSoal("TOEP"))}
                      sx={{
                        width: 100
                      }}>
                      TOEP
                    </Button>
                    <Button variant={kategoriSoalShow === "TKDA" ? "contained" : "outlined"} color="secondary" onClick={() => dispatch(setKategoriSoal("TKDA"))}
                      sx={{
                        ml: 1,
                        width: 100
                      }}>
                      TKDA
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