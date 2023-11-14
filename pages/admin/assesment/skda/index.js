'use client';

import { useSelector, useDispatch } from 'react-redux';
import {ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Toolbar, Container, Paper, Button, Grid } from '@mui/material';
import Navbar from '../../../../components/admincomponent/navbar'
import theme from '@/config/theme';
import { setPartSoal } from '@/config/redux/slices/partSoalSlice';
import Analogy from '@/components/skdaAssesmentComponent/compShow/analogy';
import LogicalReasoning from '@/components/skdaAssesmentComponent/compShow/logicalReasoning';
import AnaliticalReasoning from '@/components/skdaAssesmentComponent/compShow/analiticalReasoning';
import Aritmetic from '@/components/skdaAssesmentComponent/compShow/aritmetic';
import NumberSeries from '@/components/skdaAssesmentComponent/compShow/numberSeries';
import WordProblem from '@/components/skdaAssesmentComponent/compShow/wordProblem';
import FigurAnalysisSynthesis from '@/components/skdaAssesmentComponent/compShow/figurAnalisisSynthesis';
import SpatialReasoning from '@/components/skdaAssesmentComponent/compShow/spatialReasoning';
import Choose from '@/components/toepAssesmentComponent/choose';

export default function AssesmentSkda() {
  const dispatch = useDispatch();

  const partSoal = useSelector((state) => state.partSoal.partSoalShow);

  const renderComponent = () => {
    switch (partSoal) {
      case "ANALOGY":
        return <Analogy />;
      case "LOGICAL REASONING":
        return <LogicalReasoning />;
      case "ANALITICAL REASONING":
        return <AnaliticalReasoning />;
      case "ARITMETIC":
        return <Aritmetic />;
      case "NUMBER SERIES":
        return <NumberSeries />;
      case "WORD PORBLEM":
        return <WordProblem />;
      case "FIGUR ANALYSIS AND SYNTHESIS":
        return <FigurAnalysisSynthesis />;
      case "SPATIAL REASONING":
        return <SpatialReasoning />;
      default:
        return <Choose />;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar navName="Daftar Soal TKDA" />
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
            <Button variant={partSoal === "ANALOGY" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("ANALOGY"))}
              sx={{
                mr: 2,
                width: "23%"
              }}>
                Analogy
            </Button>
            <Button variant={partSoal === "LOGICAL REASONING" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("LOGICAL REASONING"))}
              sx={{
                mr: 2,
                width: "23%"
              }}>
                Logical Reasoning
            </Button>
            <Button variant={partSoal === "ANALITICAL REASONING" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("ANALITICAL REASONING"))}
              sx={{
                mr: 2,
                width: "23%"
              }}>
                Analitical Reasoning
            </Button>
            <Button variant={partSoal === "ARITMETIC" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("ARITMETIC"))}
              sx={{
                mr: 2,
                width: "23%"
              }}>
                Aritmetic
            </Button>
            </Grid>
            <Grid item xs={12} md={12} lg={12} marginTop={2}>
            <Button variant={partSoal === "NUMBER SERIES" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("NUMBER SERIES"))}
              sx={{
                mr: 2,
                width: "23%"
              }}>
                Number Series
            </Button>
            <Button variant={partSoal === "WORD PORBLEM" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("WORD PORBLEM"))}
              sx={{
                mr: 2,
                width: "23%"
              }}>
                Word Problem
            </Button>
            <Button variant={partSoal === "FIGUR ANALYSIS AND SYNTHESIS" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("FIGUR ANALYSIS AND SYNTHESIS"))}
              sx={{
                mr: 2,
                width: "23%"
              }}>
                Figur Analysis
            </Button>
            <Button variant={partSoal === "SPATIAL REASONING" ? "contained" : "outlined"} color="primary" onClick={() => dispatch(setPartSoal("SPATIAL REASONING"))}
              sx={{
                mr: 2,
                width: "23%"
              }}>
                Spatial Reasoning
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