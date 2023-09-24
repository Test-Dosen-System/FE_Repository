'use client';

import { useState, useEffect } from 'react';
// import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Navbar from '../../../../components/admincomponent/navbar'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'description', headerName: 'Description', width: 600 },
  {
    field: 'thumbnail',
    headerName: 'Thumbnail',
    width: 100,
    renderCell: (params) => (
      <img src={params.value} alt="Item" style={{ width: '100%', height: 'auto' }} />
    ),
  },
]

const defaultTheme = createTheme();

export default function AssesmentToep() {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/products')
      const json = await res.json()
      setTableData(json.products)
      console.log(json)
    }
    fetchData()
  }, [])


  return (
    <ThemeProvider theme={defaultTheme}>
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
            All TOEP Assesment Here
            <div style={{ height: 700, width: '100%' }}>
              <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={12}
              />
            </div>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}