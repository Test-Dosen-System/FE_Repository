import { ThemeProvider } from '@mui/material/styles';
import { Box, TextField, Grid, Button, Select, IconButton } from '@mui/material'
import theme from '../../config/theme'


export default function toepaudio() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        marginBottom={5}>
        Pilih Jenis Soal dan Kategori Soal
      </Box>
    </ThemeProvider>
  )
}
