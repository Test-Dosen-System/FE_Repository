import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography } from '@mui/material'
import theme from '../../config/theme'


export default function chooseKategori() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={100}
        marginTop={5}
        marginBottom={5}>
        <Typography variant="h5" >
          Pilih Kategori Soal
        </Typography>
      </Box>
    </ThemeProvider>
  )
}
